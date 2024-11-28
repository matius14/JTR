import { faChevronRight, faSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


const SecuritySection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    gap: 1.5rem;
`   
const SecuritySectionTitle = styled.h2`
    
`
const SecurityContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    `
const SecurityOption = styled.div`
    display: flex;
    border: 1px solid rgba(0,0,0,0.4);
    border-radius: 10px;
    background-color: #FBFBFB;
    justify-content: space-between;
    padding: 1rem;
`
const SecurityOptionTitle = styled.h2`
    

`
const SecurityOptionLogo = styled.div`
    
`

const Security = () =>{

    return(
        <SecuritySection>
            <SecuritySectionTitle>Seguridad y privacidad</SecuritySectionTitle>
            <SecurityContainer>
                <SecurityOption>
                    <SecurityOptionTitle>Cambiar contraseña</SecurityOptionTitle>
                    <SecurityOptionLogo><FontAwesomeIcon icon={faChevronRight} size="2x"/></SecurityOptionLogo>
                </SecurityOption>
                <SecurityOption>
                    <SecurityOptionTitle>Recuperacion de contraseña</SecurityOptionTitle>
                    <SecurityOptionLogo><FontAwesomeIcon icon={faChevronRight} size="2x" /></SecurityOptionLogo>
                </SecurityOption>
            </SecurityContainer>



        </SecuritySection>
    );


}

export default Security;