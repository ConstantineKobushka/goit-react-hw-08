import Main from '../../components/Main/Main';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <Main>
      <Section>
        <Container>
          <RegistrationForm />
        </Container>
      </Section>
    </Main>
  );
};

export default RegistrationPage;
