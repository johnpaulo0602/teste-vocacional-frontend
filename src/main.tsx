import { ChakraProvider, extendTheme, StyleFunctionProps } from '@chakra-ui/react';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './router'

/**
 * @TODO: pass theme to another file
 */
const theme = extendTheme({
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                fontFamily: ['poppins']
            }
        })
    }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={Router} />
    </ChakraProvider>
  </React.StrictMode>
)
