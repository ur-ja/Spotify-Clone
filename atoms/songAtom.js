import { atom } from 'recoil'

export const currentTrackIdState = atom({
  key: 'currentTrackIdState', // unique Id wrt other atom/selectors
  default: null, // default value or initial value
})

export const isPlayingState = atom({
  key: 'isPlayingState',
  default: false,
})
