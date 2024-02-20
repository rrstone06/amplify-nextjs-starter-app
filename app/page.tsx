import React from 'react';
import styled, { FlexDirection } from 'styled-components';

const HomePage: React.FC = () => {
  return (
    <div style={styles.container}>
      <img src={require('./logo.png').default} alt="Logo" style={styles.logo} />
      <h1 style={styles.title}>Welcome to My App</h1>
      <p style={styles.subtitle}>Where amazing things happen</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '100vh',
  },
  logo: {
    width: '150px',
    height: '150px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    color: 'red',
  },
};

export default HomePage;
