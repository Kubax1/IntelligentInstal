import { AspectRatio, Card, Container, Flex, Image, Text, Button } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import classes from './AllServices.module.css';
import Header from '../HeaderMegaMenu.jsx';
import Footer from './Footer.jsx';
import image from '../images/pipe.png';

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
              <h1>Instalacje sanitarne</h1>
              Instalacje sanitarne to kompleksowy system, który zapewnia dostarczanie wody pitnej do budynków, obejmujący rury, zawory, 
              armaturę oraz urządzenia takie jak krany, umywalki, prysznice i toalety. 
              Odpowiednio zaprojektowane instalacje sanitarne gwarantują nie tylko komfort i higienę użytkowania, ale także efektywne 
              gospodarowanie wodą, co przyczynia się do oszczędności i ochrony środowiska. 
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