# 💱 Conversor de Moedas 

> Uma aplicação web moderna para conversão de moedas que consome dados reais de uma API RESTful, oferecendo cotações atualizadas a cada 30 segundos e cálculo instantâneo.

## 🔗 Live Demo
[Acesse o projeto online aqui](https://conversor-de-moedas-sable-chi.vercel.app/)

## 🛠️ Tecnologias Utilizadas

* **HTML5 Semântico**: Estrutura organizada e acessível.
* **CSS3**: Estilização responsiva, uso de Flexbox e background video.
* **JavaScript (ES6+)**:
    * **Fetch API**: Para consumo de dados externos.
    * **Async/Await**: Controle de fluxo assíncrono.
    * **DOM Manipulation**: Atualização dinâmica de imagens, textos e valores.
* **AwesomeAPI**: API RESTful pública utilizada para obter as cotações (BRL, USD, EUR, GBP).

## 🚀 Funcionalidades

* ✅ **Cotação em Tempo Real**: Conexão direta com o mercado financeiro para obter valores de compra (`bid`) atualizados.
* ✅ **Conversão Multimoeda**: Suporte para conversão entre Real (BRL), Dólar (USD), Euro (EUR) e Libra (GBP).
* ✅ **Atualização Automática**: O sistema consulta a API a cada 30 segundos para manter a cotação fresca sem recarregar a página.
* ✅ **UX Fluida**: O cálculo acontece enquanto o usuário digita (`input event`), sem necessidade de múltiplos cliques.
* ✅ **Tratamento de Erros**: Implementação de blocos `try/catch` para garantir que a aplicação não trave caso a API esteja indisponível.

## 📸 Screenshots

### Desktop
![Screenshot Desktop]([CAMINHO_DA_IMAGEM_DESKTOP])


## 🧠 Aprendizados e Conceitos Aplicados

Durante o desenvolvimento deste projeto, aprofundei meus conhecimentos em engenharia de software frontend:

1.  **Consumo de API RESTful**: Compreensão de como realizar requisições HTTP (GET), interpretar o status da resposta e manipular dados em formato **JSON**.
2.  **Programação Assíncrona**: Uso prático de `async` e `await` para gerenciar o tempo de resposta do servidor sem bloquear a thread principal do navegador.
3.  **Clean Code & Refatoração**:
    * Substituição de múltiplos `if/else` por **Objetos de Configuração** (`currencyData`), tornando o código mais limpo e escalável.
    * Separação de responsabilidades: Função de busca (`checkQuotation`) separada da função de cálculo (`calculate`).
4.  **Internacionalização (Intl)**: Uso da API nativa `Intl.NumberFormat` para formatar moedas corretamente (R$, US$, €, £) de acordo com o padrão de cada país.
