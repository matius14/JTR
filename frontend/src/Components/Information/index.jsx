import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import styled from "styled-components";


const InformationSection = styled.div`
    display: flex;
    flex-direction: column;
`
const InformationTitle = styled.h2`

`
const IconContainer = styled.div`

`
const InformationContent = styled.div`
    
`
const InformationField = styled.div`
    
`
const InformationLabel = styled.h5`
    
`
const InformationData = styled.h5`

`
const ButtonContent = styled.div`
    display: flex;
`


const Information = () =>{

    return(
        <InformationSection>
            <InformationTitle>Informacion personal</InformationTitle>
            <IconContainer><FontAwesomeIcon icon={faCircleUser} size="4x"/></IconContainer>
            <InformationContent>
                <InformationField>
                    <InformationLabel>Nombres:</InformationLabel>
                    <InformationData>Andres Camilo</InformationData>
                </InformationField>
                <InformationField>
                    <InformationLabel>Apellidos:</InformationLabel>
                    <InformationData>Restrepo Camilo</InformationData>
                </InformationField>
                <InformationField>
                    <InformationLabel>Fecha de nacimiento:</InformationLabel>
                    <InformationData>30/10/2003</InformationData>
                </InformationField>
                <InformationField>
                    <InformationLabel>Correo electronico:</InformationLabel>
                    <InformationData>andres.restrepo89@gmail.com</InformationData>
                </InformationField>
                <InformationField>
                    <InformationLabel>Dirrecion:</InformationLabel>
                    <InformationData>Cra 53 #8 - 10 barrio La condesa</InformationData>
                </InformationField>
                <InformationField>
                    <InformationLabel>Celular:</InformationLabel>
                    <InformationData>3124324433</InformationData>
                </InformationField>
            </InformationContent>
            <ButtonContent>
                <Button variant="contained">Eliminar cuenta</Button>
                <Button variant="contained">Editar informacion</Button>
            </ButtonContent>
        </InformationSection>
    )

}

export default Information;