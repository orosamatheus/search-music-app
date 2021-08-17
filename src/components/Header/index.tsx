
import {
    Container,
    Center,
    Right,
 
} from "./styles"


export default function Header() {

    return (
        <Container>
            <Center>
                <a href="/">
                    <div className="text">
                        Music App
                    </div>
                </a>
            </Center>
            <Right>
                <nav>
                    <a
                        href='/favorites'
                    >
                        <span>Favoritos</span>
                    </a>
                </nav>
            </Right>
        </Container>
    )
}