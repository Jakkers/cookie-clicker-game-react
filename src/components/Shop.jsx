import { storeData } from "../api/storeData";
import CookieHeader from "./CookieHeader";

export default function Shop({ cookies, setCookies, cps, setCps }) {
  const cost = storeData[0].cost;
  function handleBuy() {
    setCps(cps + cost);
  }
  return (
    <>
      <h1>Shop</h1>
      {storeData.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <h2>{item.name}</h2>
          <p>{item.cost}</p>
          <button onClick={handleBuy} id={item.name}>
            Buy
          </button>
        </div>
      ))}
    </>
  );
}
