import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './HeroContentLeft.module.css';
import { FaHome,FaBuilding  } from "react-icons/fa";

export function HeroContentLeft() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title2}><span className={classes.yellow}>Instalacje </span>grzewcze i sanitarne</Title>
        <Text className={classes.description} size="xl" mt="xl">
        Nasza firma specjalizuje się w nowoczesnych instalacjach grzewczych i sanitarnych.
        </Text>
        <br></br>
        <a href ="/kontakt"><Button size="xl" radius="xl" className={classes.offerButton}>
            Zapytaj o  ofertę
        </Button>
        <br></br>
        <div className={classes.buttonContainer}>
        <Button size="xl" radius="xl" className={classes.offersButton}>
        <FaHome /> &nbsp;Dla domu
        </Button>

        <Button size="xl" radius="xl" className={classes.offersButton}>
           <FaBuilding /> &nbsp; Dla Biznesu
        </Button>
        </div>
        </a>
      </Container>
    </div>
  );
}
export default HeroContentLeft;