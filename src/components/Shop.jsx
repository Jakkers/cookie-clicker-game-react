import { storeData } from "../api/storeData";
import CookieHeader from "./CookieHeader";
import "../styles/Shop.css";

export default function Shop({ cookies, setCookies, cps, setCps }) {
  const cost = storeData[0].increase;
  function handleBuy() {
    setCps(cps + cost);
  }
  return (
    <>
      <h1>Shop</h1>
      {storeData.map((item) => (
        <div className="shop-container" key={item.id}>
          <h2 className="item-title">{item.name}</h2>
          <h2 className="item-cost">{item.cost} Bitcoins</h2>
          <button className="button" onClick={handleBuy} id={item.increase}>
            Buy
          </button>
        </div>
      ))}
    </>
  );
}
