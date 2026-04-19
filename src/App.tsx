import React from 'react';
import './index.css';
import {  MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import Header from './files/HeaderMegaMenu.jsx';
import Content from './files/HeroContentLeft';
import Services from './files/Services.jsx';
import Contact from './files/Contact.jsx';
import Footer from './files/FooterLinks.jsx';
import Advantages from './files/Advantages.jsx';
import Opinions from './files/UserOpinions.jsx';
import classes from './files/ContactUs.module.css';

function App() {
  return (
    <MantineProvider >
    <Header/>
    <Content/>
    <Services/>
    <Opinions/>
    <Advantages/>
    <Contact/>
    <div className={classes.footerSpacer}/>
    <Footer/>
    </MantineProvider>
  );
}

export default App;
