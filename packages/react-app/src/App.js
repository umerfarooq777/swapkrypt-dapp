import React from "react"
import {useEthers} from '@usedapp/core';
import styles from './styles';
import {swapkryptLogo} from './assets';

const App = () => {

const {account} = useEthers();




  return (
  <>
  <div className={styles.container }>
    <div className={styles.innerContainer}>
    <header className={styles.header}>
      <img src={swapkryptLogo}
       alt="SwapKrypt Logo"
       className="w-20 h-25 object-conatin" ></img>
     
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
                      <h1 className="text-white">Your Acc here{account}</h1>

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