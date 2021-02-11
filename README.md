# Mettzer Code Challenge

Projeto desenvolvido para o desfio técnico da [Mettzer](https://www.mettzer.com/).

![Mettzer code Challenge index](/ReadMeImg/index.png)
![Mettzer code Challenge form](/ReadMeImg/form.png)
![Mettzer code Challenge search results](/ReadMeImg/search-results.png)

## Especificações do desafio

Implementar uma aplicação frontend utilizando React, que oferece uma interface web com as seguintes funcionalidades:

1. Deve ser possível buscar por artigos científicos na API do portal [CORE](https://core.ac.uk).
   Exibir na listagem:
   - authors
   - type
   - title
   - description
   - urls (clicáveis)
2. Deve ser possível marcar/desmarcar os resultados da pesquisa como favorito.
3. Deve ter uma listagem com os artigos favoritados e ela deve estar disponível mesmo que a janela do navegador seja fechada e aberta novamente.
4. As listagens, tanto da pesquisa quanto dos favoritos, devem ter paginação

Implementar testes automatizados para os componentes criados.
Utilizar React-Router com rotas específicas para cada operação.

O método de armazenamento das informações fica a critério do candidato, podendo ser um back-end as a service, um back-end de implementação própria ou mesmo utilizando o localStorage.

Você pode conferir o resultado em [mettzer-code-challenge.vercel.app](https://mettzer-code-challenge.vercel.app/)

## Técnologias utilizadas

- [ReactJS:](https://reactjs.org/) Para criar interfaces resposivas e reativas
- [Create React App:](https://github.com/facebook/create-react-app) Para facilitar o setup de bundlers e loaders.

- [Typescript:](https://www.typescriptlang.org/): Para aumentar a produtividade e evitar possíveis erros durante o desenvolvimento.
- [React-icons:](https://react-icons.github.io/react-icons/) Para uma facil iconografia.
- [Axios:](https://github.com/axios/axios) Para as requisições http.
- [react-router-dom:](https://reactrouter.com/) Para lidar com as rotas da aplicação.
- [Styled-components:](https://styled-components.com/) Para uma estilização mais dinâmica.
- [LocalStorage:](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/Window.localStorage) Como um banco de dados fake.

## Setup do projeto

Para rodar o projeto você deve ter instalado o Node v15.3.0 ou mais atual.

1. Clone esse repositório do github.

2. crie um arquivo .env.local e seguindo o exemplo do arquivo .env.local.example coloque sua api key do core.
   - Link para solicitar a [apiKey](https://core.ac.uk/services/api/)
   - Link para a [documentação](https://core.ac.uk/docs/#!/all/search)
3. Rode o comando:

```bash
yarn
```

ou

```bash
npm i
```

Agora é só acessar o [http://localhost:3000/]() e começar a codar.

Você pode acessar rotas usando query params

- author
- title
- page

Como nesse exemplo [https://mettzer-code-challenge.vercel.app/core-search?authors=marcio&title=beer&page=1](https://mettzer-code-challenge.vercel.app/core-search?authors=marcio&title=beer&page=1)

### Aproveite.
