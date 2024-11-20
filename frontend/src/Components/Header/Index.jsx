import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../Logo";
import { Button, TextField } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartShopping, faCircleUser, faUtensils} from '@fortawesome/free-solid-svg-icons';

const Position = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #E26D6D;
    align-items: center;
`

const Buscar = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

`

const LinkGroup = styled.div`
    display: flex;
    gap: 2rem;

`


const Header = () => {
    const [busqueda, setBusqueda] = useState('');
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            navigate(`/resultado?data=${busqueda}`)
        }
    };

    return(
        <Position>
            <Link to={"/"}><Logo src="Logo.png" alt="Logo del restaurante JTR" size="80px"></Logo></Link>
            <Buscar>
                <TextField value={busqueda} onKeyDown={handleKeyDown} onChange={(e) => {setBusqueda(e.target.value)}}></TextField>
                <Link to={`/resultado?data=${busqueda}`}><FontAwesomeIcon icon={faSearch} /></Link>
            </Buscar>
            <LinkGroup>
                <Link to="/formVideo"><FontAwesomeIcon icon={faUtensils} size="2x" /></Link>
                <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} size="2x"/></Link>
                <Link to="/formVideo"><FontAwesomeIcon icon={faCircleUser} size="2x"/></Link>
            </LinkGroup>
        </Position>
    )

}

export default Header