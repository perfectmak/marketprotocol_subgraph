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

export class TokensMinted extends EthereumEvent {
  get params(): TokensMinted__Params {
    return new TokensMinted__Params(this);
  }
}

export class TokensMinted__Params {
  _event: TokensMinted;

  constructor(event: TokensMinted) {
    this._event = event;
  }

  get marketContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get feeToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get qtyMinted(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get collateralLocked(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get feesPaid(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class TokensRedeemed extends EthereumEvent {
  get params(): TokensRedeemed__Params {
    return new TokensRedeemed__Params(this);
  }
}

export class TokensRedeemed__Params {
  _event: TokensRedeemed;

  constructor(event: TokensRedeemed) {
    this._event = event;
  }

  get marketContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get longQtyRedeemed(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get shortQtyRedeemed(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get collateralUnlocked(): BigInt {
    return this._event.parameters[4].value.toBigInt();
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

export class CollateralPool extends SmartContract {
  static bind(address: Address): CollateralPool {
    return new CollateralPool("CollateralPool", address);
  }

  feesCollectedByTokenAddress(param0: Address): BigInt {
    let result = super.call("feesCollectedByTokenAddress", [
      EthereumValue.fromAddress(param0)
    ]);
    return result[0].toBigInt();
  }

  mktToken(): Address {
    let result = super.call("mktToken", []);
    return result[0].toAddress();
  }

  owner(): Address {
    let result = super.call("owner", []);
    return result[0].toAddress();
  }

  isOwner(): boolean {
    let result = super.call("isOwner", []);
    return result[0].toBoolean();
  }

  contractAddressToCollateralPoolBalance(param0: Address): BigInt {
    let result = super.call("contractAddressToCollateralPoolBalance", [
      EthereumValue.fromAddress(param0)
    ]);
    return result[0].toBigInt();
  }

  marketContractRegistry(): Address {
    let result = super.call("marketContractRegistry", []);
    return result[0].toAddress();
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

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get marketContractRegistryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get mktTokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class MintPositionTokensCall extends EthereumCall {
  get inputs(): MintPositionTokensCall__Inputs {
    return new MintPositionTokensCall__Inputs(this);
  }

  get outputs(): MintPositionTokensCall__Outputs {
    return new MintPositionTokensCall__Outputs(this);
  }
}

export class MintPositionTokensCall__Inputs {
  _call: MintPositionTokensCall;

  constructor(call: MintPositionTokensCall) {
    this._call = call;
  }

  get marketContractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get qtyToMint(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get isAttemptToPayInMKT(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class MintPositionTokensCall__Outputs {
  _call: MintPositionTokensCall;

  constructor(call: MintPositionTokensCall) {
    this._call = call;
  }
}

export class RedeemPositionTokensCall extends EthereumCall {
  get inputs(): RedeemPositionTokensCall__Inputs {
    return new RedeemPositionTokensCall__Inputs(this);
  }

  get outputs(): RedeemPositionTokensCall__Outputs {
    return new RedeemPositionTokensCall__Outputs(this);
  }
}

export class RedeemPositionTokensCall__Inputs {
  _call: RedeemPositionTokensCall;

  constructor(call: RedeemPositionTokensCall) {
    this._call = call;
  }

  get marketContractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get qtyToRedeem(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RedeemPositionTokensCall__Outputs {
  _call: RedeemPositionTokensCall;

  constructor(call: RedeemPositionTokensCall) {
    this._call = call;
  }
}

export class SettleAndCloseCall extends EthereumCall {
  get inputs(): SettleAndCloseCall__Inputs {
    return new SettleAndCloseCall__Inputs(this);
  }

  get outputs(): SettleAndCloseCall__Outputs {
    return new SettleAndCloseCall__Outputs(this);
  }
}

export class SettleAndCloseCall__Inputs {
  _call: SettleAndCloseCall;

  constructor(call: SettleAndCloseCall) {
    this._call = call;
  }

  get marketContractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get longQtyToRedeem(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get shortQtyToRedeem(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SettleAndCloseCall__Outputs {
  _call: SettleAndCloseCall;

  constructor(call: SettleAndCloseCall) {
    this._call = call;
  }
}

export class WithdrawFeesCall extends EthereumCall {
  get inputs(): WithdrawFeesCall__Inputs {
    return new WithdrawFeesCall__Inputs(this);
  }

  get outputs(): WithdrawFeesCall__Outputs {
    return new WithdrawFeesCall__Outputs(this);
  }
}

export class WithdrawFeesCall__Inputs {
  _call: WithdrawFeesCall;

  constructor(call: WithdrawFeesCall) {
    this._call = call;
  }

  get feeTokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get feeRecipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class WithdrawFeesCall__Outputs {
  _call: WithdrawFeesCall;

  constructor(call: WithdrawFeesCall) {
    this._call = call;
  }
}

export class SetMKTTokenAddressCall extends EthereumCall {
  get inputs(): SetMKTTokenAddressCall__Inputs {
    return new SetMKTTokenAddressCall__Inputs(this);
  }

  get outputs(): SetMKTTokenAddressCall__Outputs {
    return new SetMKTTokenAddressCall__Outputs(this);
  }
}

export class SetMKTTokenAddressCall__Inputs {
  _call: SetMKTTokenAddressCall;

  constructor(call: SetMKTTokenAddressCall) {
    this._call = call;
  }

  get mktTokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMKTTokenAddressCall__Outputs {
  _call: SetMKTTokenAddressCall;

  constructor(call: SetMKTTokenAddressCall) {
    this._call = call;
  }
}

export class SetMarketContractRegistryAddressCall extends EthereumCall {
  get inputs(): SetMarketContractRegistryAddressCall__Inputs {
    return new SetMarketContractRegistryAddressCall__Inputs(this);
  }

  get outputs(): SetMarketContractRegistryAddressCall__Outputs {
    return new SetMarketContractRegistryAddressCall__Outputs(this);
  }
}

export class SetMarketContractRegistryAddressCall__Inputs {
  _call: SetMarketContractRegistryAddressCall;

  constructor(call: SetMarketContractRegistryAddressCall) {
    this._call = call;
  }

  get marketContractRegistryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMarketContractRegistryAddressCall__Outputs {
  _call: SetMarketContractRegistryAddressCall;

  constructor(call: SetMarketContractRegistryAddressCall) {
    this._call = call;
  }
}
