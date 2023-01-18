import './ItemListContainer.css'
import Title from '../Title/Title'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import Alldata from '../../data/data.json'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ItemListContainer = ({nombre}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(Alldata)
            }, 3000)
        })
        getData.then((res) => setData(res))
    }, [])

    const onAdd = (cantidad) => {
        alert('Se agregaron ' + cantidad + ' productos al carrito') 
    }
    return (
        <Container fluid ="xxl">
                <Title greeting = {nombre}/>
                <ItemCount initial={1} stock = {5} onAdd = {onAdd} />
            <Row>
                <Col className ="d-flex mt-3 flex-wrap justify-content-between">
                <ItemList data = {data}/>
                </Col>
            </Row>
    </Container>
    )
}

export default ItemListContainer;                                                

        