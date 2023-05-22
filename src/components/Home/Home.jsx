import Banner from '../Home/Banner/Banner'
import Category from '../Category/Category';
import Products from '../Products/Products';
import "./Home.scss";

const Home = () => {
    return (
        <div className="main-content">
            <Banner />
            <Category />
            <Products />
        </div>
    )
};

export default Home;
