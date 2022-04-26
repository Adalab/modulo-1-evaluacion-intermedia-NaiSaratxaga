import logoAdalab from '../images/logo.png';
import '../styles/App.scss';

const App = () => {
  return (
    <>
      <header className='header'>
        <div className='logo'>
          <a
            href={`https://adalab.es/`}
            target='_blank'
            alt='Adalab web'
            rel='noreferrer'
          >
            <img src={logoAdalab} alt='Logo Adalab' title='Logo Adalab' />
          </a>
        </div>

        <nav>
          <ul className='menu'>
            <li className='link'>
              <a
                href={`https://adalab.es/`}
                target='_blank'
                alt='Adalab Blog'
                title='Link Blog'
                rel='noreferrer'
              >
                Blog
              </a>
            </li>
            <li className='link'>
              <a
                href={`https://adalab.es/`}
                target='_blank'
                alt='Adalab Contacto'
                title='Link Contact'
                rel='noreferrer'
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className='main'>
        <h1 className='title'>Creando diversidad digital</h1>
      </main>
    </>
  );
};

export default App;
