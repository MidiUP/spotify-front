import { useSelector, useDispatch } from 'react-redux'
import { VolumeBar, MusicBar } from './syles'

import './player.css'
import capa from '../../assets/images/capa-enemy.jpg'
import fixar from '../../assets/images/fixar.svg'
import coracaoVazio from '../../assets/images/coracao-vazio.svg'
import voltar from '../../assets/images/voltar.svg'
import previous from '../../assets/images/previous.svg'
import next from '../../assets/images/next.svg'
import aleatorio from '../../assets/images/aleatorio.svg'
import play from '../../assets/images/play.svg'
import pause from '../../assets/images/pause.svg'
import mic from '../../assets/images/mic.svg'
import fila from '../../assets/images/fila.svg'
import som from '../../assets/images/som.svg'
import volume from '../../assets/images/volume.svg'

import * as moment from 'moment'

import { ChangeStateMusic } from '../../utils/changeStatusMusic'
import { useEffect, useState } from 'react'

export default function Player() {

  const dispatch = useDispatch()
  const musicaAtual = useSelector(state => state.player)
  const [currentTimeMusic, setCurrentTimeMusic] = useState('0:00')
  const [timeTotalMusic, setTimeTotalMusic] = useState('0:00')

  const [widthPreenchimentoVolume, setWidthPreenchimentoVolume] = useState(50)
  const [widthPreenchimentoMusicPlayer, setWidthPreenchimentoMusicPlayer] = useState(0)
  const [changingMusic, setChangingMusic] = useState(false)


  const timeupdate = () => {
    let minutes = Math.floor(musicaAtual[0].audio.currentTime / 60);
    let seconds = musicaAtual[0].audio.currentTime - minutes * 60;
    setCurrentTimeMusic(moment({ m: minutes, s: seconds }).format('m:ss'))
    let percentage = musicaAtual[0].audio.currentTime / musicaAtual[0].audio.duration * 100
    setWidthPreenchimentoMusicPlayer(percentage)
  }

  useEffect(() => {
    if (musicaAtual[0]) {
      musicaAtual[0].audio.ontimeupdate = timeupdate
      setTimeout(() => {
        let minutes = Math.floor(musicaAtual[0].audio.duration / 60);
        let seconds = musicaAtual[0].audio.duration - minutes * 60;
        setTimeTotalMusic(moment({ m: minutes, s: seconds }).format('m:ss'))
      }, 100)
    }
  }, [musicaAtual[0]])


  const changePlay = () => {
    ChangeStateMusic(musicaAtual[0])
    dispatch({
      type: 'SET_STATUS_MUSIC'
    })
  }


  const changeVolume = (e) => {
    setWidthPreenchimentoVolume(e.target.value)
    const volumeMusica = e.target.value / 100
    musicaAtual[0].audio.volume = e.target.value / 100
    dispatch({
      type: 'SET_VOLUME',
      volume: volumeMusica
    })
  }

  const changeMusicPlayer = (e) => {
    let minutes = Math.floor(musicaAtual[0].audio.duration * e.target.value / 100 / 60);
    let seconds = (musicaAtual[0].audio.duration * e.target.value / 100) - minutes * 60;
    setCurrentTimeMusic(moment({ m: minutes, s: seconds }).format('m:ss'))
    setWidthPreenchimentoMusicPlayer(e.target.value)
    let tempo = musicaAtual[0].audio.duration * e.target.value / 100
    //musicaAtual[0].audio.currentTime = tempo
  }

  const clickMusicPlayer = (e) => {
    let tempo = musicaAtual[0].audio.duration * e.target.value / 100
    musicaAtual[0].audio.currentTime = tempo
    musicaAtual[0].audio.ontimeupdate = timeupdate
  }

  const mouseDownMusicPlayer = (e) => {
    musicaAtual[0].audio.ontimeupdate = function () {}
  }



  return (
    <div className='player'>
      <div className='musica-atual'>
        <img src={musicaAtual[0] ? musicaAtual[0].capa : capa} />
        <div className='info-musica'>
          <h3>{musicaAtual[0] ? musicaAtual[0].nomeMusica : 'Sem música'}</h3>
          <span>{musicaAtual[0] ? musicaAtual[0].cantor : 'Sem cantor'}</span>
        </div>
        <div className='icons-info-musica'>
          <img src={coracaoVazio} id='coracao' />
          <img src={fixar} id='fixar' />
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
          {musicaAtual[1] ?
            musicaAtual[1].play ?
              <button className='botao-play' onClick={changePlay}>
                <img src={pause} />
              </button> :
              <button className='botao-play' onClick={changePlay}>
                <img src={play} />
              </button>
            :
            <button className='botao-play' onClick={changePlay}>
              <img src={play} />
            </button>}
          <button className='botoes-primarios'>
            <img src={next} />
          </button>
          <button className='botoes-secundarios'>
            <img src={voltar} />
          </button>
        </div>

        <div className='duracao-musica'>
          <span>{currentTimeMusic}</span>
          <MusicBar type='range' widthPreenchimento={widthPreenchimentoMusicPlayer} onChange={changeMusicPlayer} onClick={clickMusicPlayer} onMouseDown={mouseDownMusicPlayer} value={widthPreenchimentoMusicPlayer} />
          <span>{timeTotalMusic ? timeTotalMusic : '0:00'}</span>

        </div>

      </div>

      <div className='mais-opcoes'>
        <img src={mic} />
        <img src={fila} />
        <img src={som} />
        <img src={volume} />
        <VolumeBar type='range' onChange={changeVolume} widthPreenchimento={widthPreenchimentoVolume}>
        </VolumeBar>
        {/* <div className='volume' onMouseMove={(e)=> console.log(e)}>
          <div className='volume-atual'></div>
        </div> */}
      </div>

    </div>
  )
}