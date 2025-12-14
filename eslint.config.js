// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    // Aplica essas regras para todos os arquivos TypeScript
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
    },
    extends: [
      eslint.configs.recommended,                        // Regras recomendadas do ESLint
      ...tseslint.configs.recommended,                   // Regras recomendadas para TypeScript
      ...tseslint.configs.stylistic,                     // Regras de estilo para manter o código padronizado
      ...angular.configs.tsRecommended,                  // Regras recomendadas do Angular para arquivos TypeScript
    ],
    processor: angular.processInlineTemplates,           // Permite processar templates inline do Angular
    rules: {

      // Impede que @Output() use nomes iniciados com "on" (ex: onClick)
      '@angular-eslint/no-output-on-prefix': 'error',

      // Sugere inject() no lugar de constructor injection
      '@angular-eslint/prefer-inject': 'warn',

      // Exige o uso de aspas simples para strings
      quotes: ["error", "single", { allowTemplateLiterals: true }],

      // Evita o uso de console.log no código, mas permite console.warn e console.error
      "no-console": ["warn", { allow: ["warn", "error", "table"] }],

      // Reforça o uso de await ou .then para garantir o tratamento de Promises
      "@typescript-eslint/no-floating-promises": "warn",

      // Impede o uso indevido de Promises em lugares onde valores imediatos são esperados (ex: ngIf)
      "@typescript-eslint/no-misused-promises": "warn",

      // Exige que construtores de tipo genérico especifiquem os tipos diretamente no construtor
      "@typescript-eslint/consistent-generic-constructors": "warn",

      // Emite aviso caso funções não tenham o tipo de retorno explícito declarado
      "@typescript-eslint/explicit-function-return-type": "warn",

      // Força o uso consistente entre 'type' e 'interface' no código
      "@typescript-eslint/consistent-type-definitions": "warn",

      // Define a ordem dos membros de uma classe (ex: static, public, private)
      "@typescript-eslint/member-ordering": "warn",

      // Permite o uso do tipo "any" sem restrições
      "@typescript-eslint/no-explicit-any": "off",

      // Garante que não existam métodos vazios nos ciclos de vida do Angular
      "@angular-eslint/no-empty-lifecycle-method": "error",

      // Impede a definição de membros duplicados em uma classe
      "no-dupe-class-members": "error",

      // Exige o uso de 'const' quando o valor não é reatribuído
      "prefer-const": "warn",

      // Permite a definição explícita de tipos mesmo quando o TypeScript pode inferir automaticamente
      "@typescript-eslint/no-inferrable-types": "off",

      // Define a convenção de nomenclatura para interfaces, permitindo PascalCase sem o prefixo 'I'
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "interface",
          "format": ["PascalCase"], // Permite o uso do PascalCase sem o prefixo 'I'
          "custom": {
            "regex": "^[A-Z]",   // Garante que o nome da interface começa com letra maiúscula
            "match": true
          }
        }
      ],

      // Define o padrão obrigatório para seletores de diretivas Angular (prefixo app, estilo camelCase)
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],

      // Define o padrão obrigatório para seletores de componentes Angular (prefixo app, estilo kebab-case)
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    // Aplica essas regras para todos os arquivos de template HTML Angular
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,            // Regras recomendadas para templates HTML Angular
      ...angular.configs.templateAccessibility,          // Regras de acessibilidade para HTML Angular
    ],
    rules: {
      // Desativa a exigência de que elementos com manipuladores de evento sejam focáveis
      "@angular-eslint/template/interactive-supports-focus": "off",

      // Desativa a exigência de eventos de teclado junto com eventos de clique
      "@angular-eslint/template/click-events-have-key-events": "off",
    },
  }
);
