import { useAccount } from '@micro-stacks/react';
import { useNftHook } from '../../hooks/useNftHook';

// ---------------------------------------------------
//  No smart contract call here, just api get.
//  If user is login, get and return all NFTs owned.
//  If user is not login, use a default account.
// ---------------------------------------------------

interface anObject {
  asset_identifier: string;
  value: {repr: string}
}

export const UserNft = () => {
  const { stxAddress } = useAccount();
  let nftList: string | null = '';

  nftList = useNftHook({stxAddress: stxAddress});

  if (nftList == null) { return  <div>Account has no NFT</div>};

  let nftArray: string[] = [];

  for (const [key, value] of Object.entries(nftList)) {
    let valueXY: anObject = JSON.parse(JSON.stringify(value));  //  :)
    nftArray.push(' NFT_contract=' + valueXY.asset_identifier + ' | NFT_ID=' + valueXY.value.repr);
  }

  if (!stxAddress) {
    return (
      <div>
        <p>No active session, using default account</p>
        <p>{JSON.stringify(nftArray)} </p>
      </div>
    ); 
  }
  else {
    return <div><p> {JSON.stringify(nftArray)} </p></div>;
  }
};
