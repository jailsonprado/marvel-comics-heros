# Marvel Search Hero

Aplicação feita para buscar seus heróis e tambem favoritar eles.
- Listagem de heróis
- Busca por nome de herois
- Ordenação por A/Z
- Paginação 
- Favoritar até 5 heróis
- Mensagem de no maximo 5 herois favoritos
- listar favoritos
- Tratamento de lsta de favoritos vazia
- Tela 404 not found
- layout responsivo
- EsLint e Prettier
- Testes unitários com Jest com 95% de cobertura
- Testes e2e de todas as funcionaliades com Cypres.
- Deploy em vercel ( automatizado com git push)
- CI/CD com Git Actions


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/jailsonprado/marvel-comics-heros.git
```

Instale a versão do Node

```bash
Verifique se você tem a versão do Node especificada (16.x.x ou 18.x.x) instalada em seu sistema.
```

Entre no diretório do projeto

```bash
  cd marvel-comics-heros
```

Instale as dependências

```bash
  yarn install

```

Inicie o servidor

```bash
  yarn run dev
```

## Stack utilizada

**Front-end:** React, Vite, Typescript, Redux, Redux Toolkit, Axios, Styled-components...

**Tests unitários/componentes:** Jest, React Library Testing...

## **Ferramentas para qualidade de codigo:**

- Husky (verifica se o commit segue o padrão do conventional commits) - obrigatório
- npm run lint e npm run test pre-commit
- Bloqueio de commit se houver qualquer erro nos testes unitários.
- Regras de EsLint e Prettier garantindo um bom código.

**Teste e2e:** Cypress

## Rodando os testes

Para rodar os testes unitários , rode o seguinte comando

```bash
  npm run test
```

Para rodar os testes e2e , rode o seguinte comando

```bash
  yarn run dev
  yarn run test:e2e
```

## Referência

- [Marvel API Docs](https://developer.marvel.com/)
- [Convetional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)



## Licença

[MIT](https://choosealicense.com/licenses/mit/)
