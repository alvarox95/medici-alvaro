import ItemDetail from "../ItemDetail/ItemDetail";
import Alldata from "../../data/data.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const { ItemId } = useParams() ;

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    const dataFilter = Alldata.find((item) => item.id == ItemId);
    setData(dataFilter);
  }, [ItemId]);
  
  console.log(data)
  
  return (
    <Container fluid ="xxl">
            <Row>
                <Col className ="d-flex mt-3 flex-wrap justify-content-between mb-3">
                  <ItemDetail data ={data} />
                </Col>
            </Row>
    </Container>
  )
}

export default ItemDetailContainer;