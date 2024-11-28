import { faCheckCircle, faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import styled from "styled-components"


const ConfirmationSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 3rem;

`
const ConfirmationMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(0,0,0,0.4);
    border-radius: 10px;
    background-color: #FBFBFB;
    padding: 2rem 2rem;
    gap: 1rem;
`
const ConfirmationTitle = styled.h2`
    
`
const ConfirmationLogo = styled.div`
    
`
const ConfirmationPrint = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid rgba(0,0,0,0.4);
    border-radius: 10px;
    background-color: #FBFBFB;
    padding: 1rem 5.5rem;    
`
const ConfirmationPrintTitle = styled.h2`
    
`
const ConfirmationPrintLogo = styled.div`
    
`
const ButtonHome = styled(Button)`
    &.MuiButton-root{
        text-transform: none;
        padding-left: 2rem;
        padding-right: 2rem;
        font-weight: bold;
        margin-top: 3rem;
    }
`



const Confirmation = () =>{
    return(
        <ConfirmationSection>
            <ConfirmationMessage>
                <ConfirmationTitle>Gracias por realizar la compra</ConfirmationTitle>
                <ConfirmationLogo><FontAwesomeIcon icon={faCheckCircle} size="3x"/></ConfirmationLogo>
            </ConfirmationMessage>
            <ConfirmationPrint to={'/bill'}>
                <ConfirmationPrintTitle>Imprimir factura</ConfirmationPrintTitle>
                <ConfirmationPrintLogo><FontAwesomeIcon icon={faDownload} size="2x"/></ConfirmationPrintLogo>
            </ConfirmationPrint>
            <ButtonHome variant="contained" component={Link} to="/">Volver al inicio</ButtonHome>
        </ConfirmationSection>
    )

}

export default Confirmation;