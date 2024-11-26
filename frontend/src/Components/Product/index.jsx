import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import styled from "styled-components"


const ProductSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;

`
const ProductContaint = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 3rem;
`

const ProductDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    width: min-content;
`
const ProductImg = styled.img`
    width: 400px;
`
const TitleDescription = styled.h2`
    font-family: 'Inter';
`
const ProductDescription = styled.h4`
    font-family: 'Inter';

`
const ProductCart = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0,0,0,0.4);
    border-radius: 10px;
    background-color: #FBFBFB;
    height: max-content;
    padding: 1rem 1rem 2rem 1rem;
    gap: 1.25rem;
    width: 25%;
`
const ProductTitle = styled.h3`
    font-family: 'Inter';
`
const ProductPrice = styled.h3`
    font-family: 'Inter';
`
const ProductAvailability = styled.h4`
    font-family: 'Inter';

`
const ProductCant = styled.h4`
    font-family: 'Inter';

`
const ButtonCart = styled(Button)`
    &.MuiButton-root {
        text-transform: none;
    }
`
const LineDivision = styled.div`
    border: 1px solid #000000;
`
const ProductRelationship = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3rem 0;
    gap: 2rem;
`
const ProductRelationsSection = styled.div`
    display: flex;  
    justify-content: space-between;
  
`

const ProductRelationshipTitle = styled.h4`
    
`
const ProductRelationsContaint = styled(Link)`
    display: flex;
    flex-direction: column;
    color: #000000;
    gap: 0.25rem
`
const ProductRelationsImg = styled.img`
    width: 200px;
`
const ProductRelationsTitle = styled.h4`
    font-family: 'Inter';
    font-weight: unset;
`

const Product = () =>{
    return(
        <ProductSection>
            <ProductContaint>
                <ProductDetail>      
                    <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                    <TitleDescription>Descripcion</TitleDescription>
                    <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequaA</ProductDescription>
                </ProductDetail>
                <ProductCart>
                    <ProductTitle>Tacos al pastor con una tajada de limon pajarito</ProductTitle>
                    <ProductPrice>$14000</ProductPrice>
                    <ProductAvailability>Disponibilidad</ProductAvailability>
                    <ProductCant>Cantidad: 4 unidad</ProductCant>
                    <ButtonCart variant="contained">Agregar al carrito</ButtonCart>
                </ProductCart>
            </ProductContaint>
            <LineDivision></LineDivision>
            <ProductRelationship>
                <ProductRelationshipTitle>Producto relacionados</ProductRelationshipTitle>
                <ProductRelationsSection>
                    <ProductRelationsContaint>
                        <ProductRelationsImg src="taco.jpg" alt="imagen del producto"/>
                        <ProductRelationsTitle>Tacos al pastor</ProductRelationsTitle>
                    </ProductRelationsContaint>
                    <ProductRelationsContaint>
                        <ProductRelationsImg src="taco.jpg" alt="imagen del producto"/>
                        <ProductRelationsTitle>Tacos al pastor</ProductRelationsTitle>
                    </ProductRelationsContaint>
                    <ProductRelationsContaint>
                        <ProductRelationsImg src="taco.jpg" alt="imagen del producto"/>
                        <ProductRelationsTitle>Tacos al pastor</ProductRelationsTitle>
                    </ProductRelationsContaint>
                    
                </ProductRelationsSection>
            </ProductRelationship>    
        </ProductSection>
    )

}

export default Product