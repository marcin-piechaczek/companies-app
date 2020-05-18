import React from 'react';
import {Normalize} from 'styled-normalize';
import {createGlobalStyle} from 'styled-components';
import Table from './components/table';

const GlobalStyles = createGlobalStyle`
 html {
   box-sizing: border-box;
   font-size: 16px;
}

 *,
 *::before,
 *::after {
   box-sizing: border-box;
}
`;

const App: React.FC<unknown> = () => {
  return (
    <>
      <Normalize />
      <GlobalStyles />
      <Table />
    </>
  );
};

export default App;
