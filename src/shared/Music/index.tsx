import { useContext } from "react"
import { Context } from "../../context/home";

import {
    MusicContainer,
    Audio,
    Button

} from "./styles"

interface IMusicProps {
    id: number;
    title: string;
    img: string;
    preview: string;
    type: string;
    artistName: string;
    link: string;
    music?: any;
    active: boolean
}

export default function Music({ id, title, img, preview, type, artistName, link, music, active }: IMusicProps) {
    const { handleLike, handleUnlike } = useContext(Context)
    return (
        <MusicContainer key={id}>
            <a
                target="_blank"
                rel="noreferrer"
                href={link}>
                <h2>{artistName}</h2>
                <img src={img} alt='album' />
            </a>
            <Audio active={active} controls>
                <source src={preview} />
            </Audio>
            <h1>{title}</h1>
            {
                type === "home"
                    ? <Button onClick={() => handleLike(music)} active={active}>Favoritar</Button>
                    : <Button onClick={() => handleUnlike(music)} active={active}>Desfavoritar</Button>
            }
        </MusicContainer>
    )
}