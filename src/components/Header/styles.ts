import styled from "styled-components";


export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    margin: 2rem auto;
    padding: 0 3vw;

    color: #151A39;
    font-family: 'Roboto';
    font-weight: 500;

    span{
        transition:ease-in-out 0.3s;
        :hover {
            background-color:#ffc048;
        }
    }

    @media (min-width:320px) and (max-width:768px) {
        justify-content: space-evenly;
    }

    nav {
        a {
            padding: 1rem;
        }
    }

`

export const Center = styled.div`
    div {
        &.text {
            overflow: hidden;
            letter-spacing: 2px;
            font-size: 2rem;
            font-family: 'Roboto';
            box-sizing: border-box;

            @media (min-width:320px) and (max-width:768px){
                font-size: 1rem;
            }
        }
    }
`

export const Right = styled.div`
    position: absolute;
    right: 100px;
    @media (min-width:320px) and (max-width:768px) {
        position: relative;
        right: 0px;
    }


`