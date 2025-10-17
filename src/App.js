import { useState } from 'react';
import { getBalance, getMetaMaskProvider, transfer } from './MetaMaskService';

function App() {
  const [address, setAddress] = useState(null);
  const [to, setTo] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [message, setMessage] = useState('');

  const handleConnect = async () => {
    try {
      const { account } = await getMetaMaskProvider();
      setAddress(account);
      setMessage(`Carteira conectada: ${account}`);
    } catch (err) {
      setMessage(err.message);
    }
  };

  function getBalanceClick() {
    if (!address) {
      setMessage('Por favor, conecte sua carteira primeiro');
      return;
    }

    getBalance(address)
      .then((balance) => setMessage(balance))
      .catch((err) => setMessage(err.message));
  }

  function transferClick() {
    if (!address) {
      setMessage('Por favor, conecte sua carteira primeiro');
      return;
    }

    setMessage('Iniciando transferência...');
    transfer(address, to, '0.01')
      .then((tx) => setMessage(`Transferência enviada! Hash: ${tx}`))
      .catch((err) => setMessage(err.message));
  }

  return (
    <div>
      Wallet:
      <input
        type="text"
        value={address}
        onChange={(evt) => setAddress(evt.target.value)}
      />
      To:
      <input
        type="text"
        value={to}
        onChange={(evt) => setTo(evt.target.value)}
      />
      Quantity:
      <input
        type="text"
        value={quantity}
        onChange={(evt) => setQuantity(evt.target.value)}
      />
      <br />
      <button onClick={handleConnect}>Connect</button>
      <br />
      <button onClick={getBalanceClick}>Get Balance</button>
      <br />
      <button onClick={transferClick}>Transfer</button>
      <br />
      {address && <p>Endereço conectado: {address}</p>}
      <p>{message}</p>
    </div>
  );
}

export default App;
