import { useContext } from "react";

import {
    Container,
    SearchBarContainer,
    MusicsContainer,
    ButtonContainer,
    Button
} from "./styles";

import Music from "../../shared/Music"
import { Context } from "../../context/home";

export default function Home() {
    const {
        charts,
        tracks, 
        albums, 
        artists, 
        handleNextPage, handlePreviousPage, 
        option, setOption,
        setQuery,
        index, handleSubmit
    } = useContext(Context) 
    return (
        <Container>
            <SearchBarContainer onSubmit={(e) => handleSubmit(e)}>
                <input 
                disabled={option==="Charts" || option===""} 
                onChange={(e) => setQuery(e.target.value)} 
                type="text" 
                placeholder="Procure suas músicas, albums e artistas  ->" />
                <select onChange={(e) => setOption(e.target.value)}>
                    <option>Charts</option>
                    <option>Título</option>
                    <option>Álbum</option>
                    <option>Artista</option>
                </select>
                <button>Search!</button>
            </SearchBarContainer>
            <MusicsContainer>
                    { option === "Título"
                        ? tracks.map((result: any, index: number) => result(
                            <Music
                                key= {index}
                                type="home"
                                music= {result}
                                id={result.id}
                                title={result.title}
                                preview={result.preview}
                                img={result.album.cover_medium}
                                artistName={result.artist.name}
                                link={result.link}
                                active={true}
                            />    
                        ))
                        : option === "Álbum" 
                            ? albums.map((result: any, index: number) => (
                                <Music
                                    key= {index}
                                    type="home"
                                    id={result.id}
                                    title={result.title}
                                    preview=""
                                    img={result.cover_medium}
                                    artistName={result.artist.name}
                                    link={result.link}
                                    active={false}

                                />    
                            ))
                            : option === "Artista"
                                ? artists.map((result: any, index: number) => (
                                    <Music
                                        key= {index}
                                        type="home"
                                        id={result.id}
                                        title={result.name}
                                        preview=""
                                        img={result.picture_medium}
                                        artistName={result.name}
                                        link={result.link}
                                        active={false}

                                    />    
                                ))
                                : charts.map((result: any, index: number) => (
                                    <Music
                                        key= {index}    
                                        music= {result}
                                        type="home"
                                        id={result.id}
                                        title={result.title}
                                        preview={result.preview}
                                        img={result.album.cover_medium}
                                        artistName={result.artist.name}
                                        link={result.link}
                                        active={true}
                                    />    
                                ))

                    }

            </MusicsContainer>
            <ButtonContainer>
                <Button active={index===0} onClick={() => handlePreviousPage()}>Back</Button> 
                <Button onClick={() => handleNextPage()}>Show more</Button>
            </ButtonContainer>
        </Container>
    )
}