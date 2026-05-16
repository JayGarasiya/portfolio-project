export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 40
  },

  whileInView: {
    opacity: 1,
    y: 0
  },

  transition: {
    duration: 0.7
  },

  viewport: {
    once: true
  }
}

export const fadeLeft = {
  initial: {
    opacity: 0,
    x: -50
  },

  whileInView: {
    opacity: 1,
    x: 0
  },

  transition: {
    duration: 0.7
  },

  viewport: {
    once: true
  }
}

export const fadeRight = {
  initial: {
    opacity: 0,
    x: 50
  },

  whileInView: {
    opacity: 1,
    x: 0
  },

  transition: {
    duration: 0.7
  },

  viewport: {
    once: true
  }
}

export const floating = {
  animate:{
    y:[0,-20,0]
  },

  transition:{
    repeat:Infinity,
    duration:4
  }
}