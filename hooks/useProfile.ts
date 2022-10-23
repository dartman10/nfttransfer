import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { nonFungibleTokensApi } from '../integration/stacksnode/client';

async function fetchProfile(
  stxAddress: string | undefined,
  profileUrl: string | undefined
) {
  let username: string | undefined = undefined;
  let imageUrl: string | undefined = undefined;
  if (stxAddress) {
    try {
      const response = await nonFungibleTokensApi.getNftHoldings({
        //const response = await namesApi.getNamesOwnedByAddress({
        principal: stxAddress,
        //blockchain: 'stacks',
      });
      if (response.total > 0) {
        username = response.names[0];
      }
    } catch (e) {
      // couldn't fetch name
    }
  }

  if (profileUrl) {
    try {
      const response = await fetch(profileUrl);
      const profile = await response.json();
      if (profile.image && profile.image.length > 0) {
        imageUrl = profile.image[0].contentUrl;
      }
    } catch (e) {
      // couldn't fetch image url
    }
  }

  return { username, imageUrl };
}

export const useProfile = ({
  stxAddress,
  profileUrl,
}: {
  stxAddress: string | undefined;
  profileUrl: string | undefined;
}) => {
  const [profile, setProfile] = useState({
    username: undefined,
    imageUrl: undefined,
  }) as [
    { username: string | undefined; imageUrl: string | undefined },
    Dispatch<
      SetStateAction<{
        username: string | undefined;
        imageUrl: string | undefined;
      }>
    >
  ];

  useEffect(() => {
    const fn = async () => {
      const { username, imageUrl } = await fetchProfile(stxAddress, profileUrl);
      setProfile({ username, imageUrl });
    };
    fn();
  }, [stxAddress, profileUrl]);

  return profile;
};
