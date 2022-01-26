import {FormEvent, useEffect, useState} from 'react'
import { PageHeader, Input, Button, Select } from '../../shared/Components'
import { useParams  } from 'react-router-dom'
import warningIcon from '../../shared/assets/images/icons/warning.svg'
import edit from '../../shared/assets/images/icons/edit.svg'
import cancel from '../../shared/assets/images/icons/cancel.svg'
import confirm from '../../shared/assets/images/icons/confirm.svg'
import { api } from '../../shared/services/api'

import './Orders.css'

export const EditOrders = () => {
    let order_id = useParams().id
    const [order, setOrder] = useState([])

    useEffect(() => {
        api.get(`/item_order/${order_id}`)
        .then(resp => resp.data.data)
        .then(resp => setOrder(resp))
    },[])

    return(
        <div id="page-order-form" className="container">
            <PageHeader 
                    title="Edite sua Compra"
                    description="Adicione, altere ou exclua produtos da lista de compras!"
            />
            <main>
                <form>
                    <fieldset>
                        <legend>Compra {`${order[0]?.order_id}`}</legend>
                        <div className= {`order-item`}>
                            <Select
                                name="item"
                                label="Items"
                                path="order"
                                id="1"
                            >

                            </Select>
                        </div>
                        {/* {order?.map((order, index) => {
                            let status = order.order_status.toUpperCase()
                            return(
                                <div className= {`order-item`} key= {index}>
                                    <Input type="text" name={"id"} label="Id" value={order.order_id} onChange={()=>''}/>
                                    <Input type="text" name={"client_id"} label="Id Cliente" value={order.client_id} onChange={()=>''}/>
                                    <Input type="text" name={"status"} label="Status" value={status} onChange={()=>''}/>
                                    <Button method="delete" 
                                        path="orders" 
                                        id={order.order_id} 
                                        status={status} 
                                        value="" itemKey="status">
                                            <img src={cancel} alt="Icone cancelamento" />
                                    </Button>
                                        <button id="botao-link" type='button'>
                                            <img src={edit} alt="Icone editar" />
                                        </button>
 
                                    <Button method="put" 
                                        path="orders" 
                                        id={order.order_id} 
                                        status={status} 
                                        itemKey="order_status" 
                                        value="">
                                            <img src={confirm} alt="Icone confirma" />
                                    </Button>

                                </div>
                            )
                        })} */}

                    </fieldset>
                    <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br/>
                        Olha a postura na cadeira
                    </p>
                    <button type="submit">
                        Cadastrar compra
                    </button>
                </footer>
                </form>
            </main>
    </div>
    )
}