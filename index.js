
/*
Entendendo o Desafio
Agora é a sua hora de brilhar e construir um perfil de destaque na DIO!
Explore todos os conceitos explorados até aqui e replique (ou  melhore, 
porque não?) este projeto prático. Para isso, crie seu próprio repositório 
e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode 
fazer toda diferença em suas entrevistas técnicas.

Neste repositório, insira todos os links e arquivos necessários para seu projeto,
seja um arquivo de banco de dados ou um link para o template no Figma.

Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no 
repositório dele para organizar suas alterações e evoluções mantendo uma
referência direta ao código-fonte original.
 
Instruções para entrega
# 1. Desafio Classificador de nível de Herói

**O Que devemos utilizar**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói,
depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Output/Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

// Imput/Get/Entrada de dados informado pelo usuário
var cnomeHeroi = "Valdemar da Siva Brito Jururuka Bento Dino";

var nqtddExprncia = 4111;


// Cria a variável numerica nível do heroi 
let nNvlHeroi;

//
if (nqtddExprncia < 1000) {nNvlHeroi = "Ferro";
} else if (nqtddExprncia >= 1001 && nqtddExprncia <= 2000) {  nNvlHeroi = "Bronze";
} else if (nqtddExprncia >= 2001 && nqtddExprncia <= 5000) {  nNvlHeroi = "Prata";
} else if (nqtddExprncia >= 6001 && nqtddExprncia <= 7000) {  nNvlHeroi = "Ouro";
} else if (nqtddExprncia >= 7001 && nqtddExprncia <= 8000) {  nNvlHeroi = "Platina";
} else if (nqtddExprncia >= 8001 && nqtddExprncia <= 9000) {  nNvlHeroi = "Ascendente";
} else if (nqtddExprncia >= 9001 && nqtddExprncia <= 10000) { nNvlHeroi = "Imortal";
} else { nNvlHeroi = "Radiante";}

// imprimindo uma mensagem no console com o resultado selecionado pelo if
console.log(`O Herói de nome ${cnomeHeroi} está no nível de ${nNvlHeroi}`);