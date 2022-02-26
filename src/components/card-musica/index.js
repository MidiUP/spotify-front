import './card-musica.css'
import play from '../../assets/images/play.svg'
import enemy_music from '../../assets/music/musica.mp3'
import { useState } from 'react'

export default function CardMusica({ style, capa, nomeMusica, cantor }) {

  const [musica, setMusica] = useState(new Audio(enemy_music))
  const [playMusic, setPlayMusic] = useState(false)

  const changePlayMusic = () => {
    if (!playMusic) {
      musica.play()
      setPlayMusic(!playMusic)
    } else {
      musica.pause()
      setPlayMusic(!playMusic)
    }
  }

  return (
    <div className='card-musica' style={style}>
      <div className='imagem-album'>
        <img src={capa} />
        <button className='card-musica-play' onClick={changePlayMusic}>
          <img src={play} />
        </button>
      </div>
      <h6>{nomeMusica}</h6>
      <span>{cantor}</span>
    </div>
  )
}