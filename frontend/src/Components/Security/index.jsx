import { faChevronRight, faSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


const SecuritySection = styled.div`
    display: flex;
`
const SecuritySectionTitle = styled.h2`
    
`
const SecurityContainer = styled.div`
    display: flex;
`
const SecurityOption = styled.div`
    display: flex;
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
                    <SecurityOptionLogo><FontAwesomeIcon icon={faChevronRight} /></SecurityOptionLogo>
                </SecurityOption>
                <SecurityOption>
                    <SecurityOptionTitle>Recuperacion de contraseña</SecurityOptionTitle>
                    <SecurityOptionLogo><FontAwesomeIcon icon={faChevronRight} /></SecurityOptionLogo>
                </SecurityOption>
            </SecurityContainer>



        </SecuritySection>
    );


}

export default Security;