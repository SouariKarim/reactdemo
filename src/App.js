import  { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [isWebView, setIsWebView] = useState(false);
 
  useEffect(() => {
    // Check if running in a WebView (React Native)
    const checkWebView = () => {
      console.log("window.isReactNativeWebView --->  : ",  window.isReactNativeWebView)
      if (window.isReactNativeWebView) {
        setIsWebView(true);
      }
    };
 
    checkWebView(); // Initial check
 
    // Listen for changes (optional)
    window.addEventListener('message', checkWebView);
 
    return () => {
      window.removeEventListener('message', checkWebView);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {console.log("isWebView --->  : ", isWebView)}
        { isWebView ? <p>Hide the header</p> : <p>display the header</p> }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
