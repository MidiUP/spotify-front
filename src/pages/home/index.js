import Header from '../../components/header'
import HeaderHome from '../../components/header-home'
import Player from '../../components/player'
import './home.css'

export default function Home() {
  return (
    <>
      <Header />
      <div className='page'>
        <HeaderHome />
        <div className='content'>
        </div>
      </div>
      <Player />
    </>
  )
}