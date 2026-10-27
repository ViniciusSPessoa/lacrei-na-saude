# Lacrei Saúde

Aplicação web desenvolvida com React para facilitar a consulta de profissionais da área da saúde, com páginas de perfil individuais e uma interface organizada e intuitiva.

## Sobre o projeto

O **Lacrei Saúde** é um projeto de desenvolvimento front-end criado com o objetivo de facilitar a visualização de profissionais da saúde e de suas informações de atendimento.

A aplicação permite visualizar uma lista de profissionais e acessar páginas individuais com informações específicas de cada um, proporcionando uma navegação organizada e uma experiência simples para o usuário.

O projeto também tem como objetivo aplicar e aprimorar conhecimentos em desenvolvimento web, componentização, organização de código e criação de interfaces utilizando React.

## Funcionalidades

- **Listagem de profissionais:** exibição de profissionais da saúde em cards com informações individuais.
- **Perfis individuais:** cada profissional possui uma página própria com informações específicas.
- **Navegação entre páginas:** acesso aos perfis dos profissionais por meio da interface.
- **Informações de atendimento:** apresentação de especialidades e características do atendimento de cada profissional.
- **Interface personalizada:** estilização dos elementos e componentes para manter a identidade visual da aplicação.

> **Em desenvolvimento:** a funcionalidade de busca e filtragem de profissionais ainda não está implementada.

## Tecnologias utilizadas

- **React:** construção de interfaces e componentes reutilizáveis.
- **JavaScript (ES6+):** implementação da lógica da aplicação e manipulação de dados.
- **Styled-components:** estilização dos componentes utilizando CSS-in-JS.
- **HTML5:** estruturação dos elementos da interface.
- **CSS3:** personalização dos estilos e do layout.
- **Yarn:** gerenciamento de dependências e execução de scripts.
- **Git e GitHub:** versionamento e organização do código-fonte.

## Estrutura do projeto

A organização dos arquivos pode variar conforme a estrutura atual da aplicação. Uma estrutura de referência é apresentada abaixo:

```text
lacrei-na-saude/
├── public/
├── src/
│   ├── image/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   ├── index.js
│   └── styles.js
├── package.json
├── yarn.lock
└── README.md
```

## Como executar o projeto

Atualmente, a aplicação é executada localmente, em ambiente de desenvolvimento.

### Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/) (opcional, caso já tenha os arquivos do projeto)

### 1. Clone o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
```

Substitua `URL_DO_SEU_REPOSITORIO` pelo endereço real do repositório no GitHub.

### 2. Acesse a pasta do projeto

```bash
cd lacre-saude
```

### 3. Instale as dependências

```bash
yarn install
```

### 4. Inicie a aplicação

```bash
yarn start
```

Após iniciar, acesse no navegador o endereço exibido no terminal. Normalmente, será:

http://localhost:3000

Caso essa porta esteja ocupada, o ambiente poderá indicar outra porta disponível.

## Conceitos aplicados

Durante o desenvolvimento, são trabalhados conceitos importantes do ecossistema React e do JavaScript, incluindo:

- Criação e reutilização de componentes.
- Organização de páginas e estilos.
- Renderização dinâmica de listas com arrays e objetos.
- Passagem de dados entre componentes.
- Criação de páginas de perfil individuais para profissionais.
- Navegação entre diferentes páginas da aplicação.
- Estilização de componentes com styled-components.
- Separação entre estrutura, lógica e apresentação da interface.

## Próximas melhorias

Algumas melhorias planejadas para a evolução do projeto incluem:

- Implementar a busca e a filtragem de profissionais.
- Aprimorar a responsividade para dispositivos móveis.
- Desenvolver a funcionalidade de agendamento de consultas.
- Implementar testes automatizados.
- Integrar uma API para obter os dados dos profissionais.
- Desenvolver um back-end e integrar um banco de dados.
- Publicar a aplicação para acesso pela internet.

## Status do projeto

**Em desenvolvimento.**

A aplicação possui uma interface para visualização de profissionais e navegação para páginas de perfil individuais. Novas funcionalidades estão sendo planejadas e implementadas progressivamente.

## Autor

**Vinícius Souza Pessoa**

Estudante de Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento web e aprimoramento de habilidades em JavaScript e React.
