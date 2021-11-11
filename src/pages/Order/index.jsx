import React, { useState, useEffect } from 'react';
import { Table, Tag, Space } from 'antd';

import './styles.css';


function OrderPage() {

    return (
       <div className="order__container">
           <table>
               <thead>
                   <tr>
                       <th>Thành Phần</th>
                       <th>Giá</th>
                   </tr>
               </thead>

               <tbody>
                   <tr>
                       <td>
                           Salad(1) Bacon(2) Cheese(3) Meat(4)
                       </td>

                       <td>35$</td>
                   </tr>
               </tbody>
           </table>

       </div>
    )
}
export default OrderPage;