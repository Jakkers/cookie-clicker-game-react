//! You are supposed to organise and plan all these elements into different folders and componenets

import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  //I need a list of shop upgrades for the user to buy.
  //Upgrades should change the cookies per second value, and decrease the cookies value

  //! Stretch goal: fetch API upgrades
  const upgrades = [{}, {}];

  //I need 2 global variables: one variables to store the cookie counter, and one variable to store the cookies per second.

  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(1);

  //I need a timer to track the cookies, keeping an eye on the cps (cookies per second) value.
  //The biscutis value will go up by the value of (cps cookies per second)
  useEffect(() => {
    const cookieInterval = setInterval(() => {
      // I need to tell the interval what action I want to perform every second--> we need to set the value to go up by cps
      setCookies((currentCookies) => {
        return currentCookies + cps;
      });
    }, 1000);

    //clear the interval

    return () => clearInterval(cookieInterval);
  }, [cps]); //we added the cookies per second (cps) in the dependancy array so when its value changes, the useEffect triggers the effect again.

  //we need a function, so the user can buy items from the shop
  function buyItem() {
    //increase the value of cps
    // decrease the value of cookies
  }

  return (
    <>
      <h1>Main app</h1>
      {/* I need to display the following elements on te page:
      - the value of cookies
      - the value of cps
      - an element that the user can click on to increase the value of cookies
      - a list of shop items that the user can buy extra: add visual feedback so the user knows if they can afford the upgrade
       */}
    </>
  );
}

//! add conditonal rendering for better user feedback
