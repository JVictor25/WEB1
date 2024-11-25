import { addCoursesToStudent } from "../../requests";
import "./index.css";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/useAuthContext";

const Cart = () => {
  const { user, addBoughtCourses } = useAuthContext();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  const calculateTotal = (cartItems) => {
    const totalValue = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalValue.toFixed(2));
  };

  const removeFromCart = (id) => {
    // Remove the item from the cart completely if quantity is 1 or less
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    setTotal("0.00");
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      addCoursesToStudent(user.id, [...user.boughtCourses, ...cart]).then(
        () => {
          addBoughtCourses(cart);
          alert("Compra finalizada com sucesso!");
          clearCart();
        }
      );
    }
  };

  return (
    <main>
      <div className="Carrinho">
        <div className="namecursos">
          <h1>
            <a href="index.html">Cursos</a>
          </h1>
        </div>
        <section className="cart">
          <h2>Carrinho de Compras</h2>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <h4>{item.name}</h4>
                <p>Preço: R${item.price.toFixed(2)}</p>
                <p>Quantidade: {item.quantity}</p>
                <button
                  className="remove-from-cart"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <strong>Total:</strong> R$<span id="cart-total">{total}</span>
          </div>
          <button id="checkout" onClick={handleCheckout}>
            Finalizar Compra
          </button>
          <button id="clear-cart" onClick={clearCart}>
            Limpar Carrinho
          </button>
        </section>
      </div>
    </main>
  );
};
export default Cart;
