import { api } from '../../services/api'
import './Button.css'

export const Button = (props) => {

    function exec() {
        if(props.method == 'DELETE') {
            api.delete(`/${props.local}/${props.id}`)
        }
        window.location.reload();
    }
    return(
        <button onClick={exec}>{props.children}</button>
    )
}