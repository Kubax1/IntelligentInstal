import { useState } from 'react';
import { AspectRatio, Card, Container, Image, SimpleGrid, Text, Button } from '@mantine/core';
import classes from './Services.module.css';
import plumbing1 from "./images/thermostat.png";
import plumbing2 from "./images/pipe.png";
import plumbing3 from "./images/solary2.png";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
const mockdata = [
  {
    title: 'Instalacje grzewcze',
    images: [plumbing1, plumbing2, plumbing3],
  },
  {
    title: 'Pompy ciepła',
    images: [plumbing1, plumbing2, plumbing3],
  }
];

export function ArticlesCardsGrid() {
  const [currentIndexes, setCurrentIndexes] = useState(
    mockdata.map(() => 0) // Initialize all indexes to 0 (first image)
  );

  // Function to handle left and right arrow clicks for each service
  const handleArrowClick = (direction, index) => {
    setCurrentIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      if (direction === 'left') {
        newIndexes[index] = (newIndexes[index] - 1 + 3) % 3; // Go to previous image
      } else if (direction === 'right') {
        newIndexes[index] = (newIndexes[index] + 1) % 3; // Go to next image
      }
      return newIndexes;
    });
  };

  const cards = mockdata.map((article, index) => (
    <Card key={article.title} p="md" radius="md" component="a" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.images[currentIndexes[index]]} />
      </AspectRatio>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>

        <Button className={classes.arrow1} variant="outline" onClick={() => handleArrowClick('left', index)}>
        <FaArrowLeft /> 
        </Button>
        <Button className={classes.arrow2} variant="outline" onClick={() => handleArrowClick('right', index)}>
        <FaArrowRight />
        </Button>

    </Card>
  ));

  return (
    <Container py="xl">
      <p className={classes.servicesp}>Poznaj nasze usługi</p>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}

export default ArticlesCardsGrid;
