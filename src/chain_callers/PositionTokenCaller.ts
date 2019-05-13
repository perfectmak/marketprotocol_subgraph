import { Address, BigInt, EthereumValue, SmartContract } from '@graphprotocol/graph-ts';

export class PositionTokenCaller extends SmartContract {
  constructor(address: string) {
    super('PositionToken', Address.fromString(address))
  }

  get name(): string {
    let values = this.call('name', [])
    return values[0].toString()
  }

  get symbol(): string {
    let values = this.call('symbol', [])
    return values[0].toString()
  }

  get decimals(): BigInt {
    let values = this.call('decimals', [])
    return values[0].toBigInt()
  }

  get marketSide(): BigInt {
    let values = this.call('MARKET_SIDE', [])
    return values[0].toBigInt()
  }

  public getBalanceOf(userAddress: Address): BigInt {
    let values = this.call('balanceOf', [EthereumValue.fromAddress(userAddress)])
    return values[0].toBigInt()
  }
}