import { AspectRatio, Card, Container, Flex, Image, Text, Button } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import classes from './AllServices.module.css';
import Header from '../HeaderMegaMenu.jsx';
import Footer from './Footer.jsx';
import image from '../images/thermostat.png';

export function Sanitarne() {
  return (
    <MantineProvider>
      <Header />

      <Container size="xxl" className={classes.wrapper}>
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          align="center" 
          gap="xl"
        >
          <Card padding="lg" radius="md" className={classes.textBlock}>
            <Text align="justify">
              <h1>Instalacje grzewcze</h1>
             Instalacje grzewcze to systemy służące do utrzymania komfortowej temperatury w budynkach poprzez wykorzystanie różnych źródeł ciepła, takich jak kotły czy pompy ciepła.
             
             <br></br>
             W zależności od potrzeb, może obejmować ogrzewanie podłogowe, grzejniki czy systemy wentylacyjne z odzyskiem ciepła.
              <br></br>
              <a href="/kontakt"><Button className={classes.offerButtonSmall}>Zapytaj o ofertę</Button></a>
              <br></br>
            </Text>
          </Card>
          <AspectRatio ratio={16 / 9} className={classes.imageContainer}>
            <Image src={image} alt="Solary" className={classes.serviceImage} />
          </AspectRatio>
        </Flex>
      </Container>

      <Footer />
    </MantineProvider>
  );
}

export default Sanitarne;