import {
  //Dispatch,  // when do I need a Dispatch?
  //SetStateAction,
  //useCallback,
  useEffect,
  useState,
} from 'react';
import { nonFungibleTokensApi } from '../integration/stacksnode/client';

async function fetchNftHoldings(stxAddress: string | undefined) {
  if (stxAddress) {
    try {
      const response = await nonFungibleTokensApi.getNftHoldings({
        //Stacks.js api, not micro-stacks.  cool.
        principal: stxAddress,
      });
      console.log('response.total=' + response.total);
      if (response.total > 0) {
        //console.log(response.results);
        return response.results;
        //return 'xyz';
      }
    } catch (e) {
      console.log(e); // error is me
    }
  }
}

export const useNftHook = ({
  stxAddress,
}: {
  stxAddress: string | undefined;
}) => {
  const [nftList, setNftList] = useState(null);

  console.log('\nnftList1=' + nftList);

  useEffect(() => {
    const fn = async () => {
      const nftListx = await fetchNftHoldings(stxAddress);
      console.log('nftListx' + nftListx);
      setNftList(nftListx);
    };
    fn(); //what does this do?
  }, [stxAddress]);

  console.log('nftList2=' + nftList);
  return nftList; //return a list please, thank you.
};
