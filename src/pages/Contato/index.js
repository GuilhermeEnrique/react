import { Link } from 'react-router-dom';

function Contato() {
    return (
        <div>
            <h1>Pagina de contato</h1>
            <span>Entre em contato conosco através do número (dd) xxxxx-xxxx </span> <br /> <br />

            <Link to='/'>Home</Link> <br />
            <Link to='/sobre'>Sobre</Link>
        </div>
    )
}

export default Contato;