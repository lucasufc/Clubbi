import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';

import logoImg from '../../assets/images/logo.svg';

import './PageHeader.css';


export const PageHeader=(props) =>{ 
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <a href="https://www.clubbi.com.br/" target="_blank" rel='noreferrer'>
                    <img id="header-logo" src={logoImg} alt="Clubbi"/>
                </a>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && <p>{props.description}</p>}
                {props.children}
            </div>
        </header>
    );
}