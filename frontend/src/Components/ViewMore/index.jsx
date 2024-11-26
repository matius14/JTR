import { Link } from "react-router-dom";
import styled from "styled-components";


const ViewMoreSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    gap: 1.5rem;
`
const TitleViewMore = styled.h4`
    
`

const ViewMoreProduct = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    
`
const Product = styled(Link)`
    display: flex;
    gap: 1rem;
`
const ProductImg = styled.img`
    width: 180px;
`
const ContentProduct = styled.div`
    display: flex;
    flex-direction: column;
    color: #000000;
    gap: 0.25rem

`
const TitleProduct = styled.h4`
    font-family: 'Inter';
    font-weight: unset;
`
const PriceProduct = styled.h4`
    font-family: 'Inter';
`
const AvailabilityProduct = styled.h4`
    font-family: 'Inter';
`
const TypeFoodProduct = styled.h4`
    font-family: 'Inter';
`

const ViewMore = () =>{
    return(
        <ViewMoreSection>
            <TitleViewMore>Mas resultados para: comida extranjera</TitleViewMore>
            <ViewMoreProduct>
                <Product to={"/product"}>
                    <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                    <ContentProduct>
                        <TitleProduct>Tacos al pastor con una tajada de limon pajarito</TitleProduct>
                        <PriceProduct>$13000</PriceProduct>
                        <AvailabilityProduct>Disponible</AvailabilityProduct>
                        <TypeFoodProduct>Mexicana</TypeFoodProduct>
                    </ContentProduct>
                </Product>
                <Product to={"/product"}>
                    <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                    <ContentProduct>
                        <TitleProduct>Tacos al pastor con una tajada de limon pajarito</TitleProduct>
                        <PriceProduct>$13000</PriceProduct>
                        <AvailabilityProduct>Disponible</AvailabilityProduct>
                        <TypeFoodProduct>Mexicana</TypeFoodProduct>
                    </ContentProduct>
                </Product>
            </ViewMoreProduct>
        </ViewMoreSection>
    )

}


export default ViewMore;