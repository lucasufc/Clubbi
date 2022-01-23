import { Button } from '../Buttton'
import { Link } from 'react-router-dom'
import './Table.css'

export const Table = (props) => {
    const titulos = Object.keys(props.children[0])
    const data = props.children
    return(
        <table>
            <thead>
                <tr>
                {titulos.map((titulo, index) =>{
                    return <th key={index}>{titulo}</th>
                })}
                </tr>
            </thead>
            <tbody>
                {data.map((objeto, index) => {
                    return <tr key={index}>
                        {(Object.values(objeto)).map((valor, index) => {

                            return <td key={index}>{valor}</td>
                        })}
                        <td>
                            <span>
                                <Link to="/editar">
                                    <button>Alterar</button>
                                </Link>
                                <Button method="DELETE" local={props.local} id={objeto.order_id}>Deletar</Button>
                            </span>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}