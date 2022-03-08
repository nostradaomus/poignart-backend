/* eslint-disable no-use-before-define */
import { PopulatedDoc } from 'mongoose';

export interface ArtistInterface {
  name: string;
  email_address: string;
  discord_handle: string;
  telegram_handle?: string;
  github_handle?: string;
  eth_address: string;
  ens_name?: string;
  created_nfts: PopulatedDoc<TokenInterface[]>;
}

export interface TokenInterface {
  token_id: number;
  token_uri: string;
  min_price: string; // in wei
  created_by: PopulatedDoc<ArtistInterface>;
  signature: string;
  minter_address?: string;
  minted_at?: string;
}
