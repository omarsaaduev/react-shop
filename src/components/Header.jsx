import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

export default function Header({ orders, onDelete }) {
  const [cartOpen, setCartOpen] = useState(false);

  function showOrders() {
    let summa = orders.reduce((acc, item) => Number(item.price)+acc, 0)
    return (
      <div>
        {orders.map((el) => (
          <Order item={el} onDelete={onDelete} />
        ))}
        <p className="summa">Сумма: {new Intl.NumberFormat().format(summa)}$</p>
      </div>
    );
  }

  function showNothing() {
    return (
      <div className="empty">
        <h2>Товаров нет</h2>
      </div>
    );
  }
  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {orders.length > 0 ? showOrders() : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
