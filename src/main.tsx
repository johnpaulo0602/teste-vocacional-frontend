import { ChakraProvider, extendTheme, Flex, StyleFunctionProps } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Router } from './router';

const theme = extendTheme({
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                fontFamily: 'Poppins',
            }
        })
    }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <Flex
                flexDirection="column"
                minHeight="100vh"
                justify="space-between"
        >
            {/* <Flex w={'full'} margin="0 auto" flexDirection="column" flex="1"> */}
                <RouterProvider router={Router} />
            {/* </Flex> */}
        </Flex>
    </ChakraProvider>
  </React.StrictMode>
);
