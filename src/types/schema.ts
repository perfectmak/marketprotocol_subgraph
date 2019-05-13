import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class MarketContract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MarketContract entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MarketContract entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MarketContract", id.toString(), this);
  }

  static load(id: string): MarketContract | null {
    return store.get("MarketContract", id) as MarketContract | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get collateralTokenAddress(): Bytes {
    let value = this.get("collateralTokenAddress");
    return value.toBytes();
  }

  set collateralTokenAddress(value: Bytes) {
    this.set("collateralTokenAddress", Value.fromBytes(value));
  }

  get collateralPoolAddress(): Bytes {
    let value = this.get("collateralPoolAddress");
    return value.toBytes();
  }

  set collateralPoolAddress(value: Bytes) {
    this.set("collateralPoolAddress", Value.fromBytes(value));
  }

  get collateralPoolBalance(): BigInt {
    let value = this.get("collateralPoolBalance");
    return value.toBigInt();
  }

  set collateralPoolBalance(value: BigInt) {
    this.set("collateralPoolBalance", Value.fromBigInt(value));
  }

  get priceFloor(): BigInt {
    let value = this.get("priceFloor");
    return value.toBigInt();
  }

  set priceFloor(value: BigInt) {
    this.set("priceFloor", Value.fromBigInt(value));
  }

  get priceCap(): BigInt {
    let value = this.get("priceCap");
    return value.toBigInt();
  }

  set priceCap(value: BigInt) {
    this.set("priceCap", Value.fromBigInt(value));
  }

  get priceDecimalPlaces(): BigInt {
    let value = this.get("priceDecimalPlaces");
    return value.toBigInt();
  }

  set priceDecimalPlaces(value: BigInt) {
    this.set("priceDecimalPlaces", Value.fromBigInt(value));
  }

  get qtyMultiplier(): BigInt {
    let value = this.get("qtyMultiplier");
    return value.toBigInt();
  }

  set qtyMultiplier(value: BigInt) {
    this.set("qtyMultiplier", Value.fromBigInt(value));
  }

  get expirationTimestamp(): BigInt {
    let value = this.get("expirationTimestamp");
    return value.toBigInt();
  }

  set expirationTimestamp(value: BigInt) {
    this.set("expirationTimestamp", Value.fromBigInt(value));
  }

  get collateralPerUnit(): BigInt {
    let value = this.get("collateralPerUnit");
    return value.toBigInt();
  }

  set collateralPerUnit(value: BigInt) {
    this.set("collateralPerUnit", Value.fromBigInt(value));
  }

  get collateralTokenFeePerUnit(): BigInt {
    let value = this.get("collateralTokenFeePerUnit");
    return value.toBigInt();
  }

  set collateralTokenFeePerUnit(value: BigInt) {
    this.set("collateralTokenFeePerUnit", Value.fromBigInt(value));
  }

  get mktTokenFeePerUnit(): BigInt {
    let value = this.get("mktTokenFeePerUnit");
    return value.toBigInt();
  }

  set mktTokenFeePerUnit(value: BigInt) {
    this.set("mktTokenFeePerUnit", Value.fromBigInt(value));
  }

  get settlementDelay(): BigInt {
    let value = this.get("settlementDelay");
    return value.toBigInt();
  }

  set settlementDelay(value: BigInt) {
    this.set("settlementDelay", Value.fromBigInt(value));
  }

  get shortPositionToken(): string {
    let value = this.get("shortPositionToken");
    return value.toString();
  }

  set shortPositionToken(value: string) {
    this.set("shortPositionToken", Value.fromString(value));
  }

  get longPositionToken(): string {
    let value = this.get("longPositionToken");
    return value.toString();
  }

  set longPositionToken(value: string) {
    this.set("longPositionToken", Value.fromString(value));
  }

  get lastPrice(): BigInt | null {
    let value = this.get("lastPrice");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set lastPrice(value: BigInt | null) {
    if (value === null) {
      this.unset("lastPrice");
    } else {
      this.set("lastPrice", Value.fromBigInt(value as BigInt));
    }
  }

  get settlementPrice(): BigInt | null {
    let value = this.get("settlementPrice");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set settlementPrice(value: BigInt | null) {
    if (value === null) {
      this.unset("settlementPrice");
    } else {
      this.set("settlementPrice", Value.fromBigInt(value as BigInt));
    }
  }

  get settlementTimeStamp(): BigInt | null {
    let value = this.get("settlementTimeStamp");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set settlementTimeStamp(value: BigInt | null) {
    if (value === null) {
      this.unset("settlementTimeStamp");
    } else {
      this.set("settlementTimeStamp", Value.fromBigInt(value as BigInt));
    }
  }

  get isSettled(): boolean {
    let value = this.get("isSettled");
    return value.toBoolean();
  }

  set isSettled(value: boolean) {
    this.set("isSettled", Value.fromBoolean(value));
  }

  get isWhitelisted(): boolean {
    let value = this.get("isWhitelisted");
    return value.toBoolean();
  }

  set isWhitelisted(value: boolean) {
    this.set("isWhitelisted", Value.fromBoolean(value));
  }

  get factoryAddress(): Bytes {
    let value = this.get("factoryAddress");
    return value.toBytes();
  }

  set factoryAddress(value: Bytes) {
    this.set("factoryAddress", Value.fromBytes(value));
  }

  get oracleUrl(): string {
    let value = this.get("oracleUrl");
    return value.toString();
  }

  set oracleUrl(value: string) {
    this.set("oracleUrl", Value.fromString(value));
  }

  get oracleStatistic(): string {
    let value = this.get("oracleStatistic");
    return value.toString();
  }

  set oracleStatistic(value: string) {
    this.set("oracleStatistic", Value.fromString(value));
  }

  get oracleHubAddress(): Bytes {
    let value = this.get("oracleHubAddress");
    return value.toBytes();
  }

  set oracleHubAddress(value: Bytes) {
    this.set("oracleHubAddress", Value.fromBytes(value));
  }
}

export class PositionToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PositionToken entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PositionToken entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PositionToken", id.toString(), this);
  }

  static load(id: string): PositionToken | null {
    return store.get("PositionToken", id) as PositionToken | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get decimals(): BigInt {
    let value = this.get("decimals");
    return value.toBigInt();
  }

  set decimals(value: BigInt) {
    this.set("decimals", Value.fromBigInt(value));
  }

  get marketSide(): string {
    let value = this.get("marketSide");
    return value.toString();
  }

  set marketSide(value: string) {
    this.set("marketSide", Value.fromString(value));
  }

  get marketContract(): string | null {
    let value = this.get("marketContract");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set marketContract(value: string | null) {
    if (value === null) {
      this.unset("marketContract");
    } else {
      this.set("marketContract", Value.fromString(value as string));
    }
  }
}

export class PositionTokenOwner extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PositionTokenOwner entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PositionTokenOwner entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PositionTokenOwner", id.toString(), this);
  }

  static load(id: string): PositionTokenOwner | null {
    return store.get("PositionTokenOwner", id) as PositionTokenOwner | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes | null {
    let value = this.get("owner");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes | null) {
    if (value === null) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromBytes(value as Bytes));
    }
  }

  get token(): string | null {
    let value = this.get("token");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set token(value: string | null) {
    if (value === null) {
      this.unset("token");
    } else {
      this.set("token", Value.fromString(value as string));
    }
  }

  get balance(): BigInt | null {
    let value = this.get("balance");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set balance(value: BigInt | null) {
    if (value === null) {
      this.unset("balance");
    } else {
      this.set("balance", Value.fromBigInt(value as BigInt));
    }
  }
}
