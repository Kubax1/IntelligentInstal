import { IconChevronDown } from "@tabler/icons-react";
import {
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderMegaMenu.module.css";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import Logo from "./images/logo.png";

const mockdata = [
  {
    title: "Instalacje grzewcze",
    href: "/instalacje-grzewcze",
  },
  {
    title: "Instalacje sanitarne",
    href: "/instalacje-sanitarne",
  },
  {
    title: "Pompy ciepła",
    href: "/pompy-ciepła",
  },
  {
    title: "Odnawialne źródła energii",
    href: "/odnawialne-źródła-energii",
  },
  {
    title: "Termomodernizacje",
    href: "/termomodernizacja",
  },
  {
    title: "Stacje uzdatniania wody",
    href: "/stacje-uzdatniania-wody",
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Box pb={0}>
      <div
        className={classes.topStripe}
        style={{
          backgroundColor: "yellow",
          color: "black",
          textAlign: "center",
          padding: "7px 0",
          fontSize: "20px",
        }}
      >
        <Text size="sm" style={{ fontSize: "18px" }}>
          <a href="tel:+123456789">
            <FaPhone
              style={{ fontSize: "18px", position: "relative", top: "3px" }}
            />{" "}
            +48 123 456 789
          </a>
          {" | "}
          <a href="mailto:intelligentinstalgroup@gmail.com">
            <FaEnvelope
              style={{ fontSize: "18px", position: "relative", top: "3px" }}
            />{" "}
            intelligentinstalgroup@gmail.com
          </a>
        </Text>
      </div>
      <header className={classes.header}>
        <Group justify="space-between" h="40%">
          <a href="/">
            <img className={classes.logoImg} src={Logo} alt="Logo" />
          </a>
          <Group h="100%" visibleFrom="sm">
            <a href="/o-firmie" className={classes.link}>
              O firmie
            </a>
            <HoverCard
              width={300}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <button
                  type="button"
                  className={classes.link}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  <Center inline>
                    <Box component="span" mr={5}>
                      Usługi
                    </Box>
                    <IconChevronDown size={16} color={theme.colors.blue[6]} />
                  </Center>
                </button>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Usługi</Text>
                </Group>
                <Divider my="sm" />

                <SimpleGrid cols={1} spacing={10}>
                  {mockdata.map((item) => (
                    <a key={item.title} href={item.href}>
                      {item.title}
                    </a>
                  ))}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div></div>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="/realizacje" className={classes.link}>
              Realizacje
            </a>
            <a href="/kontakt" className={classes.link}>
              Kontakt
            </a>
          </Group>

          <Group visibleFrom="sm">
            <a href="/kontakt">
              <Button className={classes.offerButton}>Zapytaj o ofertę</Button>
            </a>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="70%"
        padding="md"
        title="Intelligent Instal"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <a href="/o-firmie" className={classes.link}>
            O firmie
          </a>

          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Usługi
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>
            {mockdata.map((item) => (
              <a href={item.href} key={item.title} className={classes.link}>
                {item.title}
              </a>
            ))}
          </Collapse>
          <a href="/realizacje" className={classes.link}>
            Realizacje
          </a>
          <a href="/kontakt" className={classes.link}>
            Kontakt
          </a>

          <Divider my="sm" />
          <Group justify="center" grow pb="xl" px="md">
            <a href="/kontakt">
              <Button className={classes.offerButtonSmall}>
                Zapytaj o ofertę
              </Button>
            </a>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
export default HeaderMegaMenu;
