import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import  Music from "../../shared/Music"
import {
    Container,
    MusicContainer
} from "./styles"

export default function Favorites() {

    const favorites: any = useSelector((state: RootState) => state.Favorites)
    
    return (
        <Container>
            <MusicContainer>
                { favorites.favorites.map((favorito: any) => (
                    <Music
                    type="favorites"
                    id={favorito.id}
                    title={favorito.title}
                    preview={favorito.preview}
                    img={favorito.album.cover_medium}
                    artistName={favorito.artist.name}
                    link={favorito.link}
                    active={true}
                    music={favorito}
                    />
                )) 
                }
            </MusicContainer>
            
        </Container>
    )
}