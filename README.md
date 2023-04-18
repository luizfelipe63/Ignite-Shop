<h1 align="center">Luiz Felipe - ShopGames :video_game: </h1>

<div align="center">
  <video src="https://user-images.githubusercontent.com/75274860/232853731-ed1e0951-2cda-43e9-8c82-092e8093671b.mp4"/>
</div>

> Acesse o projeto online [AQUI](https://shop-games.vercel.app/)

<br>

## :rocket: Tecnologias utilizadas

<div>
  <a href="https://nextjs.org/">
    <img align="center" alt="luiz-nextjs" height="50" width="50" src="https://skillicons.dev/icons?i=nextjs">
  <a/>  
  &nbsp;
  <a href="https://www.typescriptlang.org/">
    <img align="center" alt="luiz-typescript" height="50" width="50" src="https://skillicons.dev/icons?i=typescript">
  <a/>  
  &nbsp;  
  <a href="https://react.dev/">
    <img align="center" alt="luiz-typescript" height="50" width="50" src="https://skillicons.dev/icons?i=react">
  <a/>
   &nbsp; 
  <a href="https://stitches.dev/">
    <img align="center" alt="luiz-figma" height="50" width="50" src="https://xesque.rocketseat.dev/platform/tech/1663679889933.svg">
  </a>
  &nbsp;  
  <a href="https://www.figma.com/">
    <img align="center" alt="luiz-figma" height="50" width="50" src="https://skillicons.dev/icons?i=figma">
  </a>
  &nbsp;  
  <a href="https://stripe.com/br"> 
    <img align="center" src="https://user-images.githubusercontent.com/86276393/212921259-b6b0f80e-d9ed-4b0e-b17a-34733b507cec.png" height="50" width="50" alt="Stripe icon"/>
  </a>  
</div>

<br>

## :calendar: Etapas 


<table height="548px">
  <tr>
    <td>
      🗹
    </td>
    <td>
      Construir layout no Figma
    </td>
  </tr>
  <tr>
     <td>
      🗹
    </td>
    <td>
      Criar projeto com NextJS
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
       Configurar documento HTML(_document.tsx)
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
     Configuração do Stitches
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Estilos Globais
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Cabeçalho da aplicação
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Estrutura da Home
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Configurando conta no Stripe
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Integração com Stripe
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Passar produtos da aplicação para criar no Stripe
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Estrututa da página de produto(Detalhes)
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Carregar dados do produto requisitado na página Products
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Utilazar SSG nas páginas Home e Product
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Estruuta do modal de sacola de compras
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
     Criação do <code>components/productBag</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      criação do checkout do Stripe
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Estrututa da página de sucesso
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Dados da compra na página de sucesso
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
     Reponsividade da aplicação
    </td>
  </tr>
  <tr>
    <td>
     ☐
    </td>
    <td>
      Botão de adicionar um jogo na sacola(Página de detalhes)
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Traduzir o texto de sobre do jogo(Página de detalhes)
    </td>
  </tr>
  <tr>
    <td>
     ☐
    </td>
    <td>
      Função de pesquisa
    </td>
  </tr>
  <tr>
    <td>
     ☐
    </td>
    <td>
     Filtragem de games
    </td>
  </tr>
  <tr>
    <td>
     ☐
    </td>
    <td>
     Estilização do estado de Loading da aplicação 
    </td>
  </tr>
  <tr>
    <td>
     ☐
    </td>
    <td>
      Função de login de usúario
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Estilizar Scroll
    </td>
  </tr>
</table>
    
<br>    
    
## :round_pushpin: Clonando o Projeto

Para clonar e executar este projeto em seu computador, você precisará do [Git](https://git-scm.com/) e [Node.js v18.12.1](https://nodejs.org/en/) ou superior previamente instalados.<br>
    
Feito isso, no terminal:

```bash
# Clone esse repositório com:
> git clone https://github.com/luizfelipe63/ShopGames
# Entre no repositório com:
> cd ShopGames
```

Estando agora na raiz do projeto, crie o arquivo `.env.local`, que deve conter as seguintes variáveis de ambiente:

```bash
NEXT_URLL=http://localhost:3000

STRIPE_PUBLIC_KEY=
STRIPE_PUBLIC_KEY=

RAWG_KEY=
    
```

Para configurar tais variáveis, você precisará criar um projeto no [Stripe](https://stripe.com/en-br/) e uma conta na [Rawg](https://rawg.io/), 
    
Feito isso:

```bash
# Instale as dependências com:
> npm install
> cd ShopGames
> npm install
# Execute o projeto com:
> npm run dev
> cd ..
> npm run dev
# Feito isso, você já poderá estar acessando o projeto em: http://localhost:3000
```    
<br>    
    
## :punch: Colaboradores

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/luiz-feliperocha/">
        <img src="https://avatars.githubusercontent.com/u/75274860?s=400&u=9e5dc5aad655b35597774819531e14d9bd653775&v=4" width="160px;" alt="Foto do luiz felipe"/><br>
        <sub>
          <b>Luiz Felipe</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
