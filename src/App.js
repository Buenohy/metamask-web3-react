import { useState } from 'react';
import { getBalance, getMetaMaskProvider } from './MetaMaskService';

function App() {
  const [message, setMessage] = useState('');

  function getBalanceClick() {
    getBalance('0x67893C15087b63997a310659Df0E7b9806BecB9F').then((balance) =>
      setMessage(balance)
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
      {message}
    </div>
  );
}

export default App;
