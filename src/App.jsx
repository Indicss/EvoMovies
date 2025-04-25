import { useState } from 'react';
import Header from './components/Header/Header';
import { MovieComponent } from './components/MovieComponent/MovieComponent';
import { LoginForm } from './components/LoginForm/LoginForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <LoginForm />
    </>
  );
}

export default App;
