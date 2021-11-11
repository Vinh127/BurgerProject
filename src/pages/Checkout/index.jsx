import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

import './styles.css';

function CheckoutPage() {
    const totalPrice = 5.25;

    const [form] = Form.useForm();


    function handleSubmit(value) {

    }


    return (
        <>
            <div className="checkout__container">
                <div className="checkout__content">

                    <div className="checkout__burger">
                        <div className="checkout__burger-top">

                        </div>

                        <div className="checkout__burger-middle">
                            <h3>Chọn nhân</h3>
                        </div>

                        <div className="checkout__burger-bottom">

                        </div>
                    </div>

                    <div className="checkout__price">
                        <h4>Price</h4>
                        <h4>{totalPrice}</h4>
                    </div>

                    <div className="checkout__form">

                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={handleSubmit}
                            form={form}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Họ tên"
                                name="fullName"
                                rules={[{ required: true, message: 'Vui lòng nhập họ tên của bạn!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Phone"
                                name="userPhone"
                                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="userEmail"
                                rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Địa chỉ"
                                name="userAddress"
                                rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item name="userNote" label="Ghi chú">
                                <Input.TextArea  style={{maxHeight:'300px', height:'80px'}}/>
                            </Form.Item>


                            <Form.Item className="checkout__button" wrapperCol={{ offset: 2, span: 22 }}>
                                <Button htmlType="submit">
                                    Order
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>


                </div>



            </div>
        </>

    )

}

export default CheckoutPage;