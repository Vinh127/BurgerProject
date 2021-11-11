import React, { useState, useEffect } from 'react';
import history from '../../utils/history.js';
import { ROUTERS } from '../../Constants/router.js';

import { Menu } from 'antd';
import { SmileOutlined, UnlockOutlined, ShoppingOutlined,DollarCircleOutlined } from '@ant-design/icons';

import './styles.jsx';
import './styles.css';

function Header() {
    const [current, setCurrent] = useState('mail');


    const { SubMenu } = Menu;

    function handleClick(value) {
        setCurrent(value.key);
    }

    function handleLogout() {
        window.location.reload();

        history.push(ROUTERS.HOME)
    }

    return (
        <>
            <div className="header__container">
                <Menu onClick={(e) => handleClick(e)} mode="horizontal">
                    <Menu.Item
                        key="mail"
                        icon={<SmileOutlined />}
                        onClick={() => history.push(ROUTERS.HOME)}
                    >
                        Burger Builder
                    </Menu.Item>
                    <Menu.Item
                        key="app"
                        icon={<ShoppingOutlined />}
                        onClick={() => history.push(ROUTERS.CHECKOUT)}
                    >
                        Checkout
                    </Menu.Item>

                    <Menu.Item
                        key="order"
                        icon={<DollarCircleOutlined />}
                        onClick={() => history.push(ROUTERS.ORDER)}
                    >
                        Order
                    </Menu.Item>

                    <Menu.Item
                        key="logout"
                        icon={< UnlockOutlined />}
                        onClick={handleLogout}
                    >
                        Logout
                    </Menu.Item>

                </Menu>
            </div>
        </>
    )

}

export default Header;

