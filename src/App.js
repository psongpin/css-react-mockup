import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

import ProductTable from "./components/ProductsTable";
import theme from "./theme";
import products from "./data/products";

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.mainBackground};
  padding: 30px 15px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family:
      "Work Sans",
      system-ui,
      /* macOS 10.11-10.12 */ -apple-system,
      /* Windows 6+ */ "Segoe UI",
      /* Android 4+ */ "Roboto",
      /* Ubuntu 10.10+ */ "Ubuntu",
      /* Gnome 3+ */ "Cantarell",
      /* KDE Plasma 5+ */ "Noto Sans",
      /* fallback */ sans-serif,
      /* macOS emoji */ "Apple Color Emoji",
      /* Windows emoji */ "Segoe UI Emoji",
      /* Windows emoji */ "Segoe UI Symbol",
      /* Linux emoji */ "Noto Color Emoji";
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Main>
        <ProductTable data={products} />
      </Main>
    </ThemeProvider>
  );
}

export default App;
