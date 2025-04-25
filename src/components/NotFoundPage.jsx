import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <>
      <h1>Pagina nu este găsită!</h1>
      <Link to="/">
        <button>Spre pagina principală</button>
      </Link>
    </>
  );
};
