const styles = {
  // App.js
  container: "flex justify-center min-h-screen sm:px-16 px-6 bg-neutral-100",
  innerContainer:
    "flex justify-between items-center flex-col max-w-[1280px] w-full",
  header: "flex flex-row justify-between items-center w-full sm:py-1 py-6",
  exchangeContainer:
    "flex-1 flex justify-start items-center flex-col w-full mt-0",
  headTitle: "text-gray-900 font-poppins font-black text-6xl tracking-wide",
  subTitle: "text-gray-900 font-poppins font-black mt-3 text-base",
  exchangeBoxWrapper: "mt-10 w-full flex justify-center",
  exchangeBox:
    "relative md:max-w-[900px] md:min-w-[700px] min-w-full max-w-full gradient-border p-[2px] rounded-3xl",
  exchange:
    "md:min-w-[600px] min-h-[400px] bg-site-black backdrop-blur-[4px] rounded-3xl shadow-card flex p-10",

  // AmountIn & AmountOut
  amountContainer:
    "flex justify-between items-center flex-row w-full min-w-full bg-site-dim border-[1px] border-white hover:border-site-dim2 min-h-[96px] sm:p-8 p-4 rounded-[15px]",
  amountInput:
    "w-full flex-1 bg-transparent outline-none font-poppins font-black text-2xl text-white",
  currencyButton:
    "flex flex-row items-center bg-site-dim2 py-2 px-4 rounded-xl font-poppins font-bold text-white",
  currencyList:
    "absolute z-10 right-0 bg-site-black border-[1px] border-site-dim2 w-full mt-2 rounded-lg min-w-[170px] overflow-hidden",
  currencyListItem:
    "font-poppins font-medium text-base text-white hover:text-dim-white px-5 py-3 hover:bg-site-dim2 cursor-pointer",

  // Exchange
  actionButton:
    "border-none outline-none px-6 py-2 font-poppins font-bold text-lg rounded-2xl leading-[24px] transition-all min-h-[56px]",
  message: "font-poppins font-lg text-white font-bold mt-7",

  // WalletButton
  walletButton:
    "bg-rose-700 border-none outline-none px-6 py-2 font-poppins font-bold text-lg text-white rounded-3xl leading-[24px] hover:bg-rose-600 transition-all",
    walletButtonConnected:
    "bg-green-700 border-none outline-none px-6 py-2 font-poppins font-bold text-lg text-white rounded-3xl leading-[24px] hover:bg-green-600 transition-all",

  // loader
  loader: "flex justify-center items-center flex-col w-full h-full",
  loaderImg: "w-20 h-56 object-contain",
  loaderText:
    "font-poppins font-normal text-dim-white text-lg text-center mt-0",

  // balance
  balance: "w-full text-left mt-2 ml-2",
  balanceText: "font-poppins font-normal text-dim-white",
  balanceBold: "font-semibold text-white",
};

export default styles;
