import dotenv from 'dotenv';
import { TezosToolkit } from '@taquito/taquito';
import { importKey } from '@taquito/signer';
import FAUCET_KEY from './account.js';
dotenv.config();

async function main() {
  const Tezos = new TezosToolkit(process.env.DATAHUB_URL);

  console.log(`Importing account tz1cAyqnpyHiZi6fxUAtXBAUg36H7wh5nHL9`);

  importKey(
    Tezos,
    FAUCET_KEY.email,
    FAUCET_KEY.password,
    FAUCET_KEY.mnemonic.join(' '),
    FAUCET_KEY.secret
  ).catch((error) => {
    console.log(JSON.stringify(error, null, 2))
  })
}

main();