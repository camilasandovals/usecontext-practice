// 1) import createContext
import { useState, createContext } from 'react';
import Pages from './components/Pages.jsx';
import './App.css';
// 2) create and export
export const UserStatus = createContext(null);
function App() {
  const[signedIn, setSignedIn] = useState(false)
  return (
    <>
      {/* Establish a provide  */}
    <UserStatus.Provider value={[signedIn, setSignedIn]}>
      <h1>{signedIn ? "Click to Sign Out" : "Click to Sign In"}</h1>
      <Pages/>
    </UserStatus.Provider>
    </>
  );
}
export default App;