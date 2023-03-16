const express = require('express');
const cors = require('cors');

const app = express();

// Habilita o CORS
app.use(cors());

// Rotas do servidor
app.get('/v1/quiz/:slug', (req, res) => {
  const json = {
    "data": {
      "title": "Qual área você gostaria de trabalhar?",
      "minOption": 1,
      "maxOption": 99,
      "options": [
        {
          "id": "clf8q5ch80001u5tgbn02t95c",
          "option": "Dados",
          "QuizOptionSub": [
            {
              "id": "clf8q5ch80002u5tg3vtyajbn",
              "optionSub": "Big Query"
            },
            {
              "id": "clf8q5ch80003u5tgrlvr5v60",
              "optionSub": "Snowplow"
            },
            {
              "id": "clf8q5ch80004u5tg4anziyc6",
              "optionSub": "Redshift"
            }
          ]
        },
        {
          "id": "clf8q5ch80008u5tg2uq1i976",
          "option": "Backend",
          "QuizOptionSub": [
            {
              "id": "clf8q5ch80009u5tgrmotaj33",
              "optionSub": "Python"
            },
            {
              "id": "clf8q5ch8000au5tgjhakruqa",
              "optionSub": "Node"
            },
            {
              "id": "clf8q5ch8000bu5tg0b4648y8",
              "optionSub": "PHP"
            },
            {
              "id": "clf8q5ch8000cu5tgmblkqd1i",
              "optionSub": "Rust"
            }
          ]
        },
        {
          "id": "clf8q5ch8000hu5tgs191v4ng",
          "option": "Frontend",
          "QuizOptionSub": [
            {
              "id": "clf8q5ch8000iu5tguf1lablu",
              "optionSub": "React"
            },
            {
              "id": "clf8q5ch8000ju5tgs5eq7ohh",
              "optionSub": "Vuejs"
            },
            {
              "id": "clf8q5ch8000ku5tgrim7ve7j",
              "optionSub": "tailwind"
            }
          ]
        },
        {
          "id": "clf8q5ch8000ou5tgvjv6n8xw",
          "option": "Produto",
          "QuizOptionSub": [
            {
              "id": "clf8q5ch8000pu5tgw8g3qtpm",
              "optionSub": "Agile Coach"
            },
            {
              "id": "clf8q5ch8000qu5tgzpkea867",
              "optionSub": "Product Management"
            },
            {
              "id": "clf8q5ch8000ru5tga2j0202l",
              "optionSub": "Technical Product Manager"
            },
            {
              "id": "clf8q5ch8000su5tgdxasj2h5",
              "optionSub": "User Research"
            }
          ]
        },
        {
          "id": "clf8q5ch8000xu5tgmbusvx8x",
          "option": "Design",
          "QuizOptionSub": [
            {
              "id": "clf8q5ch8000yu5tgpg1i1luh",
              "optionSub": "Brand Design"
            },
            {
              "id": "clf8q5ch8000zu5tgu1pwtcyb",
              "optionSub": "Grafico e Motion Design"
            },
            {
              "id": "clf8q5ch80010u5tgda56o6t6",
              "optionSub": "Design Industrial"
            },
            {
              "id": "clf8q5ch80011u5tgzmywemxz",
              "optionSub": "Product Design (UX/UI)"
            },
            {
              "id": "clf8q5ch80012u5tgobrstcyh",
              "optionSub": "UX Writer"
            }
          ]
        },
        {
          "id": "clf8q5ch80018u5tg0feh3si1",
          "option": "Sales",
          "QuizOptionSub": [
            {
              "id": "clf8q5ch80019u5tgt6u1jx49",
              "optionSub": "Account Executive"
            },
            {
              "id": "clf8q5ch8001au5tg8pyyxqkv",
              "optionSub": "CS & Account Management"
            },
            {
              "id": "clf8q5ch8001bu5tgk81zketu",
              "optionSub": "Enterprise Sales"
            },
            {
              "id": "clf8q5ch8001cu5tgkrh95n89",
              "optionSub": "SDR"
            },
            {
              "id": "clf8q5ch8001du5tgp3kgofda",
              "optionSub": "SBR"
            },
            {
              "id": "clf8q5ch8001eu5tgybwwlu1v",
              "optionSub": "Sales Operation"
            },
            {
              "id": "clf8q5ch8001fu5tg1u3w8cuy",
              "optionSub": "B2B"
            },
            {
              "id": "clf8q5ch8001gu5tg3hwm1x92",
              "optionSub": "B2C"
            }
          ]
        },
        {
          "id": "clf8q5ch8001pu5tgdyiu8nvw",
          "option": "RH",
          "QuizOptionSub": [
            {
              "id": "clf8q5ch8001qu5tgr6u569ft",
              "optionSub": "Administrativo"
            },
            {
              "id": "clf8q5ch8001ru5tghgweh1d3",
              "optionSub": "Operação"
            },
            {
              "id": "clf8q5ch8001su5tgya2o9hu2",
              "optionSub": "Assistente Executivo"
            },
            {
              "id": "clf8q5ch8001tu5tg7nenhr7e",
              "optionSub": "Recrutamento e Seleção"
            },
            {
              "id": "clf8q5ch8001uu5tgf6op5oco",
              "optionSub": "Community"
            }
          ]
        },
        {
          "id": "clf8q5ch80020u5tg51ek6t51",
          "option": "Marketing",
          "QuizOptionSub": [
            {
              "id": "clf8q5ch80021u5tgz1ekfvls",
              "optionSub": "Branding"
            },
            {
              "id": "clf8q5ch80022u5tgc26pp9gg",
              "optionSub": "Conteúdo"
            },
            {
              "id": "clf8q5ch80023u5tgyml5rp0h",
              "optionSub": "Copywriter"
            },
            {
              "id": "clf8q5ch80024u5tgqetizvxp",
              "optionSub": "CRM e Operação"
            },
            {
              "id": "clf8q5ch80025u5tg34j64m52",
              "optionSub": "Growth"
            },
            {
              "id": "clf8q5ch80026u5tgk9krimyy",
              "optionSub": "Performance"
            },
            {
              "id": "clf8q5ch80027u5tgbgme8mgg",
              "optionSub": "Relações Públicas"
            },
            {
              "id": "clf8q5ch80028u5tgiljil85y",
              "optionSub": "Marketing de Produto"
            },
            {
              "id": "clf8q5ch80029u5tg16rqrbt7",
              "optionSub": "SEO"
            },
            {
              "id": "clf8q5ch8002au5tgyjb2txiv",
              "optionSub": "Social Media e Comunidade"
            }
          ]
        },
        {
          "id": "clf8q5ch8002lu5tgbswwmnh0",
          "option": "Outros",
          "QuizOptionSub": [
            {
              "id": "clf8q5ch8002mu5tgqgn3xxrz",
              "optionSub": "Jurídico"
            },
            {
              "id": "clf8q5ch8002nu5tg3mk8yvzo",
              "optionSub": "Conteúdo"
            },
            {
              "id": "clf8q5ch8002ou5tgaf54177u",
              "optionSub": "Costumer Success"
            },
            {
              "id": "clf8q5ch8002pu5tg6fwpyxc8",
              "optionSub": "Venture"
            },
            {
              "id": "clf8q5ch8002qu5tgbu2hty14",
              "optionSub": "Financeiro"
            },
            {
              "id": "clf8q5ch8002ru5tgdcf4m3so",
              "optionSub": "Operação"
            },
            {
              "id": "clf8q5ch8002su5tgbzy1bivd",
              "optionSub": "Projeto"
            },
            {
              "id": "clf8q5ch8002tu5tge1ifabp2",
              "optionSub": "Imobiliário"
            },
            {
              "id": "clf8q5ch8002uu5tgth86f16m",
              "optionSub": "Saúde"
            },
            {
              "id": "clf8q5ch8002vu5tgxurkg018",
              "optionSub": "Não listado"
            }
          ]
        }
      ],
      "nextStep": "/quiz/forma",
      "previousStep": ""
    }
  }

  res.json(json);
});

// Inicia o servidor
app.listen(3334, () => {
  console.log('Servidor rodando na porta 3000');
});