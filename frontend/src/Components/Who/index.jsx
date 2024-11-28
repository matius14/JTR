import { Divider } from "@mui/material";
import styled from "styled-components";

const WhoSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    gap: 2rem;
`
const WhoSectionTitle = styled.h2`
    
    text-align: center;
`
const WhoSectionDescription = styled.h4`
    
    
`
const WhoMission = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
const WhoMissionTitle = styled.h2`
    

`
const WhoMissionDescription = styled.h4`
    
    

`
const WhoVision = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

`
const WhoVisionTitle = styled.h2`
    
`
const WhoVisionDescription = styled.h4`
    
    
`

const Who = () =>{
    return(
        <WhoSection>
            <WhoSectionTitle>Quienes somos</WhoSectionTitle>
            <WhoSectionDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequaA </WhoSectionDescription>
            <WhoMission>
                <WhoMissionTitle>Mision</WhoMissionTitle>
                <WhoMissionDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequaA </WhoMissionDescription>
            </WhoMission>
            <Divider sx={{width:'80%'}}/>
            <WhoVision>
                <WhoVisionTitle>Vision</WhoVisionTitle>
                <WhoVisionDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequaA </WhoVisionDescription>
            </WhoVision>
        </WhoSection>
    );




}


export default Who;