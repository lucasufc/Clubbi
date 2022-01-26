import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../shared/assets/images/logo.svg';
import landingImg from '../../shared/assets/images/landing.svg';
import itemIcon from '../../shared/assets/images/icons/item.svg';
import orderIcon from '../../shared/assets/images/icons/order.svg';
import purpleHeartIcon from '../../shared/assets/images/icons/purple-heart.svg';

import './Home.css';
import { api } from '../../shared/services/api';

export const Home = () => {

    const [totalCompras , setTotalCompras] = useState(0);

    useEffect(()=>{
        api.get('orders').then(res=>{
            const {data} = res.data;
            setTotalCompras(data.length);
        })
    } ,[]);

    return ( 
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Clubbi"/>
                    <h2>Abasteça o seu mercado de forma rápida e barata.</h2>
                </div>

                <img 
                    src={landingImg} 
                    alt="landing" 
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="items" className="item">
                        <img className="icon" src={itemIcon} alt="Produtos"/>
                        Produtos
                    </Link>

                    <Link to="orders" className="order">
                        <img className="icon" src={orderIcon} alt="Dar aulas"/>
                        Compras
                    </Link>
                </div>

                <span className="total-orders">
                    Total de {totalCompras? totalCompras : '0'} compras ja realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>

    )
}