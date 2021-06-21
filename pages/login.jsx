import styled from 'styled-components';

import Head from 'next/head';
import { auth, provider } from '../lib/firebase';

import { Button } from '@material-ui/core';

const Login = () => {
  const signIn = async () => {
    await auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="https://img.icons8.com/cotton/512/000000/whatsapp--v4.png" />
        <Button onClick={signIn} variant="outlined">
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 50px;
`;
