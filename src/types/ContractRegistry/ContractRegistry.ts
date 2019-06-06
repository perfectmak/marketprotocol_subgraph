import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AddressAddedToWhitelist extends EthereumEvent {
  get params(): AddressAddedToWhitelist__Params {
    return new AddressAddedToWhitelist__Params(this);
  }
}

export class AddressAddedToWhitelist__Params {
  _event: AddressAddedToWhitelist;

  constructor(event: AddressAddedToWhitelist) {
    this._event = event;
  }

  get contractAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class AddressRemovedFromWhitelist extends EthereumEvent {
  get params(): AddressRemovedFromWhitelist__Params {
    return new AddressRemovedFromWhitelist__Params(this);
  }
}

export class AddressRemovedFromWhitelist__Params {
  _event: AddressRemovedFromWhitelist;

  constructor(event: AddressRemovedFromWhitelist) {
    this._event = event;
  }

  get contractAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class FactoryAddressAdded extends EthereumEvent {
  get params(): FactoryAddressAdded__Params {
    return new FactoryAddressAdded__Params(this);
  }
}

export class FactoryAddressAdded__Params {
  _event: FactoryAddressAdded;

  constructor(event: FactoryAddressAdded) {
    this._event = event;
  }

  get factoryAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class FactoryAddressRemoved extends EthereumEvent {
  get params(): FactoryAddressRemoved__Params {
    return new FactoryAddressRemoved__Params(this);
  }
}

export class FactoryAddressRemoved__Params {
  _event: FactoryAddressRemoved;

  constructor(event: FactoryAddressRemoved) {
    this._event = event;
  }

  get factoryAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends EthereumEvent {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ContractRegistry extends SmartContract {
  static bind(address: Address): ContractRegistry {
    return new ContractRegistry("ContractRegistry", address);
  }

  addressWhiteList(param0: BigInt): Address {
    let result = super.call("addressWhiteList", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    return result[0].toAddress();
  }

  factoryAddressWhiteList(param0: Address): boolean {
    let result = super.call("factoryAddressWhiteList", [
      EthereumValue.fromAddress(param0)
    ]);
    return result[0].toBoolean();
  }

  isWhiteListed(param0: Address): boolean {
    let result = super.call("isWhiteListed", [
      EthereumValue.fromAddress(param0)
    ]);
    return result[0].toBoolean();
  }

  owner(): Address {
    let result = super.call("owner", []);
    return result[0].toAddress();
  }

  isOwner(): boolean {
    let result = super.call("isOwner", []);
    return result[0].toBoolean();
  }

  isAddressWhiteListed(contractAddress: Address): boolean {
    let result = super.call("isAddressWhiteListed", [
      EthereumValue.fromAddress(contractAddress)
    ]);
    return result[0].toBoolean();
  }

  getAddressWhiteList(): Array<Address> {
    let result = super.call("getAddressWhiteList", []);
    return result[0].toAddressArray();
  }
}

export class RenounceOwnershipCall extends EthereumCall {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends EthereumCall {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class RemoveContractFromWhiteListCall extends EthereumCall {
  get inputs(): RemoveContractFromWhiteListCall__Inputs {
    return new RemoveContractFromWhiteListCall__Inputs(this);
  }

  get outputs(): RemoveContractFromWhiteListCall__Outputs {
    return new RemoveContractFromWhiteListCall__Outputs(this);
  }
}

export class RemoveContractFromWhiteListCall__Inputs {
  _call: RemoveContractFromWhiteListCall;

  constructor(call: RemoveContractFromWhiteListCall) {
    this._call = call;
  }

  get contractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get whiteListIndex(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RemoveContractFromWhiteListCall__Outputs {
  _call: RemoveContractFromWhiteListCall;

  constructor(call: RemoveContractFromWhiteListCall) {
    this._call = call;
  }
}

export class AddAddressToWhiteListCall extends EthereumCall {
  get inputs(): AddAddressToWhiteListCall__Inputs {
    return new AddAddressToWhiteListCall__Inputs(this);
  }

  get outputs(): AddAddressToWhiteListCall__Outputs {
    return new AddAddressToWhiteListCall__Outputs(this);
  }
}

export class AddAddressToWhiteListCall__Inputs {
  _call: AddAddressToWhiteListCall;

  constructor(call: AddAddressToWhiteListCall) {
    this._call = call;
  }

  get contractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddAddressToWhiteListCall__Outputs {
  _call: AddAddressToWhiteListCall;

  constructor(call: AddAddressToWhiteListCall) {
    this._call = call;
  }
}

export class AddFactoryAddressCall extends EthereumCall {
  get inputs(): AddFactoryAddressCall__Inputs {
    return new AddFactoryAddressCall__Inputs(this);
  }

  get outputs(): AddFactoryAddressCall__Outputs {
    return new AddFactoryAddressCall__Outputs(this);
  }
}

export class AddFactoryAddressCall__Inputs {
  _call: AddFactoryAddressCall;

  constructor(call: AddFactoryAddressCall) {
    this._call = call;
  }

  get factoryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddFactoryAddressCall__Outputs {
  _call: AddFactoryAddressCall;

  constructor(call: AddFactoryAddressCall) {
    this._call = call;
  }
}

export class RemoveFactoryAddressCall extends EthereumCall {
  get inputs(): RemoveFactoryAddressCall__Inputs {
    return new RemoveFactoryAddressCall__Inputs(this);
  }

  get outputs(): RemoveFactoryAddressCall__Outputs {
    return new RemoveFactoryAddressCall__Outputs(this);
  }
}

export class RemoveFactoryAddressCall__Inputs {
  _call: RemoveFactoryAddressCall;

  constructor(call: RemoveFactoryAddressCall) {
    this._call = call;
  }

  get factoryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveFactoryAddressCall__Outputs {
  _call: RemoveFactoryAddressCall;

  constructor(call: RemoveFactoryAddressCall) {
    this._call = call;
  }
}
