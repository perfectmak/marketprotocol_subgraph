# MarketProtocol Subgraph

This is an implementation of the subgraph for [Market Protocol](https://marketprotocol.io).

You can explore it on The Graph here: https://thegraph.com/explorer/subgraph/perfectmak/marketprotocol-kovan.

## Entities

This subgraph exposes five entities:

1. MarketContract
2. PositionToken
3. PositionTokenMintedEvent
4. PositionTokenRedeemedEvent

### MarketContract

Use this entity to explore and query all the MarketContracts that have been deployed.

Here are some nice fragments you can use in your query:

```graphql
fragment ContractMeta on MarketContract {
  name
  priceFloor
  priceCap
  priceDecimalPlaces
  qtyMultiplier
  expirationTimestamp
}

fragment ContractFees on MarketContract {
  collateralTokenFeePerUnit
  mktTokenFeePerUnit
}

fragment ContractCollateral on MarketContract {
  collateralTokenAddress
  collateralPerUnit
}

fragment OracleData on MarketContract {
  oracleUrl
  oracleStatistic
}

fragment MarketPositionTokens on MarketContract {
  longPositionToken {
    id name symbol decimals marketSide
  }
  shortPositionToken {
    id name symbol decimals marketSide
  }
}
```

### PositionToken

Use this entity to explore the different position tokens.

### PositionTokenOwner

Use this entity to fetch position token owners and their balances.

### PositionTokenMintedEvent

Use this entity to fetch history of minting of a particular token or watch for minting events through subscriptions.

### PositionTokenRedeemedEvent

Use this entity to fetch history of redemptions of a particular token or watch for redeeming events through subscriptions.