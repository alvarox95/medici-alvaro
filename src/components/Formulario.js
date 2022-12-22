import './Formularios.css';
const Formulario = () => {
    const login = () =>{
        alert("Iniciaste Sesion")
    }
    return (
    <div>
        <form className='form'>
            <input placeholder="Ingresa tu nombre"/>
            <input placeholder="Ingresa tu nombre"/>
            <button onClick={login}>Login</button>
        </form>
    </div>
    )
}
export default Formulario;