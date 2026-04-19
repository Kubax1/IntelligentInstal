import { MantineProvider,AspectRatio, Card, Container, Flex, Image, Text, Button } from '@mantine/core';
import classes from './AboutCompany.module.css';
import Header from './HeaderMegaMenu.jsx';
import Footer from './services/Footer.jsx';
import image from './images/avatar3.png';
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
              <h1>Kim jesteśmy? </h1>
               Nasza firma specjalizuje się w instalacjach grzewczych, sanitarnych oraz montażu pomp ciepła. W odpowiedzi na rosnące potrzeby rynku, rozszerzyliśmy swoją ofertę o nowoczesne rozwiązania ekologiczne, takie jak rekuperacja, pompy ciepła i systemy retencji wody. Stawiając na innowacyjność, oferujemy inteligentne technologie, które łączą wydajność, oszczędność i troskę o środowisko.
              <br></br>
              <a href="/kontakt"><Button className={classes.offerButtonSmall}>Zapytaj o ofertę</Button></a>
              <br></br> <br></br> <br></br>
              
            </Text>
          </Card>
          <AspectRatio ratio={16 / 9} className={classes.imageContainer}>
          <div className={classes.ownerBlock}>
            <Image src={image} alt="Solary" className={classes.serviceImage} />
            <Text className={classes.wlasciciel} align="center">Właściciel</Text>
            <Text className={classes.wlasciciel} align="center">Jan Kowalski</Text>
          </div>
          <div className={classes.ownerBlock}>
            <Image src={image} alt="Solary" className={classes.serviceImage} />
            <Text className={classes.wlasciciel} align="center">Współwłaściciel</Text>
            <Text className={classes.wlasciciel} align="center">Adam Kowalski</Text>
          </div>
        </AspectRatio>

        </Flex>
      </Container>

      <Footer />
    </MantineProvider>
  );
}

export default Sanitarne;