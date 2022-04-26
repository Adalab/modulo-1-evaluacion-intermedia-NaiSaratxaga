import logo from '../images/Logo.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <a
          href={`https://adalab.es/`}
          target='_blank'
          alt='Adalab web'
          rel='noreferrer'
        >
          <img src={logo} alt='Logo Adalab' title='Logo Adalab' />
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
  );
};

export default Header;
