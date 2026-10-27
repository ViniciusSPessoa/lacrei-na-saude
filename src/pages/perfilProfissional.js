import React from 'react';
import { GlobalStyles, Head, Button, Logo, Logotipo, Main, Titulo, Subtitulo, Paragrafo, Paragrafo2, Imagem, Perfil, PerfilDescricao, PropositoDeCuidado, AreaDeAtuação, ListaAtuacao, ListaExperiencia, AreaDeExperiencia, AreaDeValores, Mobile } from '../styles';
import { profissionais } from "../pages/dados-profissionais/dadosProfissionais.js";
import logotipo from "../image/logo.png";
import { useParams } from 'react-router-dom';


function PerfilProfissional() {

    const { id } = useParams();

    const profissional = profissionais.find(
        (item) => String(item.id) === id
    );

    if (!profissional) {
        return <h1>Profissional não encontrado.</h1>;
    }

    return (
        <Mobile>
            <GlobalStyles />
            <Head>

                <Logo>
                    <Logotipo src={logotipo} alt="Logo Lacrei Saúde" />

                    <Titulo className="lacrei-saude">Lacrei Saúde</Titulo>
                </Logo>

                <Button>Encontrar Profissinal</Button>

            </Head>

            <Main>

                <div>

                    <Perfil>

                        <PerfilDescricao>
                            <Subtitulo>{profissional.nome}</Subtitulo>
                            <Paragrafo>{profissional.especialidade}</Paragrafo>
                            <Paragrafo2>{profissional.atendimento}</Paragrafo2>
                        </PerfilDescricao>

                        <div>
                            <Imagem src={profissional.foto} alt={`Foto de ${profissional.nome}`} />
                        </div>

                    </Perfil>

                    <PropositoDeCuidado>
                        <p><span></span>PROPÓSITO DE CUIDADO</p>
                        <Paragrafo>"{profissional.descricao}"</Paragrafo>
                    </PropositoDeCuidado>

                    <AreaDeAtuação>
                        <p>ÁREAS DE ATUAÇÃO</p>
                        <p>Cuidado especializado para cada etapa de sua jornada</p>
                        <ListaAtuacao>
                            {profissional.servico.map((servico) => (
                                <div key={servico}>{servico}</div>
                            ))}
                        </ListaAtuacao>
                    </AreaDeAtuação>

                    <AreaDeExperiencia>
                        <p>EXPERIÊNCIA PROFISSIONAL</p>
                        <ListaExperiencia>
                            {profissional.experiencia.map((item) => (
                                <div key={item}>{item}</div>
                            ))}
                        </ListaExperiencia>

                    </AreaDeExperiencia>

                    <AreaDeValores>

                        <div>
                            {profissional.avaliacoes.map((avaliacao) => (<div key={avaliacao}>
                                <p>"{avaliacao.texto}"</p>
                                <p>{avaliacao.autor}</p>
                                <p>•  {avaliacao.data}</p>
                            </div>))}
                        </div>
                    </AreaDeValores>

                    <div className="botao-agendamento">
                        <Button className="agendar-consulta">Agendar Consulta</Button>
                    </div>

                </div>

            </Main>

        </Mobile>
    )
}

export default PerfilProfissional;