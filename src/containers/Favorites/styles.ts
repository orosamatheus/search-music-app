import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 150vh;
`
export const MusicContainer = styled.ul`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding-top: 30px;

    @media (min-width:320px) and (max-width:768px) {
        flex-direction: column;
        align-items: center;
    }


`
