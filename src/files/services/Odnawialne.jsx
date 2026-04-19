import { AspectRatio, Card, Container, Flex, Image, Text, Button } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import classes from './AllServices.module.css';
import Header from '../HeaderMegaMenu.jsx';
import Footer from './Footer.jsx';
import image from '../images/solary2.png';

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
          <h1>Odnawialne źródła energii</h1>
            <Text align="justify">

              Odnawialne źródła energii to zasoby energetyczne, które są naturalnie odnawiane w krótkim czasie i nie wyczerpują się w wyniku eksploatacji. 
              Należą do nich energia słoneczna, wiatrowa, wodna, geotermalna oraz biomasa. 
              Wykorzystanie odnawialnych źródeł energii przyczynia się do zmniejszenia emisji gazów cieplarnianych
              , co ma pozytywny wpływ na walkę ze zmianami klimatycznymi.
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