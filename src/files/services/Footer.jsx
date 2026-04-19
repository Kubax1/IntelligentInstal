import {  Container, Text } from '@mantine/core';
import classes from './ServiceFooter.module.css';
import Logo from "../images/logo.png";

const data = [

  {
    title: 'Kontakt',
    links: [
      { label: '+48 123 456 789', link: "/kontakt" },
      { label: 'intelligentinstalgroup@gmail.com', link: '/kontakt' }
    ],
  },
  {
    title: ' ',
    links: [
    ],
  },
  {
    title: 'Oferta',
    links: [
      { label: 'Instalacje grzewcze', link: '/usługi' },
      { label: 'Instalacje sanitarne', link: '/usługi' },
      { label: 'Pompy ciepła', link: '/usługi' },
      { label: 'Odnawialne źródła energii', link: '/usługi' },
      { label: 'Termomodernizacja', link: '/usługi' },
      { label: 'Stacje uzdatniania wody', link: '/usługi' },
      { label: 'Piece i kotły', link: '/usługi' },
    ],
  },

];
const date =new Date();
let year=date.getFullYear();

function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <a
        key={index}
        className={classes.link}
        href={link.link}  
      >
        {link.label}
      </a>
    ));
    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
        <a href="/"><img className={classes.logoImg} src={Logo} alt="Logo" /></a>
          <Text size="xs" c="dimmed" className={classes.description}>
          Marszałkowska 100
          <br></br>00-001 WARSZAWA
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {year} Intelligent Instal
        </Text>
      </Container>
    </footer>
  );
}

export default FooterLinks;