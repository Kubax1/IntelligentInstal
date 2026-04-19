import { AspectRatio, Card, Container, Image, SimpleGrid, Text } from '@mantine/core';
import classes from './Realizations.module.css';
import '@mantine/core/styles.css';
import {  MantineProvider } from '@mantine/core';
import Header from './HeaderMegaMenu.jsx';
import Footer from './FooterLinks.jsx';
import Solary from './images/frame2.png';
const mockdata = [
  {
    title: 'Instalacja fotowoltaiczna',
    image: Solary,
  },
  {
    title: 'Pompa ciepła',
    image:
      Solary,
  },
  {
    title: 'Termomodernizacja',
    image:
      Solary,
  },
  {
    title: 'Stacja uzdatniania wody',
    image:
      Solary,
  }
];

export function ArticlesCardsGrid() {
  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (

    <MantineProvider>
        <Header/>
        <h1 className={classes.title2}>Nasze realizacje</h1>
    <Container py="xl">
    
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
    <Footer/>
    </MantineProvider>
  );
}
export default ArticlesCardsGrid