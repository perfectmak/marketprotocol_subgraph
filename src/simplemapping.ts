import { MarketContractCreated } from "./types/ContractFactory/ContractFactory";
import { AddressAddedToWhitelist, AddressRemovedFromWhitelist } from "./types/ContractRegistry/ContractRegistry"
import { TokensMinted, TokensRedeemed } from './types/CollateralPool/CollateralPool'
import { Transfer } from './types/ContractFactory/PositionToken'
import {
  MarketContract as MarketContractTemplate,
  PositionToken as PositionTokenTemplate
} from "./types/ContractFactory/templates";
import { ContractSettled, UpdatedLastPrice } from './types/MarketContract/MarketContract'
import {
  MarketContract,
  PositionToken,
  PositionTokenOwner,
  PositionTokenMintedEvent,
  PositionTokenRedeemedEvent
} from './types/schema'
import {
  ContractFactoryCaller,
  MarketContractCaller,
  PositionTokenCaller
} from './chain_callers';
import { BigInt, Address } from '@graphprotocol/graph-ts';

let MarketSideLongInt = 0
let MarketSideShortInt = 1
let MarketSideBothInt = 2

let MarketSideLong = 'Long'
let MarketSideShort = 'Short'
let MarketSideBoth = 'Both'
let MarketSideUnknown = 'Unknown'


/**
 * Fetches the relevant fields for PositionToken
 * 
 * @param positionToken 
 */
function hydratePositionToken(positionToken: PositionToken): void {
  let positionTokenCaller = new PositionTokenCaller(positionToken.id)
  positionToken.name = positionTokenCaller.name
  positionToken.symbol = positionTokenCaller.symbol
  positionToken.decimals = positionTokenCaller.decimals
  positionToken.isMintable = true

  let marketSide = positionTokenCaller.marketSide
  if (marketSide.equals(BigInt.fromI32(MarketSideLongInt))) {
    positionToken.marketSide = MarketSideLong
  } else if (marketSide.equals(BigInt.fromI32(MarketSideShortInt))) {
    positionToken.marketSide = MarketSideShort
  } else {
    // should never happen, but good for debugging
    positionToken.marketSide = MarketSideUnknown
  }
}

/**
 * Create the contract factory in the store
 * 
 * Create the new MarketContract in store
 * Also updates the marketContract and its positions tokens
 * 
 */
export function handleMarketContractCreated(event: MarketContractCreated): void {
  let marketContractAddress = event.params.contractAddress
  // Track and Create new MarketContract
  MarketContractTemplate.create(marketContractAddress);

  let contractFactoryCaller = new ContractFactoryCaller(event.address.toHex())
  let marketContractCaller = new MarketContractCaller(marketContractAddress.toHex());

  let marketContract = MarketContract.load(marketContractAddress.toHex());
  if (marketContract == null) {
    marketContract = new MarketContract(marketContractAddress.toHex())
    marketContract.isWhitelisted = true;
    marketContract.isSettled = false;
  }

  marketContract.id = event.params.contractAddress.toHex()
  marketContract.creator = event.params.creator
  marketContract.factoryAddress = event.address
  marketContract.oracleHubAddress = contractFactoryCaller.oracleHubAddress

  // create position tokens first
  let shortPositionTokenAddress = marketContractCaller.shortPositionTokenAddress
  let longPositionTokenAddress = marketContractCaller.longPositionTokenAddress

  // track the new tokens for events
  PositionTokenTemplate.create(shortPositionTokenAddress)
  PositionTokenTemplate.create(longPositionTokenAddress)

  let shortPositionToken = new PositionToken(shortPositionTokenAddress.toHex())
  let longPositionToken = new PositionToken(longPositionTokenAddress.toHex())
  hydratePositionToken(shortPositionToken)
  hydratePositionToken(longPositionToken)

  shortPositionToken.marketContract = marketContract.id
  longPositionToken.marketContract = marketContract.id

  shortPositionToken.save()
  longPositionToken.save()

  marketContract.name = marketContractCaller.name

  marketContract.collateralTokenAddress = marketContractCaller.collateralTokenAddress
  marketContract.collateralPerUnit = marketContractCaller.collateralPerUnit
  marketContract.collateralPoolAddress = marketContractCaller.collateralPoolAddress
  marketContract.collateralPoolBalance = BigInt.fromI32(0)

  marketContract.priceFloor = marketContractCaller.priceFloor
  marketContract.priceCap = marketContractCaller.priceCap
  marketContract.priceDecimalPlaces = marketContractCaller.priceDecimalPlaces
  marketContract.qtyMultiplier = marketContractCaller.qtyMultiplier
  marketContract.expirationTimestamp = marketContractCaller.expirationTimestamp

  marketContract.collateralTokenFeePerUnit = marketContractCaller.collateralTokenFeePerUnit
  marketContract.mktTokenFeePerUnit = marketContractCaller.mktTokenFeePerUnit

  marketContract.settlementDelay = marketContractCaller.settlementDelay

  marketContract.oracleUrl = marketContractCaller.oracleUrl
  marketContract.oracleStatistic = marketContractCaller.oracleStatistic

  marketContract.shortPositionToken = shortPositionToken.id
  marketContract.longPositionToken = longPositionToken.id

  marketContract.save()
}

// MARKET CONTRACT EVENTS

export function handleContractSettled(event: ContractSettled): void {
  let marketContract = MarketContract.load(event.address.toHex())

  marketContract.settlementPrice = event.params.settlePrice
  marketContract.settlementTimeStamp = event.block.timestamp
  marketContract.isSettled = true

  marketContract.save()

  // update long and short tokens to not being mintable
  let shortToken = PositionToken.load(marketContract.shortPositionToken)
  let longToken = PositionToken.load(marketContract.longPositionToken)

  shortToken.isMintable = false;
  longToken.isMintable = false;

  shortToken.save()
  longToken.save()
}

export function handleUpdatedLastPrice(event: UpdatedLastPrice): void {
  let marketContract = MarketContract.load(event.address.toHex())

  marketContract.lastPrice = event.params.price

  marketContract.save()
}

// CONTRACT REGISTRY EVENTS

/**
 * Load or create MarketContract Entity and updated its isWhitelisted
 * 
 * @param event 
 */
export function handleMarketContractAddressWhitelisted(event: AddressAddedToWhitelist): void {
  let marketContractAddress = event.params.contractAddress
  let marketContract = MarketContract.load(marketContractAddress.toHex());
  if (marketContract == null) {
    marketContract = new MarketContract(marketContractAddress.toHex())
    marketContract.isSettled = false
  }

  marketContract.isWhitelisted = true

  marketContract.save()
}

export function handleMarketContractAddressRemovedFromWhitelist(event: AddressRemovedFromWhitelist): void {
  let marketContractAddress = event.params.contractAddress
  let marketContract = MarketContract.load(marketContractAddress.toHex());
  if (marketContract == null) {
    marketContract = new MarketContract(marketContractAddress.toHex())
  }

  marketContract.isWhitelisted = false

  marketContract.save()
}

// COLLATERAL POOL EVENTS

/**
 * Updates the collateralPool Balance of the contract involved
 * 
 * Also track who minted the position token
 * 
 */
export function handleTokensMinted(event: TokensMinted): void {
  let marketContractAddress = event.params.marketContract
  let marketContract = MarketContract.load(marketContractAddress.toHex())

  marketContract.collateralPoolBalance = marketContract.collateralPoolBalance
    .plus(event.params.collateralLocked)

  marketContract.save()

  let tokenMintEvent = new PositionTokenMintedEvent(event.transaction.hash.toHex())
  tokenMintEvent.qtyMinted = event.params.qtyMinted
  tokenMintEvent.marketContract = event.params.marketContract.toHex()
  tokenMintEvent.owner = event.params.user
  tokenMintEvent.collateralLocked = event.params.collateralLocked
  tokenMintEvent.fee = event.params.feesPaid
  tokenMintEvent.feeTokenAddress = event.params.feeToken
  tokenMintEvent.timestamp = event.block.timestamp

  tokenMintEvent.save()
}

/**
 * Update the collateralPool Balance of the contract involved
 * 
 * Also track who redeemed the position token
 * 
 */
export function handleTokensRedeemed(event: TokensRedeemed): void {
  let marketContractAddress = event.params.marketContract
  let marketContract = MarketContract.load(marketContractAddress.toHex())

  marketContract.collateralPoolBalance = marketContract.collateralPoolBalance
    .minus(event.params.collateralUnlocked)

  marketContract.save()

  let tokenRedeemed = new PositionTokenRedeemedEvent(event.transaction.hash.toHex())
  tokenRedeemed.qtyRedeemed = event.params.qtyRedeemed
  tokenRedeemed.marketContract = event.params.marketContract.toHex()
  tokenRedeemed.owner = event.params.user
  tokenRedeemed.collateralUnlocked = event.params.collateralUnlocked
  tokenRedeemed.timestamp = event.block.timestamp

  let marketSide = event.params.marketSide
  if (marketSide == MarketSideLongInt) {
    tokenRedeemed.marketSide = MarketSideLong
  } else if (marketSide == MarketSideShortInt) {
    tokenRedeemed.marketSide = MarketSideShort
  } else if (marketSide == MarketSideBothInt) {
    tokenRedeemed.marketSide = MarketSideBoth
  } else {
    tokenRedeemed.marketSide = MarketSideUnknown
  }

  tokenRedeemed.save()

}

// POSITION TOKEN EVENTS

export function handlePositionTokenTransfer(event: Transfer): void {
  let spenderAddress = event.params.from
  let receipientAddress = event.params.to
  let transferAmount = event.params.value

  if (spenderAddress.toHex() == receipientAddress.toHex()) {
    // same persons transfer, ignore
    return
  }

  if (transferAmount.equals(BigInt.fromI32(0))) {
    // zero value transfer, ignore
    return
  }

  let positionTokenAddress = event.address.toHex()
  let positionTokenCaller = new PositionTokenCaller(positionTokenAddress)

  let positionToken = PositionToken.load(positionTokenAddress)
  if (positionToken == null) {
    // weird should never happen, so return
    return
  }

  if (spenderAddress.toHex() != '0x0000000000000000000000000000000000000000') {
    let spendersBalance = positionTokenCaller.getBalanceOf(spenderAddress)
    let tokenOwner = loadOrCreateTokenOwner(spenderAddress.toHex(), positionToken.id)

    tokenOwner.balance = spendersBalance

    tokenOwner.save()
  }


  if (receipientAddress.toHex() != '0x0000000000000000000000000000000000000000') {
    let receipientsBalance = positionTokenCaller.getBalanceOf(receipientAddress)
    let tokenOwner = loadOrCreateTokenOwner(receipientAddress.toHex(), positionToken.id)
    
    tokenOwner.balance = receipientsBalance
    
    tokenOwner.save()
  }

  positionToken.save()
}

function loadOrCreateTokenOwner(ownerAddress: string, tokenAddress: string): PositionTokenOwner {
  let id = ownerAddress + '-' + tokenAddress
  let tokenOwner = PositionTokenOwner.load(id);
  if (tokenOwner == null) {
    tokenOwner = new PositionTokenOwner(id)
    tokenOwner.owner = Address.fromString(ownerAddress)
    tokenOwner.token = tokenAddress
  }

  return tokenOwner as PositionTokenOwner
}