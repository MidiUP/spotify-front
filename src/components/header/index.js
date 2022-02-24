import './header.css'
import logo from '../../assets/images/logo.svg'
import home from '../../assets/images/home.svg'
import lupa from '../../assets/images/lupa.svg'
import biblioteca from '../../assets/images/biblioteca.svg'
import more from '../../assets/images/more.svg'
import coracao from '../../assets/images/coracao.svg'
import download from '../../assets/images/download.svg'

export default function Header() {
  return (
    <div className='header'>
      <img src={logo} alt='logo' id='logo' />

      <nav className='menu'>
        <div className='item-menu'>
          <img src={home}></img>
          <span style={{ color: '#FFF', fontWeight: 'bold' }}>Início</span>
        </div>
        <div className='item-menu'>
          <img src={lupa}></img>
          <span style={{ color: '#B3B3B3', fontWeight: 'bold' }}>Buscar</span>
        </div>
        <div className='item-menu'>
          <img src={biblioteca}></img>
          <span style={{ color: '#B3B3B3', fontWeight: 'bold' }}>Sua Biblioteca</span>
        </div>
      </nav>

      <div className='item-menu'>
        <div className='icon-more'>
          <img src={more} />
        </div>
        <span style={{ color: '#B3B3B3', fontWeight: 'bold' }}>Criar playlist</span>
      </div>
      <div className='item-menu' style={{ marginBottom: 0 }}>
        <div className='icon-more' style={{ background: 'linear-gradient(135deg,#450af5,#c4efd9)' }}>
          <img src={coracao} />
        </div>
        <span style={{ color: '#B3B3B3', fontWeight: 'bold' }}>Músicas Curtidas</span>
      </div>

      <div className='divisao'>
      </div>

      <div className='download'>
        <img src={download} />
        <span className='instalar'>Instalar aplicativo</span>
      </div>

    </div>
  )
}