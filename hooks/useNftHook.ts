import { useEffect, useState } from 'react';
import { nonFungibleTokensApi } from '../integration/stacksnode/client';

async function fetchNftHoldings(stxAddress: string | undefined) {
  if (stxAddress) {
    try {
      const response = await nonFungibleTokensApi.getNftHoldings({
        principal: stxAddress,
      });
      if (response.total > 0) {
        console.log('response.total=', response.total);
        return response.results;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export const useNftHook = ({
  stxAddress,
}: {
  stxAddress: string | undefined;
}) => {
  const [nftList, setNftList] = useState(null);

  useEffect(() => {
    const fn = async () => {
      const nftListx = await fetchNftHoldings(stxAddress);
      setNftList(nftListx);
    };
    fn();
  }, [stxAddress]);

  return nftList; //return a list please, thank you.
};
