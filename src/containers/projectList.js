const domain = 'http://localhost:8080/images/school';

export default () => [
  {
    id: `flaws-of-gravity`,
    name: 'Flaws of Gravity',
    type: 'First-Person Puzzle-Platformer',
    flavor: 'Released on Steam Greenlight!',
    desc: `A game where you manipulate the direction of gravity in order to solve complex puzzles and escape an ominous labyrinth.`,
    desc2: `Flaws of Gravity is a game I worked on during my senior year at the University of Utah. The project required an ample amount of physics and linear algebra coding. Some of my contributions towards this project:`,
    bullets: [
`Did all scripting on the game's prototype.`,
`Implemented the core physics-based gameplay mechanic.`,
`Setup all gameplay sound effects.`
    ],
    images: [
      {
        src: `${domain}/fog5.jpg`,
        thumbnail: `${domain}/fog5.jpg`,
        thumbnailWidth: 40,
        thumbnailHeight: 40,
      },
      {
        src: `${domain}/fog2.jpg`,
        thumbnail: `${domain}/fog2.jpg`,
        thumbnailWidth: 40,
        thumbnailHeight: 40,
      },
      {
        src: `${domain}/fog.jpg`,
        thumbnail: `${domain}/fog.jpg`,
        thumbnailWidth: 40,
        thumbnailHeight: 40,
      },
      {
        src: `${domain}/fog3.jpg`,
        thumbnail: `${domain}/fog3.jpg`,
        thumbnailWidth: 40,
        thumbnailHeight: 40,
      },
    ],
    playLink: `https://store.steampowered.com/app/628700/The_Flaws_of_Gravity/`,
    gameLink: `/project/flaws-of-gravity`
  },
  {
    id: `through-her-eyes`,
    name: 'Through Her Eyes',
    type: 'First-Person Interactive Story',
    desc: `Interact with the world and see a story unfold all while dealing with an inhibiting eye disorder.`,
    desc2: `Through Her Eyes is an alternative game I worked on about the difficulty of living day-to-day with macular degeneration.`,
    bullets: [
`Wrote all scripts for the game.`,
`Made a highly modular, state-based interaction system. (see code sample below)`,
`Did all Unity editor work`
    ],
    mainImage: `throughhereyes.png`,
    mainImageOrientation: "left",
    images: [
      {
        src: `${domain}/the5.png`,
        thumbnail: `${domain}/the5.png`,
        thumbnailWidth: 40,
        thumbnailHeight: 40,
      },
      {
        src: `${domain}/the2.png`,
        thumbnail: `${domain}/the2.png`,
        thumbnailWidth: 40,
        thumbnailHeight: 40,
      },
      {
        src: `${domain}/the7.png`,
        thumbnail: `${domain}/the7.png`,
        thumbnailWidth: 40,
        thumbnailHeight: 40,
      },
      {
        src: `${domain}/the1.png`,
        thumbnail: `${domain}/the1.png`,
        thumbnailWidth: 40,
        thumbnailHeight: 40,
      },
    ],
    gitLink: `https://github.com/Yawmus/ThroughHerEyes`, 
    playLink: `http://yawmus.github.io/game/index.html`,
    gameLink: `/project/through-her-eyes`
  },
  {
    id: `particle-simulator`,
    name: 'Falling Sand on the GPU',
    desc: `Physics and pixel drawing done completely using Unity compute shaders!`,
    desc2: `After spending some time tinkering with graphics shaders, I thought a falling sand game could be a great application to dip my toes into compute shaders... The results were awesome! If you're curious how I handled physics simulations without conditional branching see the shader code sample below the video.`,
    mainImage: `simul/fallingsand.png`,
    mainImageOrientation: "left",
    video: `https://drive.google.com/file/d/16UUYVAyDVHuwYNjcR__jcy7OvUzCh4_A/preview?usp=sharing`,
    code: `https://docs.google.com/document/d/1w3dqEILRNSBseRSipE4EZQojkw3S2ZYMmFnY1MOmius/preview?usp=sharing`,
    gitLink: `https://github.com/Yawmus/ThroughHerEyes`, 
    gameLink: `/project/particle-simulator`
  },
  {
    id: `razdraz-deathmatch`,
    name: 'Razdraz Deathmatch',
    type: '3D Top-Down Multiplayer Deathmatch',
    desc: `Interact with the world and see a story unfold all while dealing with an inhibiting eye disorder.`,
    desc2: `Razdraz Deathmatch is a Unity game I worked on that focused primarily on multiplayer and 3D car physics.`,
    bullets: [
`Did all coding on the project`,
`Designed the game. (see pitch document below)`,
`Did all Unity editor work`
    ],
    mainImage: `raz/raz1.png`,
    mainImageOrientation: "right",
    images: [
      {
        src: `${domain}/raz/raz2.png`,
        thumbnail: `${domain}/raz2.png`,
        thumbnailWidth: 40,
        thumbnailHeight: 40,
      },
      {
        src: `${domain}/raz/raz3.png`,
        thumbnail: `${domain}/raz/raz3.png`,
        thumbnailWidth: 40,
        thumbnailHeight: 40,
      },
      {
        src: `${domain}/raz/raz4.png`,
        thumbnail: `${domain}/raz/raz4.png`,
        thumbnailWidth: 40,
        thumbnailHeight: 40,
      },
      {
        src: `${domain}/raz/raz5.png`,
        thumbnail: `${domain}/raz/raz5.png`,
        thumbnailWidth: 40,
        thumbnailHeight: 40,
      },
      //`raz4.png`,
      //`raz5.png`
    ],
    gitLink: `https://github.com/Yawmus/RazdrazDeathmatch`, 
    gameLink: `/project/razdraz-deathmatch`
  }
]
