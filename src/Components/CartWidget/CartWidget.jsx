import React from 'react';
import './CartWidget.css'
import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
    return (
        <div>
            <button>
                <BsCart3 />
            </button>
            <strong>0</strong>
        </div>
    )
}

export default CartWidget
