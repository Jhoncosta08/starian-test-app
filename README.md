# Gerenciador de Produtos

## Sobre o projeto
>Esse projeto é um web app em Angular focado em gerenciamento de produtos, implementando um CRUD completo (listar, visualizar/detalhar, criar e editar) 
> consumindo uma Fake API de produtos (com campos como id, title, price, description, category, image). Ele tem uma UI moderna 
> e simples (com telas como listagem e formulário de detalhes do produto), suporte a i18n via ngx-translate (ex.: pt-BR/en-US), 
> componentes e serviços usando injeção via inject(), além de organização típica de SPA com rotas (ex.: rotas de auth vs área principal) 
> e build/deploy pensado para ambientes (dev/qa/stg/prod) e publicação via Firebase.

## URL do projeto:
[Gerenciador de Produtos](https://lol-guide-web.web.app)

## As principais tecnologias usadas no projeto
>* Este projeto foi feito com [Angular CLI](https://github.com/angular/angular-cli) version 20.3.0.
>* Este projeto conta com o [Bootstrap](https://getbootstrap.com) version 5.3.8
>* Este projeto conta com o [bootstrap icons](https://icons.getbootstrap.com/) version 1.13.1
>* Este projeto conta com o [@ngx-translate/core](https://www.npmjs.com/package/@ngx-translate/core) version 17.0.0
>* Este projeto conta com o [@ngx-translate/http-loader](https://www.npmjs.com/package/@ngx-translate/http-loader) version 17.0.0
>* Este projeto conta com o [Firebase](https://firebase.google.com/) version 12.6.0
>* Este projeto conta com o [ngx-mask](https://www.npmjs.com/package/ngx-mask) version 20.0.3
>* Este projeto conta com o [ngx-toastr](https://www.npmjs.com/package/ngx-toastr) version 19.1.0

## Sobre o Bootstrap
>Para padronização, boas práticas e responsividade, ao desenvolver novas páginas, pense na estrutura de linhas e colunas seguindo o padrão de grade (grid).

**Exemplo:**

| Classe padrão grid | Descrição                                                                          |
|:-------------------|:-----------------------------------------------------------------------------------|
| `.container`       | Container com espaçamento nas laterais (width: 1200px).                            |
| `.container-fluid` | Container sem espaçamento nas laterais (width: 100%).                              |
| `.row`             | Div única, deve ser usada como div pai que terá de 1 a 12 divs filhas do tipo col. |
| `.col`             | Div única, deve ser usada como div pai que terá de 1 a 12 divs filhas.             | 

>***O padrão mostrado acima na tabela apresenta a estrutura das páginas HTML do projeto; novas páginas devem seguir esse padrão.***

**Exemplo de página com grid**

~~~html
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1>Page title</h1>
    </div>
  </div>
  
  <div class="row">
    <div class="col">
      <p>First container</p>
    </div>
    <div class="col">
      <p>Second container</p>
    </div>
  </div>
</div>
~~~

## Bootstrap componentes
>Você pode ver os componentes disponíveis para usar Bootstrap e ng-bootstrap clicando nos links abaixo:
>* [bootstrap components](https://getbootstrap.com/docs/5.3/components)

## Modularização
> O projeto inteiro é modularizado: cada componente tem seu próprio módulo. Standalone componentes,
> cada componente é um modulo e dentro de seu arquivo .TS tem os imports,
> e só são chamados quando necessário; isso evita carregamento inicial extra e importações infinitas de módulos no sistema.

## Padrão de nome de arquivos
| Regra de nome | Padrão de nome                                                  |
|:--------------|:----------------------------------------------------------------|
| Nome simples  | `name.ts` / `name.html` / `name.css`                            |
| Nome composto | `compound-name.ts` / `compound-name.html` / `compound-name.css` |
| Diretivas     | `name.directive.ts` / `compound-name.directive.ts`              |
| Serviços      | `name.service.ts` / `compound-name.service.ts`                  | 
| Models        | `name.model.ts` / `compound-name.model.ts`                      | 
| Guards        | `name.guard.ts` / `compound-name.guard.ts`                      | 

## Como clonar e configurar o projeto
> - [x] Clone o projeto, use o código: `git clone <project-url>` para clonar o projeto.
> - [x] Instale os pacotes npm, use o código: `npm i` para instalar os pacotes.
> - [x] Execute o projeto, use o código: `npm run dev` para rodar o projeto na configuração de DEVELOPMENT.
> - [x] Execute o projeto, use o código: `npm run qa` para rodar o projeto na configuração de QA.
> - [x] Execute o projeto, use o código: `npm run stg` para rodar o projeto na configuração de STAGING.
> - [x] Execute o projeto, use o código: `npm run prod` para rodar o projeto na configuração de PRODUCTION.
> - [x] Para desenvolvedores o `npm run dev` é recomendado, pois prioriza build e refresh.

## Servidor
> Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de código-fonte.

## Como fazer o build por ambiente
> - [x] O projeto conta com configurações personalizadas por ambiente.
> - [x] Para build do sistema, use o comando: `npm build-dev` para buildar o sistema em configuração DEVELOPMENT.
> - [x] Para build do sistema, use o comando: `npm build-qa` para buildar o sistema em configuração QA.
> - [x] Para build do sistema, use o comando: `npm build-stg` para buildar o sistema em configuração STAGING.
> - [x] Para build do sistema, use o comando: `npm build-prod` para buildar o sistema em configuração PRODUCTION.
> - [x] Uma vez o build feito, vai criar a pasta `dist`, ai é só rodar o comando `firebase deploy` / (Autênticação é necessária!)

## Preview app
![image](https://github.com/Jhoncosta08/starian-test-app/blob/master/src/assets/images/previews/preview-one.jpg)
![image](https://github.com/Jhoncosta08/starian-test-app/blob/master/src/assets/images/previews/preview-two.jpg)

### Observação sobre Login
>O fluxo de login/autenticação não foi implementado porque não fazia parte do escopo funcional exigido para este teste, 
> que era entregar um CRUD completo de produtos consumindo a Fake API. Como essa API não fornece endpoints reais de autenticação 
> (login, refresh token, gestão de sessão/roles), qualquer implementação de login aqui seria necessariamente simulada (mock) ou 
> dependeria de um backend adicional, o que desviaria o foco do objetivo principal e aumentaria o tempo/complexidade sem agregar 
> valor direto aos critérios de avaliação. Por isso, a decisão foi concentrar o esforço em arquitetura, UX/UI, rotas, serviços, 
> validações, i18n e qualidade do CRUD, deixando autenticação como uma extensão futura caso o projeto evolua para uma API com suporte real a segurança.

