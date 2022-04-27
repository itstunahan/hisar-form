import React, { useState } from 'react';
import {
  Card,
  Page,
  DisplayText,
  FormLayout,
  Form,
  TextField,
  Button,
} from '@shopify/polaris';
import { useFormspark } from '@formspark/use-formspark';

const FORMSPARK_FORM_ID = '9y0ebmf1';

function App() {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [name, setName] = useState('');
  const handleNameChange = (value) => {
    setName(value);
  };

  const [phoneNumber, setPhoneNumber] = useState('5');
  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const [job, setJob] = useState('');
  const handleJobChange = (value) => {
    setJob(value);
  };

  const [businessAdress, setBusinessAdress] = useState('');
  const handleBusinessAdressChange = (value) => {
    setBusinessAdress(value);
  };

  const [yearsYoWereInHisar, setYearsYoWereInHisar] = useState('');
  const handleYearsYoWereInHisarChange = (value) => {
    setYearsYoWereInHisar(value);
  };

  const [message, setMessage] = useState('');
  const handleMessageChange = (value) => {
    setMessage(value);
  };

  const handleSubmit = async (e) => {
    if (
      name.length === 0 ||
      phoneNumber.length !== 10 ||
      job.length === 0 ||
      businessAdress.length === 0 ||
      yearsYoWereInHisar.length === 0
    ) {
      return alert(
        'Gerekli alanları eksiksiz ve doğru biçimde doldurduğunuzdan emin olun!'
      );
    }

    await submit({
      Ad_Soyad: name,
      Telefon_Numarası: phoneNumber,
      Meslek: job,
      İş_Adresi: businessAdress,
      Hisar_da_Bulunduğunuz_Yıllar: yearsYoWereInHisar,
      Mesaj: message,
    });
    alert('Form başarılı bir şekilde gönderildi.');

    setName('');
    setPhoneNumber('5');
    setJob('');
    setBusinessAdress('');
    setYearsYoWereInHisar('');
    setMessage('');
  };

  return (
    <Page>
      <Card>
        <Card.Section>
          <DisplayText size="small">Manevi Sekinetin Hasıl Olduğu</DisplayText>
          <br />
          <DisplayText element="h1" size="extraLarge">
            Hisar Talebe Yurdu
          </DisplayText>
          <br />
          <DisplayText size="small">Kayıt Formu</DisplayText>
        </Card.Section>
        <Card.Section>
          <Form onSubmit={handleSubmit}>
            <FormLayout>
              <TextField
                requiredIndicator
                value={name}
                onChange={handleNameChange}
                label="Adınız Soyadınız: "
                type="text"
              />
              <TextField
                requiredIndicator
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                label="Telefon Numaranız: "
                maxLength="10"
                minLength="10"
                type="text"
                showCharacterCount
                prefix="+90"
              />
              <TextField
                requiredIndicator
                value={job}
                onChange={handleJobChange}
                label="Meslek: "
                type="text"
              />
              <TextField
                requiredIndicator
                value={businessAdress}
                onChange={handleBusinessAdressChange}
                label="İş Adresiniz: "
                type="text"
                multiline={4}
              />
              <TextField
                requiredIndicator
                value={yearsYoWereInHisar}
                onChange={handleYearsYoWereInHisarChange}
                label="Hisar'da Bulunduğunuz Yıllar: "
                type="text"
              />
              <TextField
                value={message}
                onChange={handleMessageChange}
                label="Bize İletmek İstediğiniz Varsa Mesajınız: "
                type="text"
              />
              <Button fullWidth primary submit>
                Gönder
              </Button>
            </FormLayout>
          </Form>
        </Card.Section>
      </Card>
    </Page>
  );
}

export default App;
