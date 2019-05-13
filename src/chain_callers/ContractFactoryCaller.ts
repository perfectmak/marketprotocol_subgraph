import { Address, SmartContract } from '@graphprotocol/graph-ts';

export class ContractFactoryCaller extends SmartContract {
  constructor(address: string) {
    super('ContractFactory', Address.fromString(address))
  }

  get oracleHubAddress(): Address {
    let values = this.call('oracleHub', [])
    return values[0].toAddress()
  }
}