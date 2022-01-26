import { useEffect, useState } from "react"
import { api } from "../../services/api"
import './Select.css'


export const Select = ({name, label, options, path, id, ...rest}) => {
    const [produtos, setProdutos] = useState([])
    useEffect(() => {
        api.get(`/${path}/${id}`)
            .then(resp => resp.data.data)
            .then(resp => {
                let value = resp.map((item) => {
                    return item.data
                })
                setProdutos(value)
            })
            .then(console.log(produtos))

    },[])

    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest} >
            <option value="" disabled hidden>Selecione uma opção</option>
            {produtos?.map(option => {
                return <option key={option.product_id} value={option.description} >{option.description}</option>
            })}
            </select>
        </div>
    )
}