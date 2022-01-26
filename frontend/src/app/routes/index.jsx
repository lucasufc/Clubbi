import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { EditOrders, Home, Orders }from '../pages'
export const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/orders" element={<Orders/>}>
                </Route>
                    <Route path="/edit_orders/:id" element={<EditOrders/>} />
                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
        </BrowserRouter>
    )
}