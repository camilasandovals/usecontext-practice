import { createContext } from 'react';
import './App.css';
import Pages from './components/Pages';

export const UserText = createContext(null)
function App() {
  return (
    <>
    <UserText.Provider value={"Hello"}>
      App
      <Pages />
    </UserText.Provider>
    </>
  );
}

export default App;
