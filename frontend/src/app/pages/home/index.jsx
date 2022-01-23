import { useEffect, useState } from "react";
import { Table } from "../../shared/Components/Table";
import { Title } from "../../shared/Components/Title";
import { api } from "../../shared/services/api";

export const Home = () => {
    const [ordem, setOrdem] = useState([])
    useEffect(() => {
        api.get('/orders')
            .then( ({ data }) => setOrdem(data.order))
    },[])
    
    return(
        <>
            <Title>Orders</Title>
            {ordem.length ? <Table local="orders">{ordem}</Table> : ""}
        </>
        
    )
}