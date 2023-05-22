import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setPopularItems } from '../../redux/popular/popularSlice';
import { nanoid } from 'nanoid'

import { fetchDataFromApi } from '../../api'
import SkeletonCategory from './SkeletonCategory'

import "./Category.scss";

const Category = () => {
    const orders = useSelector((state) => state.popular.items)
    const dispatch = useDispatch()
    
    // Для загрузки скелетон пока нет продуктов пока true  
    const [isLoading, setIsLoading] = React.useState(true)

     // При загрзки сайта будет производится запрос на сервер
    // сервер будет возвращать данные и данные будет добавляться в redux 
    React.useEffect(() => {
        getPopularOrders ()
    }, [])

    // Получаем "Популярные продукты" и с помощью redux в slice добавляем данные из api
    const getPopularOrders = () => {
        fetchDataFromApi('/api/orders?populate=*')
            .then((res) => (
                dispatch(setPopularItems(res)),
                setIsLoading(false)
            ))
    }

    return (
        <div className="category">
            <div className="container">
                <div className="category-content">
                    <h2 className="category-content__title">Часто заказывают</h2>
                    <div className="category-content__wrapper">
                        {
                            isLoading ? [...new Array(4)].map(() => <SkeletonCategory key={nanoid()} />) : (
                                orders?.data?.map((item) => (
                                    <div key={item.id} className="content-wrapper__item">
                                        <div className="wrapper-item__img">
                                            <img src={'http://localhost:1337' + item.attributes.image.data[0].attributes.url} alt="" />
                                        </div>
                                        <div className="wrapper-item__text">
                                            <span>{item.attributes.title}</span>
                                            <span>от {item.attributes.price} &#8381;</span>
                                    </div>
                                </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
