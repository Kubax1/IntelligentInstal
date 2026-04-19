import { Paper, Text, TypographyStylesProvider, Group } from '@mantine/core';
import classes from './UserOpinions.module.css';

export function CustomerOpinions() {
  const opinions = [
    {
      name: "Marek K.",
      content: '<p>Firma <strong>Intelligent Instal</strong> zainstalowała u mnie pompę ciepła. Cały proces przebiegł bardzo sprawnie i jestem bardzo zadowolony z efektu końcowego.</p>'
    },
    {
      name: "Anna N.",
      content: '<p>Zdecydowałam się na <strong>termomodernizację</strong> domu z Intelligent Instal. Ekipa była punktualna, czysta i bardzo kompetentna a efekt końcowy przekroczył moje oczekiwania.</p>'
    },
    {
      name: "Tomasz W.",
      content: '<p>Instalacja systemu <strong>odnawialnych źródeł energii</strong> przez Intelligent Instal to była najlepsza decyzja. Panele słoneczne działają bez zarzutu, a obsługa klienta zawsze służy pomocą.</p>'
    }
  ];
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} style={{ color:'green', fontSize: '26px' }}>
          ★
        </span>
      );
    }
    return <div className={classes.stars}>{stars}</div>;
  };
  return (
    <div className={classes.container}>
      <Text   ta="center" className={classes.title}>
        Co o nas mówią klienci
      </Text>
      
      <div className={classes.opinionsContainer}>
        {opinions.map((opinion, index) => (
          <Paper key={index} withBorder radius="md" className={classes.comment}>
            <Group>
              <div>
   <Text fw={600}>{opinion.name}</Text>
                {renderStars(opinion.rating)}
              </div>
            </Group>
            <TypographyStylesProvider className={classes.body}>
              <div
                className={classes.content}
                dangerouslySetInnerHTML={{
                  __html: opinion.content,
                }}
              />
            </TypographyStylesProvider>
          </Paper>
        ))}
      </div>
    </div>
  );
}

export default CustomerOpinions;