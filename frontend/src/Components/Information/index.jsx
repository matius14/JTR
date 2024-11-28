import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider } from "@mui/material";
import styled from "styled-components";


const InformationSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    gap: 1rem;
`
const InformationTitle = styled.h2`
    text-align: center;
`
const IconContainer = styled.div`
    align-self: center;
`
const InformationContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;`
const InformationField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
const InformationLabel = styled.h3`
    

`
const InformationData = styled.h4`
    
    
`
const ButtonContent = styled.div`
    display: flex;
    gap: 1rem;
    align-self: end;
`
const ButtonDelete = styled(Button)`
    &.MuiButton-root {
        text-transform: none; 
        font-size: 1rem;
        font-weight: bold;
        background-color: #E26D6D;

    }
`
const ButtonEdit = styled(Button)`
    &.MuiButton-root {
        text-transform: none; 
        font-size: 1rem;
        font-weight: bold;
        background-color: #FBFBFB;
        color: #000000;

    }
`


const Information = () =>{

    return(
        <InformationSection>
            <InformationTitle>Informacion personal</InformationTitle>
            <IconContainer><FontAwesomeIcon icon={faCircleUser} size="6x"/></IconContainer>
            <InformationContent>
                <InformationField>
                    <InformationLabel>Nombres:</InformationLabel>
                    <InformationData>Andres Camilo</InformationData>
                </InformationField>
                <Divider sx={{width:'80%'}}/>
                <InformationField>
                    <InformationLabel>Apellidos:</InformationLabel>
                    <InformationData>Restrepo Camilo</InformationData>
                </InformationField>
                <Divider sx={{width:'80%'}}/>
                <InformationField>
                    <InformationLabel>Fecha de nacimiento:</InformationLabel>
                    <InformationData>30/10/2003</InformationData>
                </InformationField>
                <Divider sx={{width:'80%'}}/>
                <InformationField>
                    <InformationLabel>Correo electronico:</InformationLabel>
                    <InformationData>andres.restrepo89@gmail.com</InformationData>
                </InformationField>
                <Divider sx={{width:'80%'}}/>
                <InformationField>
                    <InformationLabel>Dirrecion:</InformationLabel>
                    <InformationData>Cra 53 #8 - 10 barrio La condesa</InformationData>
                </InformationField>
                <Divider sx={{width:'80%'}}/>
                <InformationField>
                    <InformationLabel>Celular:</InformationLabel>
                    <InformationData>3124324433</InformationData>
                </InformationField>
            </InformationContent>
            <ButtonContent>
                <ButtonDelete variant="contained">Eliminar cuenta</ButtonDelete>
                <ButtonEdit variant="contained">Editar informacion</ButtonEdit>
            </ButtonContent>
        </InformationSection>
    )

}

export default Information;