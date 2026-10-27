import React from 'react';
import { GlobalStyles, Head, Logo, Logotipo, Button, Main, Titulo, Subtitulo, Paragrafo, Profissionais, VerProfissionais, BuscarProfissional, ListaProfissionais, CardProfissional, Links, H3, Link, Mobile } from "../styles";
import logotipo from "../image/logo.png";
import { profissionais } from "./dados-profissionais/dadosProfissionais.js";
import { useNavigate } from 'react-router-dom';


function Home() {

    const navigate = useNavigate();

    function irParaSessao(id) {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    return (

        <Mobile>
            <GlobalStyles />
            <Head>

                <Logo>
                    <Logotipo src={logotipo} alt="Logo Lacrei Saúde" />

                    <Titulo className="lacrei-saude">Lacrei Saúde</Titulo>
                </Logo>

                <Button onClick={() => irParaSessao("Profissionais")}>Encontrar Profissinal</Button>

            </Head>

            <Main>
                <Titulo>
                    Comunidade LGBTQIAPN+ & Aliadas
                </Titulo>

                <Subtitulo>Encontre atendimento <br /><span>inclusivo e seguro</span>.</Subtitulo>

                <Paragrafo>Conectamos você a profissionais de saúde comprometidos com o respeito à diversidade e o acolhimento. Seu
                    bem-estar é nossa prioridade.</Paragrafo>

                <Profissionais id="Profissionais">
                    <label id="especialidade">Especialidade</label>
                    <select name="" id="">
                        <option value="Selecione uma especialidade">Selecione uma especialidade</option>
                        <option value="Psicologia">Psicologia</option>
                        <option value="Nutrição">Nutrição</option>
                        <option value="Odontologia">Odontologia</option>
                        <option value="Ginecologia e Obstetricia">Ginecologia e Obstetrícia</option>
                        <option value="Endocrinologia">Endocrinologia</option>
                        <option value="Dermatologia">Dermatologia</option>
                        <option value="outros">Outros</option>
                    </select>

                    <label id="localizacao">Localização</label>
                    <input type="text" placeholder="Cidade ou CEP"></input>

                    <BuscarProfissional>Buscar Profissional</BuscarProfissional>
                </Profissionais>

                <VerProfissionais>
                    <Titulo>Profissionais Recomendados</Titulo>

                </VerProfissionais>

                <ListaProfissionais>
                    {profissionais.map((profissional) => ((<CardProfissional key={profissional.nome}>

                        <img
                            src={profissional.foto}
                            alt={`Foto de ${profissional.nome}`}
                        />

                        <H3>✔ Verificado</H3>

                        <p>
                            <strong>{profissional.nome}</strong>
                            <br />
                            {profissional.especialidade}
                        </p>

                        <H3>{profissional.selo}</H3>

                        <button
                            type="button"
                            className="button-perfil"
                            onClick={() => navigate(`/perfil/${profissional.id}`)}
                        >
                            Ver Perfil
                        </button>


                    </CardProfissional>)))}

                </ListaProfissionais>


            </Main>

            <footer>
                <Logo>
                    <Logotipo src={logotipo} alt="Logo Lacrei Saúde" />


                    <Titulo>Lacrei Saúde</Titulo>
                </Logo>

                <Paragrafo><i>Nossa missão é democratizar o acesso à saúde humanizada para a comunidade LGBTQIAPN+, conectando pacientes
                    com profissionais que acolhem a diversidade.</i></Paragrafo>

                <Links>
                    <H3>Institucional</H3>
                    <Link href="#" className="sobre-nos">Sobre Nós</Link>
                    <Link href="#" className="nossa-curadoria">Nossa Curadoria</Link>
                    <Link href="#" className="carreiras">Carreiras</Link>
                    <Link href="#" className="contato">Fale Conosco</Link>

                    <H3>Para Profissionais</H3>
                    <Link href="#" className="cadastro">Cadastre-se</Link>
                    <Link href="#" className="treinamentos">Treinamentos</Link>
                    <Link href="#" className="portal-parceiro">Portal do Parceiro</Link>
                </Links>
            </footer>

        </Mobile>
    )
}

export default Home;

