import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    margin: 3rem auto;
    padding: 0 3vw;
    font-size: 1rem;
    font-family: 'Roboto';
    color: #303240;

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    bottom: 0px;

    em {
        font-family: sans-serif;
        font-size: 10px;
    }
    @media (min-width: 320px) and (max-width:768px) {
        font-size: 0.8rem;
        margin-top: 150px;
    }
    div{
        &.right{
            a{
                padding: 0.5rem;
                opacity: 1;

                :hover {
                    svg {
                        color: #ffc048;
                        transform: scale(1.5);
                        transition: transform 0.45s;
                    }
                }
            }
        }
    }
`