import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

import './styles.css';

function Item(props) {
    const {
        // handleIncreaseSalad,
        // handleDecreaseSalad,
        // handleIncreaseBacon,
        // handleDecreaseBacon,
        // handleIncreaseCheese,
        // handleDecreaseCheese,
        // handleIncreaseMeat,
        // handleDecreaseMeat,

        burgerOptionItem,
        handleIncrease,
        handleDecrease,
        isDisable

    } = props;

    console.log("isDisable: ",isDisable);

    const [salad, setSalad] = useState(0);
    const [bacon, setBacon] = useState(0);
    const [meat, setMeat] = useState(0);
    const [cheese, setCheese] = useState(0);

    function handleIncreaseIsOption() {
        handleIncrease(burgerOptionItem.type, burgerOptionItem.price)
    }

    function handleDecreaseIsOption() {
        handleDecrease(burgerOptionItem.type, burgerOptionItem.price)

    }


    return (
        <>

            <div className="home__menu-item">
                <h3>{burgerOptionItem.name}</h3>
                <div className="home__menu-item-button">
                    <Button
                        onClick={() => handleDecreaseIsOption()}
                        disabled={isDisable ? true : false}
                   >
                        Less
                    </Button>

                    <Button onClick={() => handleIncreaseIsOption(burgerOptionItem.type)}>
                        More
                    </Button>
                </div>
            </div>

        </>
    )


}

export default Item;