import React from "react"
import {useEthers} from '@usedapp/core';
import styles from './styles';
import {swapkryptLogo} from './assets';
import {Loader,Exchange,WalletButton} from "./components"


const App = () => {

const {account} = useEthers();
const poolsLoading = false;



  return (
  <>
  <div className={styles.container }>
    <div className={styles.innerContainer}>
    <header className={styles.header}>
      <img src={swapkryptLogo}
       alt="SwapKrypt Logo"
       className="w-20 h-25 object-conatin" ></img>

     <WalletButton/>
     </header>
     <div className={styles.exchangeContainer}>


      <div className="grid grid-cols-2 gap-4">
        
        <div>
          <h1 className={styles.headTitle}>SWAP<div className="kryptBg">KRYPT</div> 2.0</h1>
          <p className={styles.subTitle}>Exchange tockens frequently.</p>
        </div>

        <div className={styles.exchangeBoxWrapper}>
        <div className={styles.exchangeBox}>
            <div className="red_gradient"/>
                    <div className={styles.exchange}>
                      {/* <h1 className="text-white">h1</h1> */}
                      {
                        account?
                        (
                          poolsLoading?(
                            <Loader title="Loading pools, Please wait..."/>
                          ):
                            <Exchange/>
                          
                        ):<Loader title="Please connect your wallet !"/> 
                      }

                    </div>
            <div className="green_gradient"/>

        </div>  
        </div>
      
      
      </div>
    
     </div>
     </div>
  </div>
  </>
  )
}

export default App;