import React,{useState,useEffect} from 'react'
import { shortenAddress,useEthers,useLookupAddress } from '@usedapp/core'
 
import styles  from '../styles'





const WalletButton = () => {
const [accountAddress,setAccount]=useState('');
const {ens} = useLookupAddress();
const {account,activateBrowserWallet,deactivate}= useEthers();

useEffect(()=>{
  if (ens) {
    setAccount(ens)
    
  } else if(account) {
    setAccount(shortenAddress(account))
    
  }else{
    setAccount('')
  }

},[account,ens,setAccount])



  return (
    <button onClick={()=>{
      if (!account) {
        activateBrowserWallet();
        
      }else{
        deactivate();
      }
    }}
    className={accountAddress?styles.walletButtonConnected:styles.walletButton}
    >
      {/* {accountAddress?`Disconnect wallet`:"Click to connect wallet"} */}
      {accountAddress||"Click to connect wallet"}

      {/* {rendered !== "" && rendered} */}
    </button>
  )
}

export default WalletButton