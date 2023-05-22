import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setItems } from '../../redux/pizzas/pizzaSlice'

import { nanoid } from 'nanoid'
import { fetchDataFromApi } from '../../api'

import Product from './Product/Product'
import SkeletonProduct from './SkeletonProduct'

import "./Products.scss";

const Products = () => {
    const pizza = useSelector((state) => state.pizza.items)
    const dispatch = useDispatch()

        // Для загрузки скелетон пока нет продуктов  true/false
        const [isLoading, setIsLoading] = React.useState(true)

        // При загрзки сайта будет производится запрос на сервер
       // сервер будет возвращать данные и данные будет добавляться в redux 
       React.useEffect(() => {
           getPizzasItem ()
       }, [])
   
       // Получаем "Пиццы" и с помощью redux в slice добавляем данные из api
       const getPizzasItem = () => {
           fetchDataFromApi('/api/products?populate=*')
               .then((res) => (
                    dispatch(setItems(res)),
                   setIsLoading(false)
            ))
       }
   

    return (
        <div className="products__content">
            <div className="container">
                <h2 className="products-title">Пиццы</h2>
                <div className="products-block">
                    {
                        isLoading ? [...new Array(8)].map(() => <SkeletonProduct key={nanoid()} />) : (
                            pizza?.data?.map((item) => (
                                <Product  key={item.id} data={item}/>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;
