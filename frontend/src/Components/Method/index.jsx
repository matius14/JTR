import { Button } from "@mui/material";
import styled from "styled-components";


const MethodSection = styled.div`
    display: flex;
`
const MethodHeader = styled.div`
    display: flex;
`
const MethodTitle = styled.h5`

`
const ButtonHeader = styled(Button)`

`
const MethodCard = styled.div`
    display: flex;
`
const MethodCardDescription = styled.div`
    display: flex;
`
const MethodCardTitle = styled.h5`
    
`
const MethodCardChip = styled.img`

`
const MethodCardNumber = styled.h2`

`
const MethodCardInfo = styled.div`
    display: flex;
`
const ButtonGroup = styled.div`
    display: flex;
`
const MethodCardDate = styled.h2`
    
`
const MethodCardLogo = styled.img`
    
`



const Method = () =>{

    return(
        <MethodSection>
            <MethodHeader>
                <MethodTitle>Metodos de pago</MethodTitle>
                <ButtonHeader variant="contained">Agregar metodo de pago</ButtonHeader>
            </MethodHeader>
            <MethodCard>
                <MethodCardDescription>
                    <MethodCardTitle>Visa clasico credito</MethodCardTitle>
                    <MethodCardChip src="chip.png" alt="imagen del chip"/>
                    <MethodCardNumber>4000 1234 5678 9010</MethodCardNumber>
                    <MethodCardInfo>
                        <MethodCardDate>Valido hasta 9/27</MethodCardDate>
                        <MethodCardLogo src="visa.png" alt="logo del metodo de pago"/>
                    </MethodCardInfo>
                </MethodCardDescription>
                <ButtonGroup>
                    <Button variant="contained">Editar</Button>
                    <Button variant="contained">Eliminar</Button>
                </ButtonGroup>
            </MethodCard>
        </MethodSection>
    );



}


export default Method