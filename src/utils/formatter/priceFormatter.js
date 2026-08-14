const priceFormatter = (price) => {
  if (price < 0.01) return price.toFixed(8);
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(price);
};

export default priceFormatter;
