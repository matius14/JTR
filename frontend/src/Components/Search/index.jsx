import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";


const SearchSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0 0 2rem;

`

const SearchResult = styled.h4`
    margin: 0 0 2rem 0;
    
`

const SearchContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

`

const FilterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`

const TitleSection = styled.h2`
    
`

const Filter = styled.div`
    display: flex;
    flex-direction: column;
    

`

const TitleFilter = styled.h3`

`

const SearchProduct = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-bottom: 2rem;
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
    gap: 0.25rem;

`

const TitleProduct = styled.h4`
    font-family: 'Inter'
`
const PriceProduct = styled.h4`
    font-family: 'Inter'

`
const AvailabilityProduct = styled.h4`
    font-family: 'Inter'

`
const TypeFoodProduct = styled.h4`
    font-family: 'Inter'

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