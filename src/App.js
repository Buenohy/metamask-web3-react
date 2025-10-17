import { useState } from 'react';
import { getBalance, getMetaMaskProvider, transfer } from './MetaMaskService';

function App() {
  const [message, setMessage] = useState('');

  function getBalanceClick() {
    getBalance('0xDe2F4B963D7f6f1898Aff2802Efc6376973e8540')
      .then((balance) => setMessage(balance))
      .catch((err) => setMessage(err.message));
  }

  function transferClick() {
    transfer(
      '0xDe2F4B963D7f6f1898Aff2802Efc6376973e8540',
      '0x67893C15087b63997a310659Df0E7b9806BecB9F',
      '0.01'
        .then((tx) => setMessage(tx))
        .catch((err) => setMessage(err.message))
    );
  }

  return (
    <div>
      Olá Mundo
      <br />
      <button onClick={() => getMetaMaskProvider()}>Click Me</button>
      <br />
      <button onClick={getBalanceClick}>Get Balance</button>
      <br />
      <button onClick={transferClick}>Transfer</button>
      <br />
      {message}
    </div>
  );
}

export default App;
