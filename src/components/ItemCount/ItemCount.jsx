import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import './ItemCount.css';
export const ItemCount = ({initial, stock, onAdd}) =>{
    const [count, setCount] = useState(initial);

    const decrease = () => {
        setCount(count - 1);
    }
    const increase = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])
    
    return (
        <div className='count'>
            <div className="numb">
                <Button variant="secondary" disabled ={count <= 1} onClick={decrease}>-</Button>
                <InputGroup.Text id="basic-addon1">{count}</InputGroup.Text>
                <Button variant="secondary" onClick={increase} disabled = {count >= stock}>+</Button>
            </div>
                <Button className="botton" variant="outline-dark" disabled = {stock <= 0} onClick={()=> onAdd(count)}>Agregar al Carrito</Button>
        </div>
    )
}

export default ItemCount;


