import { Container } from "./styles"

import { FaLinkedinIn, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa"
import { MdEmail } from "react-icons/md"


export default function Footer(){

    const ano = new Date().getFullYear();

    return (
        <Container>
            <div className="left">
                <strong>&#169; {ano} Matheus Rosa <em>Projeto feito para teste</em></strong>
                
            </div>
            <div className="right">
                <a href="https://www.linkedin.com/in/matheeusrosa/" target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
                <a href="https://www.instagram.com/orosamatheus/"target="_blank" rel="noreferrer"><FaInstagram/></a>
                <a href="https://github.com/orosamatheus"target="_blank" rel="noreferrer"><FaGithub/></a>
                <a href="https://twitter.com/orosamatheus"target="_blank" rel="noreferrer"><FaTwitter/></a>
                <a href="mailto:matheusrosa.la@gmail.com"target="_blank" rel="noreferrer"><MdEmail/></a>
            </div>
        </Container>
    )
}
