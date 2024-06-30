//! You are supposed to organise and plan all these elements into different folders and componenets
import Nav from "./components/Nav";
import "./App.css";
import CookieHeader from "./components/CookieHeader";

export default function App({ cookies, setCookies, cps, setCps }) {
  return (
    <>
      <CookieHeader />
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
