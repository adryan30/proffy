# Proffy <!-- omit in toc -->

<div align="center">

![Proffy Landing](./assets/landing.svg)

## Sua plataforma de estudos online <!-- omit in toc -->

![NLW2 Badge](https://img.shields.io/badge/NLW2-Rocketseat-blueviolet?style=for-the-badge&logo=skyliner&logoColor=white)
![License Badge](https://img.shields.io/github/license/adryan30/proffy?logo=gnu&style=for-the-badge)

</div>

---

## Tabela de Conteúdos <!-- omit in toc -->

- [Sobre o projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Rodando o projeto](#rodando-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Contato](#contato)
- [Reconhecimentos](#reconhecimentos)

<!-- ABOUT THE PROJECT -->

## Sobre o projeto

[![Proffy][product-screenshot]]()

Durante a pandemia do Covid-19, acabou surgindo uma barreira entre os professores e seus aulos. Esse projeto tem como objetivo quebrar esse distanciomento e conectar educadores com aqueles que necessitam.

Os passos para utilizar são simples:

- Professores se cadastram pelo botão `Dar aulas`, envando um formulário com seus horários e matéria.
- Alunos procuram professores pelo botão `Estudar`, filtrando pela matéria e quando precisam de aulas.
- Os dois se conectam através da rede `WhatsApp`, onde podem combinar plataforma de vídeo e pagamento.

Espero que gostem! 😄

## Tecnologias

Tecnologias que me ajudaram a trazer esse projeto à realidade:

- [NestJS](https://nestjs.com/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [NX Monorepo](https://nx.dev/react)

<!-- GETTING STARTED -->

## Rodando o projeto

### Pré-requisitos

É necessario ter instalado:

- [Node.js](https://nodejs.org/)
- NPM ([Yarn v1](https://classic.yarnpkg.com/lang/en/) recomendado)
- [Git](https://git-scm.com/)

### Instalação

1. Clone o repositório

```sh
git clone https://github.com/adryan30/proffy.git
```

2. Instale os pacotes NPM

```sh
npm install
```

3. Execute o comando parar abrir o **_app_** desejado.

```sh
# Para executar o frontend
nx serve frontend

# Para executar o backend
nx serve backend

# Para executar a aplicação completa
nx run-many --target=serve --all=true --parallel=true

```

<!-- CONTRIBUTING -->

## Contribuindo

Contruibições para esse projeto são altamente encorajadas, apesar de seu estado **finalizado**.

1. Forke o repositório
2. Crie uma Branch pra sua Feature (`git checkout -b feature/AlgumaFeature`)
3. Commite sua mudanças (`git commit -m 'Adicona SuaFeature'`)
4. Dê push para sua Branch (`git push origin feature/SuaFeature`)
5. Abra um Pull Request

<!-- LICENSE -->

## Licença

Distribuido sobre a licença `GPLv3`. Veja `LICENSE.md` para mais informações.

<!-- CONTACT -->

## Contato

**Adryan Almeida**

[![Gmail][gmail-shield]][gmail-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

Link do projeto: [https://github.com/adryan30/proffy](https://github.com/adryan30/proffy)

<!-- ACKNOWLEDGEMENTS -->

## Reconhecimentos

- Todos os direitos sobre o design gráfico e de API são atribuidos ao pessoal da [Rocketseat](https://github.com/Rocketseat).

<!-- MARKDOWN LINKS & IMAGES -->

[gmail-shield]: https://img.shields.io/badge/email-red?logo=gmail&style=for-the-badge&colorB=555
[gmail-url]: mailto:adryan.software@gmail.com
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/adryanalmeida
[product-screenshot]: ./assets/landing.png
