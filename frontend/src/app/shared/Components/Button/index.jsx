import { api } from "../../services/api"
import './Button.css'

export const Button = (props) => {
    function clickHandler(){
        if(props.status != 'CANCELADO' && props.method == 'delete' && props.path == 'orders') {
            console.log('aqui')
            api.get(`status/${props.id}`)
            .then(resp => resp.data.status)
            .then((resp) => {
                let retorno = {order_status:""}
                if(resp == 'finalizado'){
                    retorno.order_status =  "em progresso"
                }else {
                    retorno.order_status = "cancelado"
                }
                api.put(`status/${props.id}`,retorno).then(window.location.reload())
            })
        }else {
            if(props.method == 'post' || props.method == 'put') {
                let value = typeof props.value== 'number' ? props.value : `"${props.value}"`
                let path = props.path
                if(props.path == 'orders' && props.status == 'CANCELADO') {
                    value = "em progresso"
                    path = `status/${props.id}`
                } else {
                    value = "finalizado"
                    path = `status/${props.id}`
                }
                let obj =  {}
                obj[`${props.itemKey}`] = `${value}`
                api[`${props.method}`](`${path}`, obj)
                    .then(window.location.reload())
                
            } else if(props.id) {
                console.log(`${props.method}: `+`${props.path}/${props.id}`)
                api[`${props.method}`](`${props.path}/${props.id}`)
                .then(resp => console.log(resp))
            }else {
                api[`${props.method}`](`${props.path}`)
                .then(resp => console.log(resp))
            }
        }
        
    }
    return(
        <button type="button" onClick={clickHandler}>{props.children}</button>
    )
}