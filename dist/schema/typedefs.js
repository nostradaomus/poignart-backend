"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
  type Artist {
    _id: ID!
    name: String
    email_address: String!
    discord_handle: String!
    telegram_handle: String
    github_handle: String
    eth_address: String!
    ens_name: String
    created_nfts: [Token!]
    createdAt: String!
    updatedAt: String!
  }

  type Token {
    _id: ID!
    token_id: Number!
    token_uri: String!
    min_price: String!
    created_by: Artist!
    signature: String!
    minter_address: String
    minted_at: String
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    artists: [Artist]
    tokens: [Token]

    artist(filters: ArtistFilter): Artist
    token(filters: TokenFilter): Token
  }

  input ArtistFilter {
    _id: String
    eth_address: String
  }

  input TokenFilter {
    _id: String
    token_id: Number
  }
`;
