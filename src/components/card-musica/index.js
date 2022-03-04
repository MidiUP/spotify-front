import { useDispatch, useSelector } from 'react-redux'

import './card-musica.css'
import play from '../../assets/images/play.svg'
import pause from '../../assets/images/pause.svg'
import { useEffect, useState } from 'react'
import { ChangeStateMusic } from '../../utils/changeStatusMusic'

export default function CardMusica({ style, capa, nomeMusica, cantor, musica, id }) {

  const dispatch = useDispatch()
  const musicaAtual = useSelector(state => state.player)
  const [viewButtonPause, setViewButtonPause] = useState(false)

  const PlayMusic = () => {
    if(musicaAtual[0].id === id){
      changePlay()
    }else{
      if (musicaAtual.length > 0) {
        musicaAtual[0].audio.pause()
      }
      const audio = new Audio(musica)
      dispatch({
        type: 'PLAY_MUSIC',
        musica: Object.assign({ capa, nomeMusica, cantor, audio, id })
      })
    }

  }

  useEffect(() => {
    if (musicaAtual[0]) {
      if (!musicaAtual[0].audio.paused && musicaAtual[0].id === id) {
        setViewButtonPause(true)
      } else {
        setViewButtonPause(false)
      }
    } else {
      setViewButtonPause(false)
    }
  }, [musicaAtual[0], musicaAtual[1]])

  const changePlay = () => {
    ChangeStateMusic(musicaAtual[0])
    dispatch({
      type: 'SET_STATUS_MUSIC'
    })
  }

  return (
    <div className='card-musica' style={style}>
      <div className='imagem-album'>
        <img src={capa} />
        {!viewButtonPause &&
          <button className='card-musica-play' onClick={PlayMusic}>
            <img src={play} />
          </button>
        }
        {viewButtonPause &&
          <button className='card-musica-pause' onClick={changePlay}>
            <img src={pause} />
          </button>
        }
      </div>
      <h6>{nomeMusica}</h6>
      <span>{cantor}</span>
    </div>
  )
}