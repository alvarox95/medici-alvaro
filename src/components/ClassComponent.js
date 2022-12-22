import { Component } from "react";

class ClassComponent extends Component{
    render(){
        return (
            <div>
                <h2> Hola Soy un componente de: {this.props.nombre}</h2>
            </div>
        );
    }
}

export default ClassComponent;