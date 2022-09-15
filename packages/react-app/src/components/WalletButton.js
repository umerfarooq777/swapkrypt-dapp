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



  return (<>

    {accountAddress?(
      <button onClick={()=>{
      if (window.confirm('Dissconnect Wallet?')) {
        // activateBrowserWallet();
        deactivate();
        
        alert('Wallet disconnected successfully...')
        
      }
    }}
    className={styles.walletButtonConnected}
    >
      {/* {accountAddress?`Disconnect wallet`:"Click to connect wallet"} */}
      {accountAddress}

      {/* {rendered !== "" && rendered} */}
    </button>
    ):(
    <button onClick={()=>{
      activateBrowserWallet();
      alert('Wallet connected successfully...')
    }}
    className={styles.walletButton}
    >
      {/* {accountAddress?`Disconnect wallet`:"Click to connect wallet"} */}
      Click to connect wallet

      {/* {rendered !== "" && rendered} */}
    </button>
    )}
    


    </>
  )
}

export default WalletButton