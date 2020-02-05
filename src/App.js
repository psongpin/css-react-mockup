import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import ProductTable from "./components/ProductsTable";
import theme from "./theme";
import products from "./data/products";

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.mainBackground};
  padding: 30px 15px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <Main>
        <ProductTable data={products} />
      </Main>
    </ThemeProvider>
  );
}

export default App;
