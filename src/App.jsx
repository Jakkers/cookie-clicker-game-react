//! You are supposed to organise and plan all these elements into different folders and componenets
import "./App.css";
import CookieHeader from "./components/CookieHeader";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <CookieHeader />
      {/* I need to display the following elements on te page:
      - the value of cookies
      - the value of cps
      - an element that the user can click on to increase the value of cookies
      - a list of shop items that the user can buy extra: add visual feedback so the user knows if they can afford the upgrade
       */}
      <Footer />
    </>
  );
}

//! add conditonal rendering for better user feedback
