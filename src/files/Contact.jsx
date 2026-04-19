import * as React from 'react';
import { useState } from 'react';  
import emailjs from '@emailjs/browser';

import {
  Button,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
  Checkbox,
} from '@mantine/core';
import classes from './ContactUs.module.css';
import { ContactIconsList } from './ContactIcons';

function App() {
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(""); 

  const sendEmail = (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const name = document.getElementById("name").value;
    const time = new Date().toLocaleString(); 

    setError("");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        setError("Proszę podać poprawny adres email.");
        return;
    }
    if (!message.trim() || message.length > 1000) {
        setError("Wiadomość nie może być pusta i musi mieć maksymalnie 1000 znaków.");
        return;
    }
    const selectedOptions = [];
    const checkboxes = document.querySelectorAll("input[type=checkbox]:checked");

    checkboxes.forEach((checkbox) => {
        if (checkbox.name !== "termsAndConditions") {
            selectedOptions.push(checkbox.labels[0].innerText);
        }
    });

    if (selectedOptions.length === 0) {
        setError("Proszę wybrać przynajmniej jedną opcję.");
        return;
    }

    if (!document.getElementById("termsAndConditions").checked) {
        setError("Musisz zaakceptować Regulamin oraz Politykę Prywatności.");
        return;
    }
    const selectedIssues = selectedOptions.join("\n- ");

    const formData = {
        email_from: email,
        name,
        time,
        message,
        selectedIssues: selectedIssues ? `- ${selectedIssues}` : "" 
    };

    emailjs.send('exampledata', 'exampledata', formData, 'exampledata')
        .then(() => {
            setIsSent(true);
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            document.getElementById("name").value = "";
            checkboxes.forEach((checkbox) => (checkbox.checked = false));
        })
        .catch((error) => {
            setError("Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.");
        });
};

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>Skontaktuj się z nami!</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Chciałbyś dowiedzieć się więcej na temat oferty? Napisz do nas wiadomość!
          </Text>

          <ContactIconsList />
          <Group mt="xl"></Group>
        </div>
        <div className={classes.form}>
          <form onSubmit={sendEmail}>
            <TextInput
              label="Email"
              placeholder="twój@email.com"
              required
              id="email"
              name="email_from"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Imię"
              placeholder="Jan"
              mt="md"
              name="name"
              id="name"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Wiadomość"
              placeholder="Chciałbym zamówić usługę ogrzewania"
              minRows={4}
              mt="md"
              name="message"
              id="message"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Checkbox
              label="Instalacje grzewcze"
              name="heatingSystems"
              id="heatingSystems"
              style={{ marginTop: '5px' }}
            />
            <Checkbox
              label="Instalacje sanitarne"
              name="sanitarySystems"
              id="sanitarySystems"
              style={{ marginTop: '5px' }}
            />
            <Checkbox
              label="Pompy ciepła"
              name="heatPumps"
              id="heatPumps"
              style={{ marginTop: '5px' }}
            />
            <Checkbox
              label="Odnawialne źródła energii"
              name="renewableEnergy"
              id="renewableEnergy"
              style={{ marginTop: '5px' }}
            />
            <Checkbox
              label="Stacje uzdatniania wody"
              name="waterTreatmentStations"
              id="waterTreatmentStations"
              style={{ marginTop: '5px' }}
            />
            <Checkbox
              label="Piece i kotły"
              name="stovesAndBoilers"
              id="stovesAndBoilers"
              style={{ marginTop: '5px' }}
            />
            <Checkbox
              label="*Zapoznałem się z informacją, że podane dane będą wykorzystane wyłącznie do wysłania wiadomości."
              name="termsAndConditions"
              id="termsAndConditions"
              required
              style={{ marginTop: '5px' }}
            />

            {error && (
              <Text color="red" align="center" mt="md">
                {error}
              </Text>
            )}
            {isSent && (
              <Text color="green" align="center" mt="md">
                Twoja wiadomość została wysłana pomyślnie! Dziękujemy za kontakt.
              </Text>
            )}
            &nbsp;
            <Group justify="flex-end" mt="md">
              <Button className={classes.control} type="submit" disabled={isSent}>Wyślij</Button>
            </Group>
          </form>
        </div>
      </SimpleGrid>
    </div>
  );
}

export default App;
