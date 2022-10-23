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

  // for default values during testing
  const defaultAddress =
    'SPNWZ5V2TPWGQGVDR6T7B6RQ4XMGZ4PXTEE0VQ0S.marketplace-v3'; // default address for demonstration
  let anAddress: string = '';
  if (stxAddress) {
    anAddress = stxAddress;
  } else {
    anAddress = defaultAddress;
  }

  useEffect(() => {
    const fn = async () => {
      const nftListx = await fetchNftHoldings(anAddress); //use stxAddress here directly once ready for prod
      setNftList(nftListx);
    };
    fn();
  }, [stxAddress]);

  return nftList; //return a list please, thank you.
};
