import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import {
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
  clearCart,
} from "../store/slice/cart"; // ✅ Correct path

const stripePromise = loadStripe('pk_test_51RdlcuPECcNghnCYEO4RyHUqsAgppMD832lCKa5DZwUAE1cw1UsPMdxCasx8O7SlqtyEDONNmqdtr01dMpDBQaN800Pe7vM7qh');


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartitem); // ✅ Use correct slice key
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getDeliveryCharge = () => {
    return cartItems.reduce(
      (acc, item) => acc + Number(item.deliveryCharge || 0),
      0
    );
  };

  const getSubtotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + Number(item.price) * item.quantity,
      0
    );
  };

  const getTotalDiscount = () => {
    return cartItems.reduce(
      (acc, item) => acc + Number(item.discount || 0),
      0
    );
  };

  const getTotal = () => {
    return getSubtotal() + getDeliveryCharge() - getTotalDiscount();
  };

  const handleCheckout = async () => {
    try {
        const stripe = await stripePromise;

        const response = await axios.post("http://localhost:5000/create-checkout-session", {
            cartItems: cartItems.map(item => ({
                title: item.name,
                img_url: item.image,
                discount_price: item.price,
                quantity: item.quantity,
            })),
            customerEmail: "customer@example.com"
        });

        const sessionId = response.data.sessionId;
        const result = await stripe.redirectToCheckout({ sessionId });

        if (result.error) {
            console.error("Stripe redirect error:", result.error.message);
        }
    } catch (error) {
        console.error("Checkout error:", error.message);
    }
};

  return (
    <div>
      <div className="hero">
        <div className="container">
          <h1>Cart</h1>
        </div>
      </div>

      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Delivery</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Discount</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: 70 }}
                        />
                      </td>
                      <td>{item.name}</td>

                      <td>₹{Number(item.price || 0).toFixed(2)}</td>
                      <td>₹{Number(item.deliveryCharge || 0).toFixed(2)}</td>

                      <td>
                        <div className="input-group" style={{ maxWidth: 120 }}>
                          <button
                            className="btn btn-outline-dark p-3"
                            onClick={() => dispatch(decreaseQuantity(item.id))}
                          >
                            −
                          </button>
                          <input
                            type="text"
                            readOnly
                            className="form-control text-center p-1"
                            value={item.quantity}
                          />
                          <button
                            className="btn btn-outline-dark p-3"
                            onClick={() => dispatch(increaseQuantity(item.id))}
                          >
                            +
                          </button>
                        </div>
                      </td>

                      <td>
                        ₹{(Number(item.price || 0) * item.quantity).toFixed(2)}
                      </td>

                      <td>
                        {item.discount
                          ? `- ₹${Number(item.discount).toFixed(2)}`
                          : "₹0"}
                      </td>

                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => dispatch(removeProduct(item.id))}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="text-right mt-3">
                <h5>Delivery Charges: ₹{getDeliveryCharge().toFixed(2)}</h5>

                <h5>
                  Total Discount:
                  <span className="text-success ms-2">
                    - ₹{getTotalDiscount().toFixed(2)} (10% OFF)
                  </span>
                </h5>

                <h4>
                  Subtotal (incl. Delivery): ₹{getTotal().toFixed(2)}
                </h4>

                <button
                  className="btn btn-secondary me-2"
                  onClick={() => navigate("/shop")}
                >
                  Continue Shopping
                </button>

                <button
                  className="btn btn-danger me-2"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear Cart
                </button>

                <button className="btn btn-dark" onClick={handleCheckout}>Proceed To Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
