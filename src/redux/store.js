import { createStore } from 'redux'
import { musicaAtual } from './modules/player/reducer'

const store = createStore(musicaAtual)

export default store