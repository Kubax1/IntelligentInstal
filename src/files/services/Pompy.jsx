import { AspectRatio, Card, Container, Flex, Image, Text, Button } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import classes from './AllServices.module.css';
import Header from '../HeaderMegaMenu.jsx';
import Footer from './Footer.jsx';
import image from '../images/counter.png';

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
              <h1>Pompy ciepła</h1>
              Pompa ciepła to energooszczędne urządzenie, które pobiera ciepło z powietrza, wody lub gruntu i 
              wykorzystuje je do ogrzewania budynków oraz podgrzewania wody.<br></br> Dzięki wysokiej efektywności 
              obniża koszty ogrzewania i emisję CO₂, będąc ekologiczną alternatywą dla tradycyjnych systemów. 
              Nowoczesne modele mogą także pełnić funkcję chłodzenia latem, zapewniając komfort przez cały rok.
              <br></br>
              <a href="/kontakt"><Button className={classes.offerButtonSmall}>Zapytaj o ofertę</Button></a>
              <br></br>
              <br></br>
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