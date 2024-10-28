import { useState, useEffect } from 'react';
import './Contador.css';

export default function Contador({ onQuantityChange, min = 1, max = 6 }) {
  const [count, setCount] = useState(min);

  const handleIncrement = () => {
    if (count < max) {
      setCount(prevCount => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (count > min) {
      setCount(prevCount => prevCount - 1);
    }
  };

  useEffect(() => {
    onQuantityChange(count);
  }, [count]);

  return (
    <div className="quantity-counter__container">
        <button onClick={handleDecrement} className="quantity-counter__button">-</button>
        <span className="quantity-counter__number">{count}</span>
        <button onClick={handleIncrement} className="quantity-counter__button">+</button>
    </div>
  );
}