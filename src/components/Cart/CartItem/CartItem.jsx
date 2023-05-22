import { MdClose } from 'react-icons/md'
import "./CartItem.scss";

const CartItem = () => {
    return (
        <div className="cart-products">
        <div className="cart-product__item">
            <div className="product-top">
                <div className="product-item__img">
                    <img src="https://cdn.dodostatic.net/static/Img/Products/ddadb2bd7f2d40459acddbe2f51a2389_138x138.png" alt="" />
                </div>
                <div className="product-item__desc">
                    <h4 className="item-desc__title">Двойной цыпленок</h4>
                    <p className="item-desc__description">Средняя 30 см, традиционное тесто</p>
                </div>
                <div className="product-close">
                    <MdClose />
                </div>
            </div>
            <div className="product-bottom">
                <span className="product-total">609 &#8381;</span>
                <div className="product-quantity">
                    <button>-</button>
                    <div className='product-quantity__total'>1</div>
                    <button>+</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CartItem;
