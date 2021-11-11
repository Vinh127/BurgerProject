import React, { useState, useEffect } from 'react';
import { ROUTERS } from '../../Constants/router.js';
import history from '../../utils/history.js';

import Item from './components/Item/index.jsx';
import BurgerPage from '../Burger/index.jsx';

import { Button, notification } from 'antd';

import './styles.css';
import burger from '../../Images/burger.jpg';


function HomePage() {

    const [totalPrice, setTotalPrice] = useState(5.25);

    const [isDisable, setIsDisable] = useState(true);


    const burgerOption = [
        {
            name: 'Salad',
            type: 'salad',
            price: 1

        },
        {
            name: 'Bacon',
            type: 'bacon',
            price: 2,
        },
        {
            name: 'Cheese',
            type: 'cheese',
            price: 3,
        },
        {
            name: 'Meat',
            type: 'meat',
            price: 4,
        }
    ];



    function renderMenu() {
        if (burgerOption.load) return <p>Loadding...</p>
        return burgerOption.map((burgerOptionItem, burgerOptionIndex) => {
            return (
                <Item
                    burgerOptionItem={burgerOptionItem}
                    handleIncrease={handleIncrease}
                    handleDecrease={handleDecrease}
                    isDisable={isDisable}
                />
            );
        });
    };

    function renderHambugerImage() {
        // <BurgerPage />
        return (
            <>
                <div className="salad"></div>
                <div className="bacon"></div>
                <div className="cheese"></div>
                <div className="meat"></div>
            </>


        );
    }


    function handleIncrease(type, price) {
        console.log("type: ", type + " " + "Price: " + price);

        let oldPrice = totalPrice;
        let newPrice = oldPrice + price;
        console.log("newPrice: ", newPrice);

        setTotalPrice(newPrice)

        setIsDisable(false);

    }

    const defaultPrice = 5.25;


    function handleDecrease(type, price) {
        console.log("type: ", type + " " + "Price: " + price);

        let oldPrice = totalPrice;
        let newPrice = oldPrice - price;

        setTotalPrice(newPrice);

        if (newPrice <= defaultPrice) {
            setIsDisable(true);
        }


    }





    return (
        <div className="home__container">
            <div className="home__content">

                <div className="home__burger">
                    <div className="home__burger-top">
                    </div>

                    <div className="home__burger-middle">
                        {/* <h3> Chọn nhân</h3> */}
                        {renderHambugerImage()}
                    </div>

                    <div className="home__burger-bottom">
                    </div>
                </div>

                <div className="home__price">
                    <h4>Price</h4>
                    <h4>{totalPrice}</h4>
                </div>


                <div className="home__menu">
                    {renderMenu()}
                </div>

                <div className="home__button">
                    <Button onClick={() => history.push(ROUTERS.CHECKOUT)}>
                        Checkout
                    </Button>
                </div>


                {/* <div className="home__button">
                    <Button>
                        Sign in
                    </Button>
                </div> */}
            </div>
        </div>
    )

}

export default HomePage;