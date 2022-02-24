import './player.css'
import capa from '../../assets/images/capa-enemy.jpg'
import fixar from '../../assets/images/fixar.svg'
import coracaoVazio from '../../assets/images/coracao-vazio.svg'
import voltar from '../../assets/images/voltar.svg'
import previous from '../../assets/images/previous.svg'
import next from '../../assets/images/next.svg'
import aleatorio from '../../assets/images/aleatorio.svg'
import play from '../../assets/images/play.svg'
import mic from '../../assets/images/mic.svg'
import fila from '../../assets/images/fila.svg'
import som from '../../assets/images/som.svg'
import volume from '../../assets/images/volume.svg'

export default function Player(){
  return(
    <div className='player'>
      <div className='musica-atual'>
        <img src={capa} />
        <div className='info-musica'>
          <h3>Enemy</h3>
          <span>Imagine Dragons</span>
        </div>
        <div className='icons-info-musica'>
          <img src={coracaoVazio} id='coracao'/>
          <img src={fixar} id='fixar'/>
        </div>
      </div>

    <div className='gerenciar-player'>

      <div className='controle-musicas'>
        <button className='botoes-secundarios'>
          <img src={aleatorio} />
        </button>
        <button className='botoes-primarios'>
          <img src={previous} />
        </button>
        <button className='botao-play'>
          <img src={play} />
        </button>
        <button className='botoes-primarios'>
          <img src={next} />
        </button>
        <button className='botoes-secundarios'>
          <img src={voltar} />
        </button>
      </div>

    <div className='duracao-musica'>
      <span>1:02</span>
      <div className='duracao-total-musica'>
        <div className='duracao-atual-musica'></div>
      </div>
      <span>2:37</span>
    </div>

    </div>

    <div className='mais-opcoes'>
      <img src={mic} />
      <img src={fila} />
      <img src={som} />
      <img src={volume} />
      <div className='volume'>
        <div className='volume-atual'></div>
      </div>
    </div>

    </div>
  )
}