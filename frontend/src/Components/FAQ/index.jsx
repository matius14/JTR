import styled from "styled-components";


const FAQSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    gap: 2rem;
`
const FAQSectionTitle = styled.h3`
    
    
`
const FAQContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`
const FAQContaint = styled.div`
    display: flex;
    flex-direction: column;
`
const FAQTitle = styled.h2`
    
    background-color: #0072CE;
    color: #FFFFFF;
    padding: 0.5rem;
    border-radius: 5px;

`
const FAQDescription = styled.h4`
    

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
                <FAQContaint>
                    <FAQTitle>Que metodos de pago existen?</FAQTitle>
                    <FAQDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequaA </FAQDescription>
                </FAQContaint>
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