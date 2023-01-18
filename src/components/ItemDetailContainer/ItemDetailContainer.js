import ItemDetail from "../ItemDetail/ItemDetail";
import allData from "../../data/data.json";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(allData);
      }, 2000);
    });

    getData.then(res => setData(res));
  }, []);

  return (
    <ItemDetail data ={data} />
  )
}

export default ItemDetailContainer