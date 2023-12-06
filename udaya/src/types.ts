export type Pubkey = string;
export type Privkey = string;

export type LoginMethod = "nip7" | "pubkey" | "privkey";
export interface Session {
  method: LoginMethod;
  pubkey: Pubkey;
  privkey?: Privkey;
  wallet?:Pubkey;
}

export type Tag = string[];
export type Tags = Tag[];

export interface Wallet{
  address:Pubkey;
  nostrPubkey:Pubkey;
  nostrPrivkey?: Privkey;
}