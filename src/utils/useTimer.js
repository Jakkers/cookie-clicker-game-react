import { useState, useEffect } from "react";

export function useTimer() {
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
  return cookies;
}
