import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeSection = styled.div`
    display: flex;
    flex-direction: column;

`

const SuggestionSection = styled.div`
    display: flex;
`

const Suggestion = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 2rem 2rem;

`


const ImgProduct = styled.img`
    width: 200px;
`
const TitleSuggestion = styled.h3`

`
const Description = styled.h5`
    font-size: 1rem;
     
    
    line-height: 1rem;
`
const SuggestionAdd = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #D9D9D9;
    padding: 7rem 6rem;
    align-items: center;
    gap: 20px;

`
const TitleSuggestionAdd = styled.h3`
    width: 200px;
    text-align: center;
`
const SuggestionAddButton = styled(Button)`
`

const CategorySection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem 3rem;
    gap: 4rem

`
const TitleCategorySection = styled.h2`
    text-align: center;
    background-color: #E26D6D;
    padding: 0.5rem 0;
    font-family:'Julee';
    color: #FFFFFF;
    
`

const Category = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

`
const ProductCategory = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow-y: hidden;
    gap: 1.25rem;

`
const Product = styled(Link)`
    color: #000000;
`
const ProductImg = styled.img`
    width: 225px;
`
const ProductTitle = styled.h4`
    
`

const TitleCategory = styled.h2`
    font-size: 1.125rem;
    font-family: 'julee';
    font-weight: normal;
`

const CategoryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

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
                    <TitleSuggestionAdd>Sugerencia del chef</TitleSuggestionAdd>
                    <SuggestionAddButton variant="contained" sx={{ textTransform: 'none' }}>Agregar al carrito</SuggestionAddButton>
                </SuggestionAdd>
            </SuggestionSection>
            <TitleCategorySection>Categorias</TitleCategorySection>
            <CategorySection>
                <Category>
                    <CategoryHeader>
                        <TitleCategory>Comida extranjera</TitleCategory>
                        <Button variant="contained" component={Link} to="/view-more" sx={{borderRadius:2, textTransform:"none"}}>Ver mas</Button>
                    </CategoryHeader>
                    <ProductCategory>
                        <Product to="/product">
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product to="/product">
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product to="/product">
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product to="/product">
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product to="/product">
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product to="/product">
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                    </ProductCategory>
                </Category>
                <Category>
                    <CategoryHeader>
                        <TitleCategory>Comida extranjera</TitleCategory>
                        <Button variant="contained" component={Link} to="/view-more" sx={{borderRadius:2, textTransform:"none"}}>Ver mas</Button>
                    </CategoryHeader>
                    <ProductCategory>
                        <Product to="/product">
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product to="/product">
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product to="/product">
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product to="/product">
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product to="/product">
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product to="/product">
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                    </ProductCategory>
                </Category>
                <Category>
                    <CategoryHeader>
                        <TitleCategory>Comida extranjera</TitleCategory>
                        <Button variant="contained" component={Link} to="/view-more" sx={{borderRadius:2, textTransform:"none"}}>Ver mas</Button>
                    </CategoryHeader>
                    <ProductCategory>
                        <Product to="/product">
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product to="/product">
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product to="/product">
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product to="/product">
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product to="/product">
                            <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                            <ProductTitle>Tacos al pastor</ProductTitle>
                        </Product>
                        <Product to="/product">
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