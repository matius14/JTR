import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";


const SearchSection = styled.div`
    display: flex;
    flex-direction: column;


`

const SearchResult = styled.h5`
    margin: 0 0 1rem 5rem;
    
`

const SearchContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

`

const FilterContent = styled.div`
    display: flex;
    flex-direction: column;
`

const TitleSection = styled.h2`
    
`

const Filter = styled.div`
    display: flex;
    flex-direction: column;
    

`

const TitleFilter = styled.h3`

`

const SearchProduct = styled(Link)`
    display: flex;
    flex-direction: column;
    
`
const Product = styled.div`
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

const Search = () => {
    
    return(
        <SearchSection>
            <SearchResult>Resultados encontrados para “papas a la francesa”: 12</SearchResult>
            <SearchContent>
                <FilterContent>
                    <TitleSection>Filtrar</TitleSection> 
                    <Filter>
                        <TitleFilter>Tipo de comida</TitleFilter>
                        <FormGroup>
                            <FormControlLabel label="Mexicana" control={<Checkbox/>} />
                            <FormControlLabel label="Colombiana" control={<Checkbox/>} />
                        </FormGroup>
                    </Filter>
                </FilterContent>
                <SearchProduct>
                    <Product>
                        <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                        <ContentProduct>
                            <TitleProduct>Tacos al pastor con una tajada de limon pajarito</TitleProduct>
                            <PriceProduct>$13000</PriceProduct>
                            <AvailabilityProduct>Disponible</AvailabilityProduct>
                            <TypeFoodProduct>Mexicana</TypeFoodProduct>
                        </ContentProduct>
                    </Product>
                    <Product>
                        <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                        <ContentProduct>
                            <TitleProduct>Tacos al pastor con una tajada de limon pajarito</TitleProduct>
                            <PriceProduct>$13000</PriceProduct>
                            <AvailabilityProduct>Disponible</AvailabilityProduct>
                            <TypeFoodProduct>Mexicana</TypeFoodProduct>
                        </ContentProduct>
                    </Product>
                </SearchProduct>
            </SearchContent>
        </SearchSection>
    )
}


export default Search;