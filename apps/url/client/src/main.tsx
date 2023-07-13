import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import Background from "./app/background";
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ChakraProvider>
      <Background />
      <App />
    </ChakraProvider>
  </StrictMode>
);