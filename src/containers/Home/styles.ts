import styled from "styled-components";

interface IButtonProps {
    active?: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
 
`
export const SearchBarContainer = styled.form`
    display: flex;
    align-items: center;

    @media (min-width:320px) and (max-width:768px) {
        flex-direction: column;
        justify-content: center;
    }


    input, select{
        width: 360px;
        height: 40px;
        background: #fafafa;
        border: none;
        border-bottom: 2px solid #303240;
        outline: none;
        padding: 10px;
        font-size: 1rem;
        color: #151a39;
        margin-bottom: 10px;

        @media (min-width: 320px) and (max-width:768px) {
            width: 300px;
        }
    }
    select {
        width: 100px;
        margin-left: 15px;
    }
    button {
        width: 200px;
        height: 40px;
        margin-left: 15px;
        cursor: pointer;
        border-radius: 15px;
        border: none;
        outline: none;
        background: #ffc048;
        color: #151A39;
        font-weight: 500;
        :hover {
        transition: 0.3s all ease-in-out;
        filter: brightness(0.8);
        }
    }


`
export const MusicsContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 30px;

    @media (min-width:320px) and (max-width:768px) {
        flex-direction: column;
    }


`
export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
export const Button = styled.div<IButtonProps>`
    display: ${props => props.active ? "none": "flex"};
    align-items: center;
    justify-content: center;
    color: #151A39;
    cursor: pointer;
    width: 300px;
    height: 50px;
    border-radius: 5px;
    border: none;
    outline: none;
    background: #ffc048;
    font-weight: 500;
    margin-right: ${props => props.active ? "0px": "20px"};

    :hover {
        transition: 0.6s all ease-in-out;
        filter: drop-shadow(8px 8px 10px gray);
    }

    @media (min-width:320px) and (max-width:768px) {
        width: 150px;
    }   
`