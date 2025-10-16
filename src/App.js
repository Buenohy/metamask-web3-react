import { useState } from 'react';
import { getBalance, getMetaMaskProvider } from './MetaMaskService';

function App() {
  const [message, setMessage] = useState('');

  function getBalanceClick() {
    getBalance('0xDe2F4B963D7f6f1898Aff2802Efc6376973e8540').then((balance) =>
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
