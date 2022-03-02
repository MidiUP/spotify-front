import { useDispatch, useSelector } from 'react-redux'

import './card-musica.css'
import play from '../../assets/images/play.svg'

export default function CardMusica({ style, capa, nomeMusica, cantor, musica }) {

  const dispatch = useDispatch()
  const music = useSelector(state => state.player)

  const PlayMusic = () => {
    if (music.length > 0) {
      music[0].audio.pause()
    }
    const audio = new Audio(musica)
    dispatch({
      type: 'PLAY_MUSIC',
      musica: Object.assign({ capa, nomeMusica, cantor, audio })
    })

  }

  return (
    <div className='card-musica' style={style}>
      <div className='imagem-album'>
        <img src={capa} />
        <button className='card-musica-play' onClick={PlayMusic}>
          <img src={play} />
        </button>
      </div>
      <h6>{nomeMusica}</h6>
      <span>{cantor}</span>
    </div>
  )
}