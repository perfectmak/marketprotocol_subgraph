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

export class UpdatedLastPrice extends EthereumEvent {
  get params(): UpdatedLastPrice__Params {
    return new UpdatedLastPrice__Params(this);
  }
}

export class UpdatedLastPrice__Params {
  _event: UpdatedLastPrice;

  constructor(event: UpdatedLastPrice) {
    this._event = event;
  }

  get price(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ContractSettled extends EthereumEvent {
  get params(): ContractSettled__Params {
    return new ContractSettled__Params(this);
  }
}

export class ContractSettled__Params {
  _event: ContractSettled;

  constructor(event: ContractSettled) {
    this._event = event;
  }

  get settlePrice(): BigInt {
    return this._event.parameters[0].value.toBigInt();
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

export class MarketContract extends SmartContract {
  static bind(address: Address): MarketContract {
    return new MarketContract("MarketContract", address);
  }

  lastPrice(): BigInt {
    let result = super.call("lastPrice", []);
    return result[0].toBigInt();
  }

  LONG_POSITION_TOKEN(): Address {
    let result = super.call("LONG_POSITION_TOKEN", []);
    return result[0].toAddress();
  }

  PRICE_DECIMAL_PLACES(): BigInt {
    let result = super.call("PRICE_DECIMAL_PLACES", []);
    return result[0].toBigInt();
  }

  COLLATERAL_TOKEN_ADDRESS(): Address {
    let result = super.call("COLLATERAL_TOKEN_ADDRESS", []);
    return result[0].toAddress();
  }

  isSettled(): boolean {
    let result = super.call("isSettled", []);
    return result[0].toBoolean();
  }

  ORACLE_URL(): string {
    let result = super.call("ORACLE_URL", []);
    return result[0].toString();
  }

  ORACLE_STATISTIC(): string {
    let result = super.call("ORACLE_STATISTIC", []);
    return result[0].toString();
  }

  SETTLEMENT_DELAY(): BigInt {
    let result = super.call("SETTLEMENT_DELAY", []);
    return result[0].toBigInt();
  }

  SHORT_POSITION_TOKEN(): Address {
    let result = super.call("SHORT_POSITION_TOKEN", []);
    return result[0].toAddress();
  }

  COLLATERAL_TOKEN_FEE_PER_UNIT(): BigInt {
    let result = super.call("COLLATERAL_TOKEN_FEE_PER_UNIT", []);
    return result[0].toBigInt();
  }

  CONTRACT_NAME(): string {
    let result = super.call("CONTRACT_NAME", []);
    return result[0].toString();
  }

  settlementTimeStamp(): BigInt {
    let result = super.call("settlementTimeStamp", []);
    return result[0].toBigInt();
  }

  owner(): Address {
    let result = super.call("owner", []);
    return result[0].toAddress();
  }

  isOwner(): boolean {
    let result = super.call("isOwner", []);
    return result[0].toBoolean();
  }

  ORACLE_HUB_ADDRESS(): Address {
    let result = super.call("ORACLE_HUB_ADDRESS", []);
    return result[0].toAddress();
  }

  PRICE_CAP(): BigInt {
    let result = super.call("PRICE_CAP", []);
    return result[0].toBigInt();
  }

  EXPIRATION(): BigInt {
    let result = super.call("EXPIRATION", []);
    return result[0].toBigInt();
  }

  isPostSettlementDelay(): boolean {
    let result = super.call("isPostSettlementDelay", []);
    return result[0].toBoolean();
  }

  PRICE_FLOOR(): BigInt {
    let result = super.call("PRICE_FLOOR", []);
    return result[0].toBigInt();
  }

  QTY_MULTIPLIER(): BigInt {
    let result = super.call("QTY_MULTIPLIER", []);
    return result[0].toBigInt();
  }

  MKT_TOKEN_FEE_PER_UNIT(): BigInt {
    let result = super.call("MKT_TOKEN_FEE_PER_UNIT", []);
    return result[0].toBigInt();
  }

  COLLATERAL_PER_UNIT(): BigInt {
    let result = super.call("COLLATERAL_PER_UNIT", []);
    return result[0].toBigInt();
  }

  COLLATERAL_POOL_ADDRESS(): Address {
    let result = super.call("COLLATERAL_POOL_ADDRESS", []);
    return result[0].toAddress();
  }

  settlementPrice(): BigInt {
    let result = super.call("settlementPrice", []);
    return result[0].toBigInt();
  }
}

export class RedeemShortTokenCall extends EthereumCall {
  get inputs(): RedeemShortTokenCall__Inputs {
    return new RedeemShortTokenCall__Inputs(this);
  }

  get outputs(): RedeemShortTokenCall__Outputs {
    return new RedeemShortTokenCall__Outputs(this);
  }
}

export class RedeemShortTokenCall__Inputs {
  _call: RedeemShortTokenCall;

  constructor(call: RedeemShortTokenCall) {
    this._call = call;
  }

  get qtyToRedeem(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get redeemer(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RedeemShortTokenCall__Outputs {
  _call: RedeemShortTokenCall;

  constructor(call: RedeemShortTokenCall) {
    this._call = call;
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

export class RedeemLongTokenCall extends EthereumCall {
  get inputs(): RedeemLongTokenCall__Inputs {
    return new RedeemLongTokenCall__Inputs(this);
  }

  get outputs(): RedeemLongTokenCall__Outputs {
    return new RedeemLongTokenCall__Outputs(this);
  }
}

export class RedeemLongTokenCall__Inputs {
  _call: RedeemLongTokenCall;

  constructor(call: RedeemLongTokenCall) {
    this._call = call;
  }

  get qtyToRedeem(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get redeemer(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RedeemLongTokenCall__Outputs {
  _call: RedeemLongTokenCall;

  constructor(call: RedeemLongTokenCall) {
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

  get qtyToMint(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get minter(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class MintPositionTokensCall__Outputs {
  _call: MintPositionTokensCall;

  constructor(call: MintPositionTokensCall) {
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

  get contractNames(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }

  get baseAddresses(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get oracleHubAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get contractSpecs(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get oracleURL(): string {
    return this._call.inputValues[4].value.toString();
  }

  get oracleStatistic(): string {
    return this._call.inputValues[5].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class OracleCallBackCall extends EthereumCall {
  get inputs(): OracleCallBackCall__Inputs {
    return new OracleCallBackCall__Inputs(this);
  }

  get outputs(): OracleCallBackCall__Outputs {
    return new OracleCallBackCall__Outputs(this);
  }
}

export class OracleCallBackCall__Inputs {
  _call: OracleCallBackCall;

  constructor(call: OracleCallBackCall) {
    this._call = call;
  }

  get price(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class OracleCallBackCall__Outputs {
  _call: OracleCallBackCall;

  constructor(call: OracleCallBackCall) {
    this._call = call;
  }
}

export class ArbitrateSettlementCall extends EthereumCall {
  get inputs(): ArbitrateSettlementCall__Inputs {
    return new ArbitrateSettlementCall__Inputs(this);
  }

  get outputs(): ArbitrateSettlementCall__Outputs {
    return new ArbitrateSettlementCall__Outputs(this);
  }
}

export class ArbitrateSettlementCall__Inputs {
  _call: ArbitrateSettlementCall;

  constructor(call: ArbitrateSettlementCall) {
    this._call = call;
  }

  get price(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ArbitrateSettlementCall__Outputs {
  _call: ArbitrateSettlementCall;

  constructor(call: ArbitrateSettlementCall) {
    this._call = call;
  }
}

export class SetOracleHubAddressCall extends EthereumCall {
  get inputs(): SetOracleHubAddressCall__Inputs {
    return new SetOracleHubAddressCall__Inputs(this);
  }

  get outputs(): SetOracleHubAddressCall__Outputs {
    return new SetOracleHubAddressCall__Outputs(this);
  }
}

export class SetOracleHubAddressCall__Inputs {
  _call: SetOracleHubAddressCall;

  constructor(call: SetOracleHubAddressCall) {
    this._call = call;
  }

  get oracleHubAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOracleHubAddressCall__Outputs {
  _call: SetOracleHubAddressCall;

  constructor(call: SetOracleHubAddressCall) {
    this._call = call;
  }
}
