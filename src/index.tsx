import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import SingleContact from './files/SingleContact.jsx';
import Realizations from './files/Realizations.jsx';
import Grzewcze from './files/services/Grzewcze.jsx';
import Sanitarne from './files/services/Sanitarne.jsx';
import Odnawialne from './files/services/Odnawialne.jsx';
import Pompy from './files/services/Pompy.jsx';
import Stacje from './files/services/Stacje.jsx';
import Termo from './files/services/Termo.jsx';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import AboutCompany from './files/AboutCompany.jsx';

const router = createBrowserRouter([
    {path:'/',element:<App/>},
    {path:'/kontakt',element:<SingleContact/>},
    {path:'/realizacje',element:<Realizations/>},
    {path:'/o-firmie',element:<AboutCompany/>},
    {path:'/instalacje-grzewcze',element:<Grzewcze/ >},
    {path:'/instalacje-sanitarne',element:<Sanitarne/>},
    {path:'/pompy-ciepła',element:<Pompy/>},
    {path:'/stacje-uzdatniania-wody',element:<Stacje/>},
    {path:'/termomodernizacja',element:<Termo/>},
    {path:'/odnawialne-źródła-energii',element:<Odnawialne/>},
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MantineProvider>
    <RouterProvider router={router} />
  </MantineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
