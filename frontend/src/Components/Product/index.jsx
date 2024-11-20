import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import styled from "styled-components"


const ProductSection = styled.div`
    display: flex;
    flex-direction: column;

`
const ProductContaint = styled.div`
    display: flex;
    justify-content: space-around;
`
const ProductDetail = styled.div`
    display: flex;
    flex-direction: column;
`
const ProductImg = styled.img`
    width: 100px;
`
const TitleDescription = styled.h2`
    
`
const ProductDescription = styled.h5`
    
`
const ProductCart = styled.div`
    
`
const ProductTitle = styled.h4`

`
const ProductPrice = styled.h6`
    
`
const ProductAvailability = styled.h6`

`
const ProductCant = styled.h5`
    
`
const ProductRelationship = styled.div`
    display: flex;
    flex-direction: column;
`
const ProductRelationsSection = styled.div`
    display: flex;  
    justify-content: space-around;
  
`

const ProductRelationshipTitle = styled.h4`
    
`
const ProductRelationsContaint = styled(Link)`
    display: flex;
    flex-direction: column;
`
const ProductRelationsImg = styled.img`
    width: 100px;
`
const ProductRelationsTitle = styled.h6`
    
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
                    <Button variant="contained">Agregar al carrito</Button>
                </ProductCart>
            </ProductContaint>
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