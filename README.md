# MarketProtocol Subgraph

This is an implementation of the subgraph for [Market Protocol](https://marketprotocol.io).

You can explore it on The Graph here:
  - Kovan: https://thegraph.com/explorer/subgraph/perfectmak/marketprotocol-kovan
  - Mainnet: https://thegraph.com/explorer/subgraph/perfectmak/marketprotocol

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
fragment MarketContractData on MarketContract {
  id
  name
  priceCap
  priceFloor
  isSettled
  settlementPrice
  lastPrice
  expirationTimestamp
  settlementTimeStamp
  oracleUrl
}

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

Here are some fragments you can use:

```graphql
fragment PositionTokenData on PositionToken {
      id
      name
      symbol
      decimals
      marketSide
    }
```

### PositionTokenOwner

Use this entity to fetch position token owners and their balances.

### PositionTokenMintedEvent

Use this entity to fetch history of minting of a particular token or watch for minting events through subscriptions.

### PositionTokenRedeemedEvent

Use this entity to fetch history of redemptions of a particular token or watch for redeeming events through subscriptions.

## Example Queries
Here are some examples of some queries you can try out to see results or better still you could visit the [demo website](https://mkt-subgraph.perfects.engineering) to see some of them in action.

```javascript
export const PositionTokensQuery = gql`
  query {
    positionTokens(first: 10) {
      ...PositionTokenData
    }
  }
`;

export const AllMarketContractsQuery = gql`
  query {
    marketContracts(first: 10) {
      ...MarketContractData
    }
  }
`;

export const AllMarketContractsWithPositionTokensQuery = gql`
  query {
    marketContracts(first: 10) {
      ...MarketContractData
      shortPositionToken {
        ...PositionTokenData
      }
      longPositionToken {
        ...PositionTokenData
      }
    }
  }
`;

export const PositionTokenOwnerWithAddress = gql`
  query($ownerAddress: String) {
    positionTokenOwners(where: { owner: $ownerAddress }) {
      id
      owner
      token {
        ...PositionTokenData
      }
      balance
    }
  }
`;

export const AllMarketContractsWithPositionTokensExpiringWithinQuery = gql`
  query($gt: BigInt, $lt: BigInt) {
    marketContracts(
      first: 10
      where: { expirationTimestamp_gt: $gt, expirationTimestamp_lt: $lt }
    ) {
      ...MarketContractData
      shortPositionToken {
        ...PositionTokenData
      }
      longPositionToken {
        ...PositionTokenData
      }
    }
  }
`;
