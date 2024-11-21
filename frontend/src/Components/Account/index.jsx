import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";


const AccountSection = styled.div`
    display: flex;
    flex-direction: column;
`
const AccountContaint = styled.div`
    display: flex;
    flex-direction: row;
`
const AccountInfo = styled.div`
    display: flex;
    flex-direction: column;
`
const AccountLogo = styled.div`
    
`
const AccountTitle = styled.h2`
    
`
const AccountName = styled.h4`
    
`
const AccountEmail = styled.h4`
    
`
const AccountContaintOption = styled.div`
    display: flex;
`
const AccountOption = styled(Link)`
    display: flex;
    border: 1px solid #000000;
    border-radius: 10px;
    flex-direction: column;
`
const AccountOptionTitle = styled.h4`
    color: #000000;
`
const AccountOptionDescription = styled.h4`

`


const Account = () => {
    return(
        <AccountSection>
            <AccountContaint>
                <AccountInfo>
                    <AccountLogo><FontAwesomeIcon icon={faCircleUser} size="2x"></FontAwesomeIcon></AccountLogo>  
                    <AccountTitle>¡Bienvenido de vuelta!</AccountTitle>
                    <AccountName>Andrés Camilo Restrepo Ramírez</AccountName>
                    <AccountEmail>andres.restrepo89@gmail.com</AccountEmail>
                </AccountInfo>
                <Button variant="contained">Cerrar sesion</Button>
            </AccountContaint>
            <AccountContaintOption>
                <AccountOption to={"/information"}>
                    <AccountOptionTitle>Informacion personal</AccountOptionTitle>
                    <AccountOptionDescription>Información sobre ti y tus preferencias en nuestro restaurante</AccountOptionDescription>
                </AccountOption>
                <AccountOption>
                    <AccountOptionTitle>Metodos de pago</AccountOptionTitle>
                    <AccountOptionDescription>Metodos de pago que tienes guardado</AccountOptionDescription>
                </AccountOption>
                <AccountOption>
                    <AccountOptionTitle>Privacidad y Seguridad</AccountOptionTitle>
                    <AccountOptionDescription>Información sobre ti y tus preferencias en nuestro restaurante</AccountOptionDescription>
                </AccountOption>
                <AccountOption>
                    <AccountOptionTitle>Soporte al cliente</AccountOptionTitle>
                    <AccountOptionDescription>Aqui encontraras las preguntas frecuentes y demas ayudas</AccountOptionDescription>
                </AccountOption>
            </AccountContaintOption>
        </AccountSection>
    )




}

export default Account;