import { Button, Image, Text, TextInput, Title } from "@mantine/core";
import image from "./images/solary2.png";
import classes from "./AboutUs.module.css";

export function EmailBanner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>
          <span style={{ color: "yellow" }}>Intelligent Instal</span> - Twoje
          Nowoczesne instalacje
        </Title>
        <Text className={classes.description}>
          Intelligent Instal to firma oferująca nowoczesne rozwiązania
          instalacyjne zapewniające komfort, oszczędność i ekologię.
          <br></br>Dzięki doświadczeniu i innowacjom tworzymy niezawodne systemy
          dostosowane do potrzeb klientów.
        </Text>
      </div>
      <Image src={image} className={classes.image} />
    </div>
  );
}
export default EmailBanner;
