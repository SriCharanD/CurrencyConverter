import { useState } from 'react';
import UseCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './components/InputBox';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [cvtAmount, setCvtAmount] = useState(0);

  const currencyInfo = UseCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swapCurr = () => {
    setTo(from);
    setFrom(to);
    setAmount(cvtAmount);
    setCvtAmount(cvtAmount);
  };

  const convert = () => {
    setCvtAmount(amount * currencyInfo[to]);
  };

  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url(https://images.pexels.com/photos/5466789/pexels-photo-5466789.jpeg?cs=srgb&dl=pexels-olia-danilevich-5466789.jpg&fm=jpg)`
       
    }}
>
        
      <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white bg-opacity-30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => {
                setFrom(currency);
              }}
              selectCurrency={from}
              onAmountChange={(amount) => {
                setAmount(amount);
              }}
            />
          </div>
          <div className="relative mb-4">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swapCurr}
            >
              swap
            </button>
          </div>
          <div className="mb-4">
            <InputBox
              label="To"
              amount={cvtAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => {
                setTo(currency);
              }}
              selectCurrency={to}
              onAmountChange={(cvtAmount) => {
                setCvtAmount(cvtAmount);
              }}
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
            Convert
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
