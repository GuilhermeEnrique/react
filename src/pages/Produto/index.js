import { useParams } from 'react-router-dom';

function Produto() {
    const { id } = useParams();
    return (
        <div>
            <br />
            <h2>Detalhes sobre o produto</h2>
            Meu produto é: <strong>{id}</strong>
        </div>
    )
}

export default Produto;