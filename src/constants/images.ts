export const IMAGES = {
  FALLBACK: {
    GAME: '/images/placeholder-game.jpg'
  }
} as const

export type ImagePaths = typeof IMAGES 