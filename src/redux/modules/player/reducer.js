import produce from 'immer'

export const player = ( state = [], action ) => {
  switch(action.type){
    case 'PLAY_MUSIC':
      action.musica.audio.volume = state[1].volume
      action.musica.audio.play()
      return [action.musica, Object.assign({}, state[1], { play: true, duracao: action.musica.audio.duration }) ]

    case 'POPULAR_MUSIC':
      return [ action.musica, { play: false, volume: 50/100, duracao: action.musica.audio.duration} ]

    case 'SET_STATUS_MUSIC':
      return [state[0], Object.assign({}, state[1], { play: !state[1].play }) ]

    case 'SET_VOLUME':
      return [state[0], Object.assign({}, state[1], { volume: action.volume})]

    default:
      return []
  }
}