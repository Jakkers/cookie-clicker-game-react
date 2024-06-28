import "../styles/CookieHeader.css";
// import { useTimer } from "../utils/useTimer";
import Shop from "./Shop";
import { useState } from "react";
import { useEffect } from "react";

export default function CookieHeader() {
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(1);
  useEffect(() => {
    const cookieInterval = setInterval(() => {
      setCookies((currentCookies) => {
        return currentCookies + cps;
      });
    }, 1000);
    return () => clearInterval(cookieInterval);
  }, [cps]);

  //   click to add a cookie
  //   function handleBuy() {
  //     setTotalCookies(totalCookies + 2);

  function handleClick() {
    setCookies(cookies + 1);
  }

  return (
    <div className="cookie-header">
      <img
        className="bitcoin-logo"
        src="/images/bitcoin-btc-logo.svg"
        alt="bitcoin logo - click to mine"
        onClick={handleClick}
      />
      <h2>{cookies}</h2>
      <h3>{cps}</h3>
      <Shop
        cookies={cookies}
        setCookies={setCookies}
        cps={cps}
        setCps={setCps}
      />
    </div>
  );
}
