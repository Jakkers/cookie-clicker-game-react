import { useState } from "react";
import { useEffect } from "react";
import ShopButton from "./ShopButton";
import "../styles/Shop.css";

export default function Shop({ cookies, setCookies, cps, setCps }) {
  // const cost = storeData[0].increase;
  // function handleBuy() {
  //   setCps(cps + cost);
  // }

  //adding conditional rendering for the buy button

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://cookie-upgrade-api.vercel.app/api/upgrades"
      );
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Shop</h1>
      <div className="shop-container">
        {items.map((item) => (
          <div className="shop-items" key={item.id}>
            <h2 className="item-title">{item.name}</h2>
            <h2 className="item-cost">{item.cost} Cookies</h2>
            <ShopButton
              cookies={cookies}
              setCookies={setCookies}
              cps={cps}
              setCps={setCps}
              item={item}
            />
            {/* <button
              className="button"
              onClick={() => {
                if (cookies >= item.cost) {
                  setCookies((cookies) => cookies - item.cost);
                  setCps(cps + item.increase);
                }
              }}
              id={item.increase}
            >
              +{item.increase}
            </button> */}
          </div>
        ))}
      </div>
    </>
  );
}
