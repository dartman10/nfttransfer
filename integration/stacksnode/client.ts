import {
  Configuration,
  //NamesApi,
  NonFungibleTokensApi,
} from '@stacks/blockchain-api-client';
import { StacksMainnet, StacksTestnet } from 'micro-stacks/network';

export const mainnet = process.env.network === 'mainnet';
//console.log({ mainnet });
//const network = mainnet ? new StacksMainnet() : new StacksTestnet();
const network = new StacksMainnet();

const config = new Configuration({
  basePath: network.coreApiUrl,
});

//export const namesApi = new NamesApi(config);

export const nonFungibleTokensApi = new NonFungibleTokensApi(config);

export const DOMAINS = mainnet
  ? ([
      'mega',
      'fren',
      'bitcoinmonkey',
      'satoshible',
      'stacksparrot',
      'citycoins',
      'crashpunk',
    ] as const)
  : (['hhhhhhhh'] as const);

export const namespaceContracts = mainnet
  ? {
      mega: {
        contractAddress: 'SPC0KWNBJ61BDZRPF3W2GHGK3G3GKS8WZ7ND33PS',
        contractName: 'ryder-handles-controller-v1',
      },
      fren: {
        contractAddress: 'SPC0KWNBJ61BDZRPF3W2GHGK3G3GKS8WZ7ND33PS',
        contractName: 'ryder-handles-controller-v1',
      },
      bitcoinmonkey: {
        contractAddress: 'SPC0KWNBJ61BDZRPF3W2GHGK3G3GKS8WZ7ND33PS',
        contractName: 'ryder-handles-controller-v1',
      },
      satoshible: {
        contractAddress: 'SPC0KWNBJ61BDZRPF3W2GHGK3G3GKS8WZ7ND33PS',
        contractName: 'ryder-handles-controller-v1',
      },
      stacksparrot: {
        contractAddress: 'SPC0KWNBJ61BDZRPF3W2GHGK3G3GKS8WZ7ND33PS',
        contractName: 'ryder-handles-controller-v1',
      },
      citycoins: {
        contractAddress: 'SPC0KWNBJ61BDZRPF3W2GHGK3G3GKS8WZ7ND33PS',
        contractName: 'ryder-handles-controller-v1',
      },
      crashpunk: {
        contractAddress: 'SPC0KWNBJ61BDZRPF3W2GHGK3G3GKS8WZ7ND33PS',
        contractName: 'ryder-handles-controller-v1',
      },
    }
  : {
      hhhhhhhh: {
        contractAddress: 'ST2Z3FFKYT0MGAGWP8A8NZJZHGWW4Q3VGBSC1NDEB',
        contractName: 'beneficial-black-sheep',
      },
    };
