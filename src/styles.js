import styled from "styled-components";
import createGlobalStyle from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`;

export const Mobile = styled.body`

@media (max-width: 768px) {
        .lacrei-saude{
            display: none !important; 
        }
    }
`

export const Head = styled.header`
    width: 100%;
    height: 50px;
    align-items: center;
    margin: 10px;
    padding: 5px;
    display: flex;
    justify-content: space-between;

   
`;

export const Logo = styled.div`
    display: flex;
    color: #006C4E;
    align-items: center;
`;

export const Logotipo = styled.img`
    margin-right: 10px;
    width: 40px;
    height: 40px;
`

export const Button = styled.button`
    margin-right: 20px;
    padding: 10px;
    border-radius: 20px;
    background-color: #5800C8;
    border: none;
    color:#FFFFFF;
    cursor: pointer;
    font-weight: 600;

    &:hover{
    transform: scale(1.1);
    transition: 0.5s;
    }

    &:active{
    transform: scale(0.95);
    }
`;

export const Main = styled.main`
    text-align: center;
    width: 100%;
    min-height: 100vh;
    background-color: #F3F0EF;
    border-radius: 20px;
    padding-bottom: 20px;
`

export const Titulo = styled.h1`
    display: inline-block;
    padding: 0 10px;
    margin: 50px 0;
    border-radius: 20px;
    color:#006C4E;
    background: fixed;
    background-color: #BDFFDF;
    background-position: center;
    text-align: center;
`

export const Subtitulo = styled.h2`
    font-size: 50px;

    span{
        color: #5800C8;
    }
`

export const Paragrafo = styled.p`
    font-size: 30px;
    text-align: center;
    margin: 0 20px;
`

export const Profissionais = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: center;
    background-color: #FFFFFF;
    gap: 12px; /*espaço entre os itens*/
    max-width: 550px;
    margin: auto;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 0 15px #ADABAA;

    label {
    font-size: 20px;
    margin-top: 10px;}

    select{
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    padding: 5px;
    outline: none;}

    input{
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    padding: 5px;
    outline: none;
    border: 1px solid;
}
`;

export const BuscarProfissional = styled.button`
    padding: 10px;
    border-radius: 15px;
    color: #FFFFFF;
    background-color: #5800C8;
    border: none;
    cursor: pointer;
    font-weight: 600;

    &:hover{
    transform: scale(0.95);
    transition: 0.5s;
    }

    &:active{
    transform: scale(1.0);
    }
`

export const VerProfissionais = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: initial;
    margin-bottom: 20px;
`

export const ListaProfissionais = styled.section`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
    padding: 30px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const CardProfissional = styled.div`
    padding: 20px;
    border-radius: 16px;
    background-color: #FFFFFF;
    box-shadow: 0 0 15px #ADABAA;
    text-align: center;

    img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 50%;
        
    }

    button {
        margin: 5px;
        padding: 10px 16px;
        border: none;
        border-radius: 20px;
        background-color: #5800C8;
        color: #FFFFFF;
        cursor: pointer;
        font-weight: 600;

        &:hover{
    transform: scale(1.1);
    transition: 0.5s;
    }

    &:active{
    transform: scale(0.95);
    }
    }
`;

export const Footer = styled.footer`
    margin: 20px;
`

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 20px;
`

export const H3 = styled.h3`
font-size: 25px;
    margin-top: 20px;
    margin-bottom: 5px;
    color: #000000;
`

export const Link = styled.a`
text-decoration: none;
    color: #000000;
    font-size: 20px;

    &:nth-of-type(7){
    margin-bottom: 50px;}
`

export const Imagem = styled.img`
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 25%;
        text-align: center;
        margin-top: 20px;

        @media (max-width: 768px) {
        width: 200px;
        height: 200px;

    }
`

export const Perfil = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 20px 30px 20px;

     @media (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
        
    }
    
`

export const PerfilDescricao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const Paragrafo2 = styled.p`
    margin: 10px 20px;
    width: 50%;
    text-align: justify;
    font-size: 20px;
`

export const Titulo2 = styled.h1`

`

export const PropositoDeCuidado = styled.div`
    background-color: #ffffff;
    text-align: initial;
    width: 90%;
    border-radius: 25px;
    margin: 5%;
    padding: 1%;

    & span{
        background-color: #23a466;
        width: 10px;
    }

    & p{
        text-align:justify;
    }
`

export const AreaDeAtuação = styled.div`
    background-color: #ffffff;
    text-align: initial;
    width: 90%;
    border-radius: 25px;
    margin: 5%;
    padding: 1%;

    & p{
        margin: 15px;
    }

    & p:nth-child(2){
        font-size: 25px;
    }
`

export const ListaAtuacao = styled.section`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    

    & div{
        margin: 0 10px;
        background-color: #F3F0EF;
        padding: 15px;
        border-radius: 10px;

    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const AreaDeExperiencia = styled.div`
    background-color: #ffffff;
    text-align: initial;
    width: 90%;
    border-radius: 25px;
    margin: 5%;
    padding: 1%;

    & p{
        margin: 15px;
    }

    & p:nth-child(2){
        font-size: 25px;
    }
`

export const ListaExperiencia = styled.section`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    

    & div{
        margin: 0 10px;
        background-color: #F3F0EF;
        padding: 15px;
        border-radius: 10px;

    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const AreaDeValores = styled.div`
    background-color: #ffffff;
    text-align: initial;
    width: 90%;
    border-radius: 25px;
    margin: 5%;
    padding: 1%;

    & p{
        margin: 15px;
    }

    & p:nth-child(2){
        font-size: 25px;
    }
`

