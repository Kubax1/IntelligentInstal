import { AspectRatio, Card, Container, Flex, Image, Text, Button } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import classes from './AllServices.module.css';
import Header from '../HeaderMegaMenu.jsx';
import Footer from './Footer.jsx';
import image from '../images/digitalScreen.png';

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
              <h1>Termomodernizacje</h1>
              Termomodernizacja to proces modernizacji budynków mający na celu  poprawę ich efektywności energetycznej.
              <br></br>Obejmuje ona takie działania jak ocieplanie ścian, dachów, wymiana okien i drzwi, modernizacja instalacji grzewczych oraz montaż odnawialnych źródeł energii, np. paneli fotowoltaicznych. 

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