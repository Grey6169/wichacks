import logo from './logo.svg';
import './App.css';
import BPRoutes from './bproutes';
import NavBar from './components/navbar';
import { useEffect, useCallback } from 'react';

function App() {
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      window.location.href = "https://www.chewy.com/";
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);
  
  return (
    <>
      <NavBar />
      <BPRoutes />
    </>
  );
}

export default App;
