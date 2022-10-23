import { useAccount, useOpenContractCall } from '@micro-stacks/react';
import { useNftHook } from '../../hooks/useNftHook';

//import { isSupportedNamespace } from '../../utils/ryderHandles';

// ---------------------------------------------------
//  If user is login, get and return all NFTs owned.
//  No smart contract call here, just api get.
// ---------------------------------------------------

export const TransferNft = () => {
  const { stxAddress } = useAccount();
  //const whatTheF = useNftHook({stxAddress});
  const whatTheF = useNftHook({stxAddress: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM'});
  
  console.log('whatTheF' + JSON.stringify(whatTheF));
  const whatTheFJson = JSON.stringify(whatTheF);
  //console.log(Object.entries(whatTheF)[1]);
  //const xxxx = (Object.entries(whatTheF)[1]);
  //console.log (JSON.stringify(xxxx));
  //console.log (xxxx["1"]);
  //const yyyy = xxxx["0"];

  if (!stxAddress) return <div> 'xxNothing from UserNft' </div>;  //return with nothing
    return <div> {whatTheFJson} </div>;
};


/*
GET
https://stacks-node-api.mainnet.stacks.co/extended/v1/tokens/nft/holdings/SPNWZ5V2TPWGQGVDR6T7B6RQ4XMGZ4PXTEE0VQ0S.marketplace-v3
https://stacks-node-api.mainnet.stacks.co/extended/v1/tokens/nft/holdings?principal=SPNWZ5V2TPWGQGVDR6T7B6RQ4XMGZ4PXTEE0VQ0S.marketplace-v3
*/

//console.log(hashedSaltedName);

/*
if (isSupportedNamespace(namespace)) {
    const { contractAddress, contractName } = namespaceContracts[
      namespace as keyof typeof namespaceContracts
    ] as { contractAddress: string; contractName: string };
*/


// right, no contact call here.  that will come later on actual NFT Transfer transaction
/*
const { openContractCall } = useOpenContractCall();
openContractCall({
  contractAddress,
  contractName,
  functionName: 'name-preorder',
  functionArgs: [
    bufferCV(Buffer.from(hashedSaltedName, 'hex')),
  ],
)
}
*/

/*
use this for reference from  community-handles, for contract call, not api call
import { bufferCV, bufferCVFromString, ClarityValue } from 'micro-stacks/clarity';
import { useOpenContractCall } from '@micro-stacks/react';
import { PostCondition } from 'micro-stacks/transactions';
import { fromHexString } from '../lib/strings';

export const OwnerPubkeyButton = ({
  stxAddress,
  contract,
  namespace,
  pubkey,
}: {
  stxAddress: string;
  contract: { address: string; name: string };
  namespace: string;
  pubkey: string;
}) => {
  const { openContractCall } = useOpenContractCall();
  const label = `Set pubkey namespace .${namespace}`;
  const contractAddress = contract.address;
  const contractName = contract.name;
  const functionName = 'set-approval-pubkey';
  const functionArgs: ClarityValue[] = [bufferCV(fromHexString(pubkey))];

  const postConditions: PostCondition[] = [];

  return (
    <button
      onClick={() => {
        void openContractCall({
          contractAddress,
          contractName,
          functionName,
          functionArgs,
          postConditions,
        });
      }}
    >
      {label}
    </button>
  );
};

*/