import styled from 'styled-components'

export const VolumeBar = styled.input`
  -webkit-appearance: none;
  width: 93px;
  height: 4px;
  background: #535353;
  border-radius: 5px;
  background-image: linear-gradient(#B3B3B3, #B3B3B3);
  background-size: ${props => `${props.widthPreenchimento}%`} 100%;
  background-repeat: no-repeat;

  &:hover{
    ::-webkit-slider-thumb {
      height: 12px;
      width: 12px;
    }
    background-image: linear-gradient(#1db954, #1db954);
  }
  
  ::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 0px;
  width: 0px;
  border-radius: 50%;
  background: #FFFFFF;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
  cursor: default;
}

  ::-webkit-slider-thumb:hover {
  height: 12px;
  width: 12px;
}
`

export const MusicBar = styled.input`
  -webkit-appearance: none;
  width: 85%;
  min-width: 190px;
  height: 4px;
  background: #535353;
  border-radius: 5px;
  background-image: linear-gradient(#B3B3B3, #B3B3B3);
  background-size: ${props => `${props.widthPreenchimento}%`} 100%;
  background-repeat: no-repeat;
  margin: 0 10px;

  &:hover{
    ::-webkit-slider-thumb {
      height: 12px;
      width: 12px;
    }
    background-image: linear-gradient(#1db954, #1db954);
  }
  
  ::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 0px;
  width: 0px;
  border-radius: 50%;
  background: #FFFFFF;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
  cursor: default;
}

  ::-webkit-slider-thumb:hover {
  height: 12px;
  width: 12px;
}
`