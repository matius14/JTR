import { Link } from "react-router-dom";
import styled from "styled-components";


const ViewMoreSection = styled.div`

`
const TitleViewMore = styled.h2`
    
`

const ViewMoreProduct = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    
`
const Product = styled(Link)`
    display: flex;
`
const ProductImg = styled.img`
    width: 100px;
`
const ContentProduct = styled.div`
    display: flex;
    flex-direction: column;

`
const TitleProduct = styled.h4`

`
const PriceProduct = styled.h5`
    
`
const AvailabilityProduct = styled.h5`
    
`
const TypeFoodProduct = styled.h5`
    
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