// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("creator", Value.fromString(""));
    this.set("symbol", Value.fromString(""));
    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Token entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get properties(): Array<string> | null {
    let value = this.get("properties");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set properties(value: Array<string> | null) {
    if (!value) {
      this.unset("properties");
    } else {
      this.set("properties", Value.fromStringArray(<Array<string>>value));
    }
  }

  get factory_id(): string | null {
    let value = this.get("factory_id");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set factory_id(value: string | null) {
    if (!value) {
      this.unset("factory_id");
    } else {
      this.set("factory_id", Value.fromString(<string>value));
    }
  }

  get release_type(): string | null {
    let value = this.get("release_type");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set release_type(value: string | null) {
    if (!value) {
      this.unset("release_type");
    } else {
      this.set("release_type", Value.fromString(<string>value));
    }
  }

  get saleData(): string | null {
    let value = this.get("saleData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set saleData(value: string | null) {
    if (!value) {
      this.unset("saleData");
    } else {
      this.set("saleData", Value.fromString(<string>value));
    }
  }

  get ExtensionData(): string | null {
    let value = this.get("ExtensionData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ExtensionData(value: string | null) {
    if (!value) {
      this.unset("ExtensionData");
    } else {
      this.set("ExtensionData", Value.fromString(<string>value));
    }
  }

  get attributes(): Array<string> | null {
    let value = this.get("attributes");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set attributes(value: Array<string> | null) {
    if (!value) {
      this.unset("attributes");
    } else {
      this.set("attributes", Value.fromStringArray(<Array<string>>value));
    }
  }

  get creator(): string {
    let value = this.get("creator");
    return value!.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get stakeholders(): Array<string> | null {
    let value = this.get("stakeholders");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set stakeholders(value: Array<string> | null) {
    if (!value) {
      this.unset("stakeholders");
    } else {
      this.set("stakeholders", Value.fromStringArray(<Array<string>>value));
    }
  }

  get payouts(): Array<string> | null {
    let value = this.get("payouts");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set payouts(value: Array<string> | null) {
    if (!value) {
      this.unset("payouts");
    } else {
      this.set("payouts", Value.fromStringArray(<Array<string>>value));
    }
  }

  get owners(): Array<string> | null {
    let value = this.get("owners");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set owners(value: Array<string> | null) {
    if (!value) {
      this.unset("owners");
    } else {
      this.set("owners", Value.fromStringArray(<Array<string>>value));
    }
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }
}

export class Creator extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Creator entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Creator entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Creator", id.toString(), this);
    }
  }

  static load(id: string): Creator | null {
    return changetype<Creator | null>(store.get("Creator", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}

export class Stakeholder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("share", Value.fromBigInt(BigInt.zero()));
    this.set("token", Value.fromString(""));
    this.set("balance", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Stakeholder entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Stakeholder entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Stakeholder", id.toString(), this);
    }
  }

  static load(id: string): Stakeholder | null {
    return changetype<Stakeholder | null>(store.get("Stakeholder", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get share(): BigInt {
    let value = this.get("share");
    return value!.toBigInt();
  }

  set share(value: BigInt) {
    this.set("share", Value.fromBigInt(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value!.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }
}

export class Payout extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromString(""));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("token", Value.fromString(""));
    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Payout entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Payout entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Payout", id.toString(), this);
    }
  }

  static load(id: string): Payout | null {
    return changetype<Payout | null>(store.get("Payout", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value!.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class Owner extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Owner entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Owner entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Owner", id.toString(), this);
    }
  }

  static load(id: string): Owner | null {
    return changetype<Owner | null>(store.get("Owner", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }
}

export class OwnerToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromString(""));
    this.set("token", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OwnerToken entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save OwnerToken entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("OwnerToken", id.toString(), this);
    }
  }

  static load(id: string): OwnerToken | null {
    return changetype<OwnerToken | null>(store.get("OwnerToken", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }
}

export class Attribute extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("trait_type", Value.fromString(""));
    this.set("value", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Attribute entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Attribute entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Attribute", id.toString(), this);
    }
  }

  static load(id: string): Attribute | null {
    return changetype<Attribute | null>(store.get("Attribute", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get trait_type(): string {
    let value = this.get("trait_type");
    return value!.toString();
  }

  set trait_type(value: string) {
    this.set("trait_type", Value.fromString(value));
  }

  get value(): string {
    let value = this.get("value");
    return value!.toString();
  }

  set value(value: string) {
    this.set("value", Value.fromString(value));
  }
}

export class Property extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("key", Value.fromString(""));
    this.set("value", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Property entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Property entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Property", id.toString(), this);
    }
  }

  static load(id: string): Property | null {
    return changetype<Property | null>(store.get("Property", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get key(): string {
    let value = this.get("key");
    return value!.toString();
  }

  set key(value: string) {
    this.set("key", Value.fromString(value));
  }

  get value(): string {
    let value = this.get("value");
    return value!.toString();
  }

  set value(value: string) {
    this.set("value", Value.fromString(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }
}

export class SaleData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("maxSupply", Value.fromBigInt(BigInt.zero()));
    this.set("totalEarnings", Value.fromBigInt(BigInt.zero()));
    this.set("totalSold", Value.fromBigInt(BigInt.zero()));
    this.set("totalReleased", Value.fromBigInt(BigInt.zero()));
    this.set("salePrice", Value.fromBigInt(BigInt.zero()));
    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
    this.set("royaltiesPercentage", Value.fromBigInt(BigInt.zero()));
    this.set("primaryCommission", Value.fromBigInt(BigInt.zero()));
    this.set("secondaryCommission", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SaleData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save SaleData entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("SaleData", id.toString(), this);
    }
  }

  static load(id: string): SaleData | null {
    return changetype<SaleData | null>(store.get("SaleData", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get maxSupply(): BigInt {
    let value = this.get("maxSupply");
    return value!.toBigInt();
  }

  set maxSupply(value: BigInt) {
    this.set("maxSupply", Value.fromBigInt(value));
  }

  get totalEarnings(): BigInt {
    let value = this.get("totalEarnings");
    return value!.toBigInt();
  }

  set totalEarnings(value: BigInt) {
    this.set("totalEarnings", Value.fromBigInt(value));
  }

  get totalSold(): BigInt {
    let value = this.get("totalSold");
    return value!.toBigInt();
  }

  set totalSold(value: BigInt) {
    this.set("totalSold", Value.fromBigInt(value));
  }

  get totalReleased(): BigInt {
    let value = this.get("totalReleased");
    return value!.toBigInt();
  }

  set totalReleased(value: BigInt) {
    this.set("totalReleased", Value.fromBigInt(value));
  }

  get salePrice(): BigInt {
    let value = this.get("salePrice");
    return value!.toBigInt();
  }

  set salePrice(value: BigInt) {
    this.set("salePrice", Value.fromBigInt(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get royaltiesPercentage(): BigInt {
    let value = this.get("royaltiesPercentage");
    return value!.toBigInt();
  }

  set royaltiesPercentage(value: BigInt) {
    this.set("royaltiesPercentage", Value.fromBigInt(value));
  }

  get primaryCommission(): BigInt {
    let value = this.get("primaryCommission");
    return value!.toBigInt();
  }

  set primaryCommission(value: BigInt) {
    this.set("primaryCommission", Value.fromBigInt(value));
  }

  get secondaryCommission(): BigInt {
    let value = this.get("secondaryCommission");
    return value!.toBigInt();
  }

  set secondaryCommission(value: BigInt) {
    this.set("secondaryCommission", Value.fromBigInt(value));
  }
}

export class ExtensionData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("approvedDepositExtension", Value.fromString(""));
    this.set("approvedRoyaltyExtension", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ExtensionData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ExtensionData entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ExtensionData", id.toString(), this);
    }
  }

  static load(id: string): ExtensionData | null {
    return changetype<ExtensionData | null>(store.get("ExtensionData", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get approvedDepositExtension(): string {
    let value = this.get("approvedDepositExtension");
    return value!.toString();
  }

  set approvedDepositExtension(value: string) {
    this.set("approvedDepositExtension", Value.fromString(value));
  }

  get approvedRoyaltyExtension(): string {
    let value = this.get("approvedRoyaltyExtension");
    return value!.toString();
  }

  set approvedRoyaltyExtension(value: string) {
    this.set("approvedRoyaltyExtension", Value.fromString(value));
  }
}
