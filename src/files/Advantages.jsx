import {
  Card,
  Container,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './Advantages.module.css';
import { GiEcology } from "react-icons/gi";
import { FaShieldAlt } from "react-icons/fa";
import { IoMdBuild } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";
import { IoIosRocket } from 'react-icons/io';
import { FaUserTie } from 'react-icons/fa';

const mockdata = [
  {
    title: 'Nowoczesne technologie',
    description:
      'Innowacyjne rozwiązania zwiększające komfort i oszczędność.',
    icon: IoIosRocket ,
  },
  {
    title: 'Doświadczenie i profesjonalizm',
    description:
      'Fachowa wiedza i lata praktyki gwarantujące najwyższą jakość',
    icon: FaUserTie ,
  },
  {
    title: 'Energooszczędność i ekologia',
    description:
      'Instalacje zmniejszające koszty i dbające o środowisko',
    icon: GiEcology,
  },
  {
    title: 'Indywidualne podejście',
    description:
      'Rozwiązania dostosowane do Twoich potrzeb',
    icon: FaHandsHelping ,
  },
  {
    title: 'Kompleksowa obsługa',
    description:
      'Od doradztwa po montaż i serwis',
    icon: IoMdBuild,
  },
  {
    title: ' Niezawodność i trwałość',
    description:
      'Sprawdzone technologie i wysokiej jakości materiały',
    icon: FaShieldAlt,
  }
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={50} stroke={2} color={theme.colors.yellow[5]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Dlaczego Intelligent Instal?
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
            Zobacz co zapewniamy naszym klientom i dlaczego warto nam zaufać.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
export default FeaturesCards;