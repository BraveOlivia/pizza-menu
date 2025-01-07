import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObject={pizza} key={pizza.name} />
        ))}
      </ul>
      {/* {pizzaData.map(pizza =><Pizza name={pizza.name}
        ingredients={pizza.ingredients} price={pizza.price} photoName={pizza.photoName} soldout={pizza.soldout}
      />)} */}
      {/* <Pizza name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        img="pizzas/spinaci.jpg"
        price={10}
      /> */}
    </main>
  );
}
function Pizza({pizzaObject}) {
  return (
    <li className={`pizza ${pizzaObject.soldOut?"sold-out":""}`}>
      <img src={pizzaObject.photoName} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut?'SOLD OUT':pizzaObject.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleDateString()} We are currently open.
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
