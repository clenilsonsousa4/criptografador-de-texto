# Criptografador de Texto
Desafio do módulo introdutório da especialização do Oracle Next Education

**Você pode conferir esse projeto funcionando [aqui](https://decodificador-clenilson.vercel.app/).**

## Tecnologias
- ![Static Badge](https://img.shields.io/badge/JavaScript-yellow)
- ![Static Badge](https://img.shields.io/badge/HTML%205-orange)
- ![Static Badge](https://img.shields.io/badge/CSS-blue)

## Como ele funciona?

### Criptografando um texto
**__É necessário que todas as letras do texto estejam em minúsculo e não possua acento.__**

A ferramenta irá pegar as vogais presentes no texto, e irá alterar da seguinte forma:
- `Letra A`: `ai`;
- `Letra E`: `enter`;
- `Letra I`: `imes`;
- `Letra O`: `ober`;
- `Letra U`: `ufat`.

### Descriptografando um texto
A regra será a mesma para a criptografia, só que ao inverso.

Como toda substituição começa com a vogal original, o sistema irá checar se a letra corresponde a uma vogal. Em caso positivo, irá verificar as próximas letras (de acordo com o tamanho da chave) para confirmar que realmente se trata da chave.

## Recursos
O site conta com tema de acordo com o que está definido nas preferências do sistema operacional. Caso não seja possível obter a preferência do SO, o tema escuro é o padrão.

### Claro
![Imagem do sistema com o tema claro](/assets/references/light-mode.png)

### Escuro
![Imagem do sistema com o tema escuro](/assets/references/dark-mode.png)

## Agradecimentos
- As imagens utilizadas no projeto foram disponibilizadas pela [Alura](https://www.alura.com.br/);
- Os ícones utilizados são disponibilizados pelo [Bootstrap](https://icons.getbootstrap.com/)
- A fonte utilizada é disponibilizada pelo [Google Fonts](https://fonts.google.com/)