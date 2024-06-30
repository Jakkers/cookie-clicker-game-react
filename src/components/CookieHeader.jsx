import "../styles/CookieHeader.css";
// import { useTimer } from "../utils/useTimer";
import Shop from "./Shop";
import Nav from "./Nav";
import { useState } from "react";
import { useEffect } from "react";

export default function CookieHeader() {
  // Store cookies and cps to local storage
  const [cookies, setCookies] = useState(
    parseInt(localStorage.getItem("cookies")) || 0
  );
  const [cps, setCps] = useState(parseInt(localStorage.getItem("cps")) || 0);

  useEffect(() => {
    localStorage.setItem("cookies", cookies.toString());
    localStorage.setItem("cps", cps.toString());
  }, [cookies, cps]);

  //Timer to track cps and increase cookies
  useEffect(() => {
    const cookieInterval = setInterval(() => {
      setCookies((currentCookies) => {
        return currentCookies + cps;
      });
    }, 1000);
    return () => clearInterval(cookieInterval);
  }, [cps]);

  //increase cookies on click
  function handleClick() {
    setCookies(cookies + 1);
  }

  return (
    <>
      <Nav
        cookies={cookies}
        setCookies={setCookies}
        cps={cps}
        setCps={setCps}
      />
      <div className="cookie-header">
        <img
          className="cookie-logo"
          src="/images/cookie.svg"
          alt="cookie - click to bake"
          onClick={handleClick}
        />
        <div className="cookie-info-box">
          <div className="total-cookies-box">
            <p>Cookies</p>
            <h2>{cookies}</h2>
          </div>
          <div className="cookies-per-second-box">
            <p>Cookies per second</p>
            <h2>{cps} cps</h2>
          </div>
        </div>
        <Shop
          cookies={cookies}
          setCookies={setCookies}
          cps={cps}
          setCps={setCps}
        />
      </div>
    </>
  );
}
