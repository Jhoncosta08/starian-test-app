# Change Log
Todas as alterações relevantes deste projeto serão documentadas neste arquivo.

O objetivo do changelog é manter um histórico transparente e organizado de melhorias, correções de bugs e não conformidades.

Isso facilita a comunicação entre desenvolvedores, usuários e demais envolvidos no sistema.


---

# Release - (1.0.0)

>  Componentes Reutilizáveis
>*  Adição do common button, que é o botão generico global.
>*  Adição do common table, que é a tabla generica global, ja com paginação, sorting e afins.
>*  Adição do common spinner, que é o spinner simples global.
>*  Aplicação do header do sistema, feito setorizado dentro de components
>*  Adição do toastr service
>*  Criado um modal service personalizado sem instalação de bibliotecas externas, ou seja, mais rápido e sem dependências.

>  Tela de produtos
>*  Adição da listagem de produtos.
>*  Adição do service de produtos com o CRUD completo usando a fakeApi de produtos.
>*  Adição do redirecionamento para tela de novo/detalhes do produto.
>*  Adição de modal e toast globalmente.
>*  Adição da modal de confirmação.
>*  Adição da ação de excluir em combinação com a modal de confirmação.
>*  Adição de responsividade.

>  Tela de detalhes de produtos
>*  Adição do formulário reativo, que se molda tanto para adição quanto para alteração.
>*  Adição da lógica de editar/salvar ao submeter o form

>  Outros itens
>*  Aplicação de i18n para internacionalização do sistema.
>*  Aplicação de lint para clean code.
>*  Separado os endpoints do sistema na pasta endpoints.
>*  Aplicado build e run com base no ambiente, bem como configurações personalizadas para ambiente de dev, qa, staging e prod.
>*  Aplicado o roteamento do sistema usando lazyLoading e pré carregamento de módulos
>*  Hosting do sistema via firebase
---
