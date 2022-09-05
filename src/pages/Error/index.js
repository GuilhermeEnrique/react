import { Link } from 'react-router-dom';

function Error() {
    return (
        <div>
            <h2>
                Ops, pagina não encontrada! :C
            </h2> <br />
            <span>Encontramos as seguintes páginas: </span> <br />
            <Link to='/'>1. Home</Link>
        </div>
    )
}
export default Error;