export function ChangeStateMusic(music) {
  if(music){
    if(music.audio.paused){
      music.audio.play()
    }else{
      music.audio.pause()
    }
  }
}