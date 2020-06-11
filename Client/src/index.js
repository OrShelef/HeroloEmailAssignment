import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SnackbarProvider } from 'material-ui-snackbar-provider';
import {BrowserRouter as Router} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; 

const theme = createMuiTheme({
  palette: {
     primary: {
        light: '#fff',
        main: '#455a64',
        dark: '#000'
     },
     secondary: {
       main: '#ffb300',
     },
    
  },
  typography: { 
     useNextVariants: true
  }
});
ReactDOM.render(
  <MuiThemeProvider theme = { theme }>
    <SnackbarProvider SnackbarProps={{ autoHideDuration: 2500,anchorOrigin:{ vertical: 'top',horizontal: 'right'} }}>
      <Router>
          <App/>
      </Router>
    </SnackbarProvider>
  </MuiThemeProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
