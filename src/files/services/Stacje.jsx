import { AspectRatio, Card, Container, Flex, Image, Text, Button } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import classes from './AllServices.module.css';
import Header from '../HeaderMegaMenu.jsx';
import Footer from './Footer.jsx';
import image from '../images/frame2.png';

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
          <h1>Stacje uzdatniania wody</h1>
            <Text align="justify">
             
              Stacje uzdatniania wody to obiekty, które zajmują się oczyszczaniem wody z różnych źródeł, aby uczynić ją bezpieczną i zdatną do picia 
              oraz używania w gospodarstwach domowych i przemysłowych. 
              Proces uzdatniania obejmuje usuwanie zanieczyszczeń mechanicznych, chemicznych i biologicznych, takich jak bakterie, metale ciężkie czy 
              związki organiczne. 
              <br></br>
              <a href="/kontakt"><Button className={classes.offerButtonSmall}>Zapytaj o ofertę</Button></a>
              <br></br>
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