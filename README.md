#### O projeto
Criando uma plataforma em React para simular uma plataforma para streamer de video. A ideia é exibir as funcionalidades presentes no **Twitch**. Esse projeto servirá como um projeto sandbox a fim de treinar e testar libs do React/Redux.


#### OAuth
Esse projeto utiliza OAuth 2 como meio de autenticação. Você pode ler um pouco mais sobre essa implementação [aqui.](https://developers.google.com/identity/protocols/OAuth2UserAgent). Deixei disponível neste projeto a chave de acesso para a minha API no Google Auth.


#### Redux-form
O redux-form é uma lib que facilitou muito a minha vida ao lidar com formulários dentro do React. Você pode ler um pouco mais sobre o redux-form [Redux-form.](https://redux-form.com). 
Atualmente temos inúmeras opções para solucionar problemas relacionados a utilização de React em formulários, essa discussão [aqui](https://github.com/frontendbr/forum/issues/929) levanta pontos bem interessantes sobre o que usar/se deve ser usado.


#### JSON Server
Uma opção para validações e mockups é utilizar o JSON Server. O JSON Server vai te auxiliar servindo como uma API Rest e servirá como uma maneira simples para armazenar dados em um JSON. Com ele, é possível focar o desenvolvimento deste projeto apenas no front-end sem a necessidade de um back-end. Futuramente irei migrar esse carinha para uma API verdadeira.


#### React Portals e Modais
O React Portals vai te auxiliar a rendeizar Modais fora do componente principal de seu SPA. Quando esse evento é renderizado, os eventos que acontecem nele são gerenciados pela hierarquia do React Components, em vez da hierarquia definida pela posição DOM do elemento. Você pode ler um pouco mais nesse link [aqui](https://www.freecodecamp.org/news/how-to-render-modals-in-react-bbe9685e947e/). 
[PS: Não use modal para criar formulários ;)]


___ 

#### Como executar

1. Clone o repositório
2. Instale os módulos utilizados no projeto client 
``` cd client ```
``` $ npm install --save ```
3. Instale os módulos utilizados no projeto api 
``` cd api ```
``` $ npm install --save ```
4. Suba o 'servidor' de api, no projeto api
``` cd api ```
``` $ npm start ```
5. Suba o projeto client
``` cd client ```
``` $ npm start ```
