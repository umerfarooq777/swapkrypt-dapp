import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xFD11D6347905D6601503b44E9Ed53d90b19b347D"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: { 
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/3R_0CU6Yeym339V27I27jh1s9OI65Xff",
  },
};