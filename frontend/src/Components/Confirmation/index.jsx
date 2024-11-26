import { faCheckCircle, faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import styled from "styled-components"


const ConfirmationSection = styled.div`
    display: flex;
`
const ConfirmationMessage = styled.div`
    display: flex;
`
const ConfirmationTitle = styled.h2`
    
`
const ConfirmationLogo = styled.div`
    
`
const ConfirmationPrint = styled(Link)`
    display: flex;
`
const ConfirmationPrintTitle = styled.h3`
    
`
const ConfirmationPrintLogo = styled.div`
    
`



const Confirmation = () =>{
    return(
        <ConfirmationSection>
            <ConfirmationMessage>
                <ConfirmationTitle>Gracias por realizar la compra</ConfirmationTitle>
                <ConfirmationLogo><FontAwesomeIcon icon={faCheckCircle}/></ConfirmationLogo>
            </ConfirmationMessage>
            <ConfirmationPrint>
                <ConfirmationPrintTitle>Imprimir factura</ConfirmationPrintTitle>
                <ConfirmationPrintLogo><FontAwesomeIcon icon={faDownload}/></ConfirmationPrintLogo>
            </ConfirmationPrint>
            <Button variant="contained">Volver al inicio</Button>
        </ConfirmationSection>
    )

}

export default Confirmation;