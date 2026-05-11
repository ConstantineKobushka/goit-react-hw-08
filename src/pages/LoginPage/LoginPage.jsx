import Container from '../../components/Container/Container';
import LoginForm from '../../components/LoginForm/LoginForm';
import Main from '../../components/Main/Main';
import Section from '../../components/Section/Section';

const LoginPage = () => {
  return (
    <Main>
      <Section>
        <Container>
          <LoginForm />
        </Container>
      </Section>
    </Main>
  );
};

export default LoginPage;
