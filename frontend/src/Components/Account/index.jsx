import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";


const AccountSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    gap: 2rem;
`
const AccountContaint = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;

`
const AccountInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
`
const AccountLogo = styled.div`
    
`
const AccountTitle = styled.h4`
    
`
const AccountName = styled.h3`
    

`
const AccountEmail = styled.h4`
    
    color: #394AFF;
`
const ButtonAccount = styled(Button)`
    &.MuiButton-root {
        text-transform: none;
        font-size: 1rem;
        background-color: #FE2C55;
    }
`
const AccountContaintOption = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
`
const AccountOption = styled(Link)`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0,0,0,0.4);
    border-radius: 10px;
    background-color: #FBFBFB;
    padding: 1rem 1rem 1rem 1rem;
    width: 300px;
    gap: 1rem;
    color: #000000;
`
const AccountOptionTitle = styled.h3`
   
`
const AccountOptionDescription = styled.h4`

`


const Account = () => {
    return(
        <AccountSection>
            <AccountContaint>
                <AccountInfo>
                    <AccountLogo><FontAwesomeIcon icon={faCircleUser} size="6x"></FontAwesomeIcon></AccountLogo>  
                    <AccountTitle>¡Bienvenido de vuelta!</AccountTitle>
                    <AccountName>Andrés Camilo Restrepo Ramírez</AccountName>
                    <AccountEmail>andres.restrepo89@gmail.com</AccountEmail>
                </AccountInfo>
                <ButtonAccount variant="contained" component={Link} to="/login">Cerrar sesion</ButtonAccount>
            </AccountContaint>
            <AccountContaintOption>
                <AccountOption to={"/information"}>
                    <AccountOptionTitle>Informacion personal</AccountOptionTitle>
                    <AccountOptionDescription>Información sobre ti y tus preferencias en nuestro restaurante</AccountOptionDescription>
                </AccountOption>
                <AccountOption to={"/method"}>
                    <AccountOptionTitle>Metodos de pago</AccountOptionTitle>
                    <AccountOptionDescription>Metodos de pago que tienes guardado</AccountOptionDescription>
                </AccountOption>
                <AccountOption to={"/security"}>
                    <AccountOptionTitle>Privacidad y Seguridad</AccountOptionTitle>
                    <AccountOptionDescription>Información sobre ti y tus preferencias en nuestro restaurante</AccountOptionDescription>
                </AccountOption>
                <AccountOption to={"/FAQ"}>
                    <AccountOptionTitle>Soporte al cliente</AccountOptionTitle>
                    <AccountOptionDescription>Aqui encontraras las preguntas frecuentes y demas ayudas</AccountOptionDescription>
                </AccountOption>
            </AccountContaintOption>
        </AccountSection>
    )




}

export default Account;