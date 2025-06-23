import React, { useState } from 'react'
import { useParams  } from 'react-router-dom';
export default function Product({data}) {
  const { id } = useParams();
  const item = data.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };
  const totalprice=(item.price * quantity);
  return (
    <div>
      <div className="product-card">
                    <img src={item.image} alt={item.title} className="product-image"/>
                    <h3 className="product-title">{item.title}</h3>
                    <p className="product-description">{item.description}</p>
                    <p className="product-price">price:-₹{item.price}</p>
                    <p className="product-total">Total Price: ₹{totalprice}</p>
                    <p className="product-category">Category: {item.category}</p>
                    <p className="product-rating">⭐ {item.rating.rate} ({item.rating.count} reviews)</p>
                <button onClick={decrease}className="bg-red-600 px-3 py-1 rounded-full text-white text-xl">-</button>
                 <span className="text-xl">{quantity}</span>
                 
                <button onClick={increase} className="bg-green-600 px-3 py-1 rounded-full text-white text-xl">+</button>
      </div>
    </div>
  )
}