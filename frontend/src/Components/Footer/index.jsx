import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Logo";


const Position = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #E26D6D;
    padding: 1rem 4rem;
    align-items: center;
    margin-top: auto;

`

const LinkGroup = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 10px;
    max-height: 100px;
    padding: 1rem;
    column-gap: 50px;
`

const Redes = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;

`





const Footer = () => {
    return(
        <Position>
            <LinkGroup>
                <Link to={"/who"}>Quienes somos</Link>
                <Link to={"/PQRS"}>PQRS</Link>
                <Link to={"/contact"}>Contactenos</Link>
                <Link to={"/privacy"}>Privacidad</Link>
                <Link to={"/term"}>Terminos y condiciones</Link>
                <Link to={"/FAQ"}>Ayuda</Link>
            </LinkGroup>
            <Redes>
                <Link to={"https://www.facebook.com/"}><Logo src="facebook.png"></Logo></Link>
                <Link to={"https://x.com/"}><Logo src="twiter.png"></Logo></Link>
                <Link to={"https://www.youtube.com/"}><Logo src="youtube.png"></Logo></Link>
            </Redes>
        </Position>
    );


}

export default Footer