import styled, { createGlobalStyle } from "styled-components";

// Estilos globais
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background-color: #f5f5f5;
    color: #333;
    font-size: 16px;
  }
`;

// Container padrão para as páginas
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
    text-align: center;
`;

// Título principal
export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 20px;
    color: #2c3e50;
`;

// Botão estilizado
export const Button = styled.button`
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
        background-color: #2980b9;
    }
`;
