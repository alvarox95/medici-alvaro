import './ItemListContainer.css'
import Title from '../Title/Title'
import ItemList from '../ItemList/ItemList'
import Alldata from '../../data/data.json'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({nombre}) => {
    const [data, setData] = useState([]);
    const {CategoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(Alldata)
            }, 2000)
        });
        if (CategoriaId) {
            getData.then(res => setData(res.filter(item => item.Category === CategoriaId)))
        }else{getData.then(res => setData(res))}
    }, [CategoriaId])

    return (
        <Container fluid ="xxl">
                <Title greeting = {nombre}/>
            <Row>
                <Col className ="d-flex mt-3 flex-wrap justify-content-between mb-3">
                <ItemList data = {data}/>
                </Col>
            </Row>
    </Container>
    )
}

export default ItemListContainer;                                                

        