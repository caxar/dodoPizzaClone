import React from 'react'

import CartItem from './CartItem/CartItem';

import { MdClose } from 'react-icons/md'
import "./Cart.scss";

const Cart = ({openCart, setOpenCart}) => {

    const [empty, setEmpty] = React.useState([{name: 'test', age: 5435}])

    // Закрыть корзину при клике вне карточки товара 
    const handleClickOut = (e) => {
        if(e.target.classList.contains('cart-bg')) {
             setOpenCart(false)
        }
     }
    return (
        <div className="cart-block" onClick={(e) => handleClickOut(e)}>
            <div className="cart-bg"></div>
            <div className={`cart-content ${openCart ? ' showMenuCart' : ''}`}>
            <div className="cart-close" onClick={() => setOpenCart(false)}>
                <MdClose />
            </div>
                {!empty.length > 0 &&
                <div className="cart-empty">
                    <div className="cart-empty__img">
                        <img src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg" alt="" />
                    </div>
                    <span className="cart-empty__title">Ой, пусто!</span>
                    <p className='cart-empty__desc'>
                        Ваша корзина пуста, откройте «Меню»
                        и выберите понравившийся товар.
                        Мы доставим ваш заказ от 599 &#8381;
                    </p>
                </div>
                }

                {empty.length > 0 && 
                <>          
                <div className="cart-main">     
                 <div className="cart-header">
                        <span className="cart-header__text">2 товара на 3 042 &#8381;</span>
                 </div>
                    <CartItem />
                    <div className="cart-footer">
                        <div className="cart-footer__subtotal">
                            <span className='cart-subtotal__text'>Сумма заказа:</span>
                            <span className='cart-subtotal__total'>609 &#8381;</span>
                        </div>
                        <div className="cart-footer__btn">
                            <button type="button">К оформлению заказа 
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="button-arrow">
                                <path d="M10 18l6-6-6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
                        </div>
                    </div>
                    </div>
                </>
}
            </div>
        </div>
    );
};

export default Cart;
