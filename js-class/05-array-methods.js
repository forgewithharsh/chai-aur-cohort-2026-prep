const orders = [
  { dish: "Paneer Butter Masala", price: 250, spicy: false, qty: 2 },
  { dish: "Chicken Biryani", price: 180, spicy: true, qty: 1 },
  { dish: "Masala Dosa", price: 90, spicy: true, qty: 3 },
  { dish: "Veg Fried Rice", price: 120, spicy: false, qty: 2 },
  { dish: "Chole Bhature", price: 110, spicy: true, qty: 1 },
];

// orders.forEach((order, index) => console.log(`#${index + 1} : ${order.dish}`));

const orderMap = orders.map((order) => {
  return `${order.dish}: ${order.price * order.qty} `;
});

// console.log(orderMap);

const spicyOrders = orders.filter((order) => order.spicy);
// console.log(spicyOrders);

const totalRevenue = orders.reduce((sum, order) => {
  return sum + order.price * order.qty;
}, 0);

// console.log(totalRevenue);

const bunch = orders.reduce(
  (acc, order) => {
    const category = order.spicy ? "spicy" : "mild";
    acc[category].push(order.dish);
    return acc;
  },
  { spicy: [], mild: [] },
);

// console.log(bunch);

const numbers = [1, 22, 13, 4, 8];
// const sort = [...numbers].sort((a, b) => a - b);
const sort = [...numbers].toSorted((a, b) => a - b);
// console.log(sort);

const dishes = [
  { dish: "Margherita Pizza", price: 299, spicy: false, qty: 1 },
  { dish: "Hyderabadi Biryani", price: 220, spicy: true, qty: 2 },
  { dish: "Pav Bhaji", price: 100, spicy: true, qty: 3 },
  { dish: "Hakka Noodles", price: 140, spicy: false, qty: 2 },
  { dish: "Paneer Tikka", price: 180, spicy: true, qty: 1 },
  { dish: "Rasgulla", price: 40, spicy: false, qty: 4 },
];

const notSpicy = dishes
  .filter((order) => !order.spicy)
  .map((order) => ({
    dish: order.dish,
    total: order.price,
  }));
console.log(notSpicy);
