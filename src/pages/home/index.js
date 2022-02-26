import { useState } from 'react'
import CardMusica from '../../components/card-musica'
import Header from '../../components/header'
import HeaderHome from '../../components/header-home'
import Player from '../../components/player'
import './home.css'

import enemy from '../../assets/images/capa-enemy.jpg'
import hungria from '../../assets/images/hungria-capa.jpg'
import flow from '../../assets/images/flow.jpg'
import podpah from '../../assets/images/podpah.jpg'

export default function Home() {

  const [categorias, setCategorias] = useState([])


  return (
    <>
      <Header />
      <div className='page'>


        <div className='content'>
        <HeaderHome />

          <div className='row-categoria'>
            <h1>Tocado recentemente</h1>
            <div className='musicas'>
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Enemy' cantor='Imagine Dragons' capa={enemy} />
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Amor e Fé' cantor='Hungria Hip Hop' capa={hungria} />
            </div>
          </div>

          <div className='row-categoria' style={ { marginTop: '15px'} }>
            <h1 style={ {marginBottom: "-8px", fontSize: "1.5em"} }>Programas para conhecer</h1>
            <div className='musicas'>
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Flow Podcast' cantor='Flow Podcast' capa={flow} />
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Podpah' cantor='Podpah' capa={podpah} />
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Flow Podcast' cantor='Flow Podcast' capa={flow} />
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Podpah' cantor='Podpah' capa={podpah} />
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Flow Podcast' cantor='Flow Podcast' capa={flow} />
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Podpah' cantor='Podpah' capa={podpah} />
            </div>
          </div>

          <div className='row-categoria' style={ { marginTop: '15px'} }>
            <h1 style={ {marginBottom: "-8px", fontSize: "1.5em"} }>Por onde começar</h1>
            <div className='musicas'>
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Flow Podcast' cantor='Flow Podcast' capa={flow} />
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Enemy' cantor='Imagine Dragons' capa={enemy} />
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Amor e Fé' cantor='Hungria Hip Hop' capa={hungria} />  <CardMusica style={{ marginTop: '25px' }} nomeMusica='Flow Podcast' cantor='Flow Podcast' capa={flow} />
              <CardMusica style={{ marginTop: '25px' }} nomeMusica='Podpah' cantor='Podpah' capa={podpah} />
            </div>
          </div>

        </div>

      </div>

      <Player />
    </>
  )
}