import { useCallback, useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function About() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const params = useParams()
  const location = useLocation();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleBackButton = useCallback((event: PopStateEvent) => {
    if (!isConfirmed) {
      event.preventDefault();
      const userConfirmed = window.confirm(
        "Anda belum diizinkan untuk mundur. Apakah Anda yakin ingin melanjutkan?"
      );
      if (userConfirmed) {
        setIsConfirmed(true);
        navigate(-2); // Navigate backward if confirmed
      } else {
        navigate(location.pathname+'?test=test')  // Stay on the current page
      }
    }
  },[isConfirmed, location.pathname, navigate]);

  useEffect(() => {
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [handleBackButton]);
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const parmasTest = queryParams.get('test')
    if (!parmasTest) {
      navigate(location.pathname+'?test=test')  
    }
    
 
  }, [])
  

  // Manual trigger to simulate initial check
//   const initialCheck = () => {
//     window.addEventListener("popstate", handleBackButton);
//   };
//   initialCheck();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>About</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
