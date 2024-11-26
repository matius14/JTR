import styled from "styled-components";


const FAQSection = styled.div`
    display: flex;
`
const FAQSectionTitle = styled.h4`
    
`
const FAQContainer = styled.div`
    display: flex;
`
const FAQContaint = styled.div`
    display: flex;
`
const FAQTitle = styled.h3`
    
`
const FAQDescription = styled.h5`
    
`

const FAQ = () =>{
    return(
        <FAQSection>
            <FAQSectionTitle>Preguntas frecuentes</FAQSectionTitle>
            <FAQContainer>
                <FAQContaint>
                    <FAQTitle>Que metodos de pago existen?</FAQTitle>
                    <FAQDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequaA </FAQDescription>
                </FAQContaint>
                <FAQContaint>
                    <FAQTitle>Que metodos de pago existen?</FAQTitle>
                    <FAQDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequaA </FAQDescription>
                </FAQContaint>
            </FAQContainer>
        </FAQSection>
    )

}

export default FAQ;