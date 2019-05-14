import { Address, BigInt, SmartContract } from '@graphprotocol/graph-ts';

/**
 * 
 * @deprecated
 */
export class MarketContractCaller extends SmartContract {
  constructor(address: string) {
    super('MarketContract', Address.fromString(address))
  }

  get name(): string {
    let result = this.call('CONTRACT_NAME', [])
    return result[0].toString()
  }

  get collateralTokenAddress(): Address {
    return this.call('COLLATERAL_TOKEN_ADDRESS', [])[0].toAddress()
  }

  get collateralPerUnit(): BigInt {
    return this.call('COLLATERAL_PER_UNIT', [])[0].toBigInt()
  }

  get collateralPoolAddress(): Address {
    return this.call('COLLATERAL_POOL_ADDRESS', [])[0].toAddress()
  }

  get priceFloor(): BigInt {
    return this.call('PRICE_FLOOR', [])[0].toBigInt()
  }

  get priceCap(): BigInt {
    return this.call('PRICE_CAP', [])[0].toBigInt()
  }

  get priceDecimalPlaces(): BigInt {
    return this.call('PRICE_DECIMAL_PLACES', [])[0].toBigInt()
  }

  get qtyMultiplier(): BigInt {
    return this.call('QTY_MULTIPLIER', [])[0].toBigInt()
  }

  get expirationTimestamp(): BigInt {
    return this.call('EXPIRATION', [])[0].toBigInt()
  
  }

  get collateralTokenFeePerUnit(): BigInt {
    return this.call('COLLATERAL_TOKEN_FEE_PER_UNIT', [])[0].toBigInt()
  }

  get mktTokenFeePerUnit(): BigInt {
    return this.call('MKT_TOKEN_FEE_PER_UNIT', [])[0].toBigInt()
  }

  get settlementDelay(): BigInt {
    return this.call('SETTLEMENT_DELAY', [])[0].toBigInt()
  }

  get oracleUrl(): string {
    return this.call('ORACLE_URL', [])[0].toString()
  }

  get oracleStatistic(): string {
    return this.call('ORACLE_STATISTIC', [])[0].toString()
  }

  get longPositionTokenAddress(): Address {
    return this.call('LONG_POSITION_TOKEN', [])[0].toAddress()
  }

  get shortPositionTokenAddress(): Address {
    return this.call('SHORT_POSITION_TOKEN', [])[0].toAddress()
  }
}