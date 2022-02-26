import './header-home.css'
import setaDireita from '../../assets/images/seta-direita.svg'
import setaEsquerda from '../../assets/images/seta-esquerda.svg'
import setaMore from '../../assets/images/seta-more.svg'
import user from '../../assets/images/user.svg'

export default function HeaderHome() {
  return (
    <div className='header-home'>
      <div className='icons'>
        <button>
          <img src={setaEsquerda} />
        </button>
        <button>
          <img src={setaDireita} />
        </button>
      </div>

      <div className='area-user'>
        <button className='upgrade'>
          Faça upgrade
        </button>
        <button className='usuario'>
          <div className='icon-user'>
            <img src={user} />
          </div>
          <h6>Mateus</h6>
          <img src={setaMore} style={ { paddingRight: '5px'} } />
        </button>
      </div>
    </div>
  )
}