import styled from "styled-components";

interface IProps {
    active?: boolean
}

export const MusicContainer = styled.li`
    width: 25%;
    height: 500px;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    h1, h2 {
        font-size: 1rem;
        text-align: center;
        color: #151A39;
        font-weight: bold;
    }

    h1 {
        font-family: 'Nanum Gothic';
        margin-top: 10px;
        font-size: 1rem;
    }

    button {

    }
`
export const Audio = styled.audio<IProps>`
    width: 250px;
    margin-top: 5px;
    background-color:#ffc048;
    display: ${props => props.active ? "flex": "none"};

    ::-webkit-media-controls-panel {
        background-color: #ffc048;
        color: #ffc048;
    }
`
export const Button = styled.button<IProps>`
    display: ${props => props.active ? "flex": "none"};
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 250px;
    height: 40px;
    border-radius: 15px;
    outline: none;
    margin-top: 15px;
    border: 1px #fafafa;
    font-size: 1rem;
    color: #151A39;
    background: #ffc048;
    :hover {
        transition: all ease 0.3s;
        filter: brightness(0.75)
    }
`