import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { nanoid } from "nanoid";
import { fetchDataFromApi } from "../../api";

import "./SingleProduct.scss";

const SingleProduct = () => {
  const dispatch = useDispatch();

  const [items, setItems] = React.useState();
  const [quantity, setQuantity] = React.useState(1);

  const [activeType, setActiveType] = React.useState("тонкое");
  const [activeSize, setActiveSize] = React.useState("26");

  const typesName = ["тонкое", "традиционное"],
    sizesName = ["26", "30", "40"];

  // Получаем из параметров запроса id элемента
  // которые передается при клике по карточке пиццы
  const { id } = useParams();

  // Увеличиваем число пицц
  const increment = () => setQuantity((item) => item + 1);

  // Уменьшаем число пицц
  const decrement = () => {
    if (quantity == 1) return setQuantity(1);
    else {
      setQuantity((item) => item - 1);
    }
  };

  return (
    <div className="single-product">
      <div className="container">
        <div className="single-product__wrpaper">
          <div className="single-product__item">
            <div className="product-item__left"></div>
            <div className="product-item__right">
              <div className="item-right__text">
                <span className="title"></span>
                <span className="desc"></span>
              </div>
              <div className="item-right__description"></div>
              <div className="item-right__controls">
                <ul>
                  {typesName.map((item) => (
                    <li
                      key={nanoid()}
                      onClick={() => setActiveType(item)}
                      className={`${activeType === item ? "active" : ""}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <ul>
                  {sizesName.map((item) => (
                    <li
                      key={nanoid()}
                      onClick={() => setActiveSize(item)}
                      className={`${activeSize === item ? "active" : ""}`}
                    >
                      {item} см
                    </li>
                  ))}
                </ul>
              </div>
              <div className="item-right__quantity">
                <button onClick={() => decrement()}>-</button>
                <div>{quantity}</div>
                <button onClick={() => increment()}>+</button>
              </div>
              <div className="item-right__btn">
                <button>Добавить в корзину</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
