import { Button } from "@mui/material";
import styled from "styled-components";

const HomeSection = styled.div`
    display: flex;
    flex-direction: column;

`

const SuggestionSection = styled.div`
    display: flex;
    margin: 1rem 0 2rem 1rem;
`

const Suggestion = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

`


const ImgProduct = styled.img`
    width: 200px;
`
const TitleSuggestion = styled.h2`
    



`
const Description = styled.h4`
    
   
`
const SuggestionAdd = styled.div`
    background-color: #FBFBFB;
    padding: 2rem 5rem;

`

const CategorySection = styled.div`
    

`
const TitleCategorySection = styled.h2`
    text-align: center;
    background-color: #E26D6D;
    padding: 0.5rem 0;
`

const Category = styled.div`
    

`
const ProductCategory = styled.div`
    display: flex;
    flex-direction: row;


`
const Product = styled.div`
    
`
const ProductImg = styled.img`
    width: 100px;
`
const ProductTitle = styled.h4`
    
`

const TitleCategory = styled.h2`
    
`

const CategoryHeader = styled.div`
    display: flex;
    justify-content: space-between;

`



const Home = () => {
    return(
        <HomeSection>
            <SuggestionSection>
                <Suggestion>
                    <ImgProduct src="taco.jpg" alt="Imagen del producto"></ImgProduct>
                    <TitleSuggestion>Tacos al pastor</TitleSuggestion>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequaA</Description>
                </Suggestion>
                <SuggestionAdd>
                    <TitleSuggestion>Sugerencia del chef</TitleSuggestion>
                    <Button variant="contained">Agregar al carrito</Button>
                </SuggestionAdd>
            </SuggestionSection>
            <CategorySection>
                <TitleCategorySection>Categorias</TitleCategorySection>
                <Category>
                    <CategoryHeader>
                        <TitleCategory>Comida extranjera</TitleCategory>
                        <Button variant="contained">Ver mas</Button>
                    </CategoryHeader>
                    <ProductCategory>
                        <Product>
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product>
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product>
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                    </ProductCategory>
                </Category>
                <Category>
                    <CategoryHeader>
                        <TitleCategory>Comida extranjera</TitleCategory>
                        <Button variant="contained">Ver mas</Button>
                    </CategoryHeader>
                    <ProductCategory>
                        <Product>
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product>
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product>
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                    </ProductCategory>
                </Category>
                <Category>
                    <CategoryHeader>
                        <TitleCategory>Comida extranjera</TitleCategory>
                        <Button variant="contained">Ver mas</Button>
                    </CategoryHeader>
                    <ProductCategory>
                        <Product>
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product>
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product>
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                    </ProductCategory>
                </Category>
            </CategorySection>
            <Button variant="contained">Ver mas categorias</Button>
        </HomeSection>
    )






}


export default Home;