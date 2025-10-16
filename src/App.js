import { getMetaMaskProvider } from './MetaMaskService';

function App() {
  return (
    <div>
      Olá Mundo
      <br />
      <button onClick={() => getMetaMaskProvider()}>Click Me</button>
    </div>
  );
}

export default App;
