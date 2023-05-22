import { useNavigate } from "react-router-dom";

import "./Product.scss";
const Product = ({ data }) => {
  // Используем useNavigate что бы вывести при клике на определенный объект
  // вывести id в url
  const navigate = useNavigate();
  return (
    <>
      <div
        className="product-cart"
        onClick={() => navigate(`/product/${data.id}`)}
      >
        <div className="product-cart__img">
          <img
            src={
              "http://localhost:1337" +
              data.attributes.image.data[0].attributes.url
            }
            alt=""
          />
        </div>
        <div className="product-cart__desc">
          <span className="cart-desc__title">{data.attributes.title}</span>
          <p className="cart-desc__description">
            {data.attributes.description}
          </p>
        </div>
        <div className="product-cart__controls">
          <div className="cart-controls__price">
            от {data.attributes.price} &#8381;
          </div>
          <button
            onClick={() => navigate(`/product/${data.id}`)}
            className="cart-controls__button"
          >
            Выбрать
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
