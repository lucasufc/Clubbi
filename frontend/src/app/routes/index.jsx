import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { Edit, Home }from '../pages'
export const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/pagina-inicial" element={<Home/>}/>
                <Route path="/editar" element={<Edit/>}>
                    
                </Route>
                <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
            </Routes>
        </BrowserRouter>
    )
}