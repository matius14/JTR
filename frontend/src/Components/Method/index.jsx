import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";


const MethodSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem 3rem;
`
const MethodHeader = styled.div`
    display: flex;
    gap: 9rem;
    align-items: center;
`
const MethodTitle = styled.h4`
    

`
const ButtonHeader = styled(Button)`
    &.MuiButton-root {
        text-transform: none; 
        font-size: 1rem;
        font-weight: bold;
        background-color: #FFFFFF;
        color: #000000;

    }
`
const MethodCard = styled.div`
    display: flex;
    gap: 1.25rem;
    
`
const MethodCardDescription = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #0072CE;
    gap: 1rem;
    width: 400px;
    padding: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 10px;
`
const MethodCardTitle = styled.h3`
    color: #FFFFFF;
    
`
const MethodCardChip = styled.img`
    width: 50px;
`
const MethodCardNumber = styled.h2`

`
const MethodCardInfo = styled.div`
    display: flex;
    align-items: center;
    align-self: end;
    gap: 3rem;
`
const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`
const ButtonEdit = styled(Button)`
    &.MuiButton-root{
        text-transform: none;
        font-weight: bold;
    }
`
const ButtonDelete = styled(Button)`
    &.MuiButton-root{
        text-transform: none;
        font-weight: bold;
    }
`
const MethodCardDate = styled.h5`
    color: #FFFFFF;
    
    
    
`
const MethodCardLogo = styled.img`
    width: 100px;
`



const Method = () =>{

    return(
        <MethodSection>
            <MethodHeader>
                <MethodTitle>Metodos de pago</MethodTitle>
                <ButtonHeader variant="contained" component={Link} to='/method-add'>Agregar metodo de pago</ButtonHeader>
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
                    <ButtonEdit variant="contained" component={Link} to='/method-edit'>Editar</ButtonEdit>
                    <ButtonDelete variant="contained">Eliminar</ButtonDelete>
                </ButtonGroup>
            </MethodCard>
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
                    <ButtonEdit variant="contained" component={Link} to='/method-edit'>Editar</ButtonEdit>
                    <ButtonDelete variant="contained" >Eliminar</ButtonDelete>
                </ButtonGroup>
            </MethodCard>
        </MethodSection>
    );



}


export default Method