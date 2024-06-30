export default function ShopButton({ cookies, setCookies, cps, setCps, item }) {
  //conditionally rendering upgrades so users know what they can afford
  if (cookies >= item.cost) {
    return (
      <button
        className="shop-button"
        onClick={() => {
          if (cookies >= item.cost) {
            setCookies((cookies) => cookies - item.cost);
            setCps(cps + item.increase);
          }
        }}
        id={item.increase}
      >
        +{item.increase}
      </button>
    );
  }
}
