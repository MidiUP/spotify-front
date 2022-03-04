import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CardMusica from '../../components/card-musica'
import Header from '../../components/header'
import HeaderHome from '../../components/header-home'
import Player from '../../components/player'
import './home.css'

import enemy from '../../assets/images/capa-enemy.jpg'
import hungria from '../../assets/images/hungria-capa.jpg'
import flow from '../../assets/images/flow.jpg'
import podpah from '../../assets/images/podpah.jpg'

import enemy_music from '../../assets/music/musica.mp3'

export default function Home() {

  const [categorias, setCategorias] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'POPULAR_MUSIC',
      musica: Object.assign({ capa: enemy, nomeMusica: 'Enemy', cantor: 'Imagine Dragons', audio: new Audio(enemy_music), id: 0 })
    })
  }, [])


  return (
    <>
      <Header />
      <div className='page'>


        <div className='content'>
          <HeaderHome />

          <div className='row-categoria'>
            <h1>Tocado recentemente</h1>
            <div className='musicas'>
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Enemy' cantor='Imagine Dragons' capa={enemy} musica={enemy_music} id={1} />
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Amor e Fé' cantor='Hungria Hip Hop' capa={hungria} musica={enemy_music} id={2} />
            </div>
          </div>

          <div className='row-categoria' style={{ marginTop: '15px' }}>
            <h1 style={{ marginBottom: "-8px", fontSize: "1.5em" }}>Programas para conhecer</h1>
            <div className='musicas'>
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Flow Podcast' cantor='Flow Podcast' capa={flow} musica={enemy_music} id={3}/>
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Podpah' cantor='Podpah' capa={podpah} musica={enemy_music} id={4}/>
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Flow Podcast' cantor='Flow Podcast' capa={flow} musica={enemy_music} id={5} />
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Podpah' cantor='Podpah' capa={podpah} musica={enemy_music} id={7}/>
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Flow Podcast' cantor='Flow Podcast' capa={flow} musica={enemy_music} id={8} />
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Podpah' cantor='Podpah' capa={podpah} musica={enemy_music} id={9}/>
            </div>
          </div>

          <div className='row-categoria' style={{ marginTop: '15px' }}>
            <h1 style={{ marginBottom: "-8px", fontSize: "1.5em" }}>Por onde começar</h1>
            <div className='musicas'>
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Flow Podcast' cantor='Flow Podcast' capa={flow} musica={enemy_music} id={10}/>
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Enemy' cantor='Imagine Dragons' capa={enemy} musica={enemy_music} id={11}/>
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Amor e Fé' cantor='Hungria Hip Hop' capa={hungria} musica={enemy_music} id={12}/>
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Flow Podcast' cantor='Flow Podcast' capa={flow} musica={enemy_music} id={13}/>
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Podpah' cantor='Podpah' capa={podpah} musica={enemy_music} id={14}/>
            </div>
          </div>

        </div>

      </div>

      <Player />
    </>
  )
}