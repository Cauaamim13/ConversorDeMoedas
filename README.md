# 💱 Conversor de Moedas

Projeto desenvolvido para realizar a conversão de valores em Real Brasileiro (BRL) para Dólar Americano, Euro e Libra Esterlina.

Deploy do projeto: https://cauaamim13.github.io/ConversorDeMoedas/

## 📸 Demonstração

## 🛠️ Funcionalidades

- **Conversão em Tempo Real**: Converte valores de BRL para USD, EUR e GBP.
- **Formatação de Moeda**: Utiliza a API `Intl.NumberFormat` para garantir que os valores estejam formatados corretamente de acordo com a localidade (ex: R$ 1.000,00 ou $ 1,000.00).
- **Interface Dinâmica**: Altera o nome da moeda e a imagem da bandeira automaticamente ao selecionar uma nova opção.

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização e layout.
- **JavaScript**: Lógica de conversão e manipulação do DOM.

## 📂 Estrutura do Projeto

O código principal de lógica (`scripts.js`) realiza as seguintes operações:
1. **Mapeamento de elementos**: Captura inputs, selects e botões.
2. **Lógica de Conversão**: Define taxas de câmbio fixas para fins de demonstração.
3. **Event Listeners**: Monitora o clique no botão de converter e a mudança no seletor de moedas.
