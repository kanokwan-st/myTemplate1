import './App.css'
import React from 'react'

import { Button, ThemeProvider } from '@mui/material'
import MyButton from './materialUi/MyButton'
import theme from './theme'

export default function App({children}) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* import mui button */}
        <Button variant='contained'>Test</Button> 

        {/* import custom mui button */}
        <MyButton />

        {/* import RouterProvider(Layout and children) component */}
        {children}

      </div>
    </ThemeProvider>
  )
}
