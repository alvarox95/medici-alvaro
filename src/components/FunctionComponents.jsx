const FunctionComponent = ({nombre}) =>{
    console.log(nombre)
    return(
        <div>
            <h2>Hola Soy un componente de: {nombre} </h2>
        </div>
    );
};
export default FunctionComponent;