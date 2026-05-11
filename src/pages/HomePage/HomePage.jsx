import AboutPhonebook from '../../components/AboutPhonebook/AboutPhonebook';
import Container from '../../components/Container/Container';
import Main from '../../components/Main/Main';
import Section from '../../components/Section/Section';
import Title from '../../components/Title/Title';

const HomePage = () => {
  return (
    <Main>
      <Section>
        <Container>
          <Title>Phonebook</Title>
          <AboutPhonebook />
        </Container>
      </Section>
    </Main>
  );
};

export default HomePage;
