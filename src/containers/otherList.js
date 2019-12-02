const domain = 'http://localhost:8080/images/projects';

export default () => [
  {
    id: `particle-simulator`,
    name: 'Particle Simulator',
    type: 'Falling Sand-like Particle Demo',
    desc: `Physics and pixel drawing done completely using Unity compute shaders!`,
    desc2: `After spending some time tinkering with graphics shaders, I thought a falling sand game could be a great application to dip my toes into compute shaders... The results were awesome! If you're curious how I handled physics simulations without conditional branching see the shader code sample below the video.`,
    bullets: [
`Wrote all scripts for the game.`,
`Made a highly modular, state-based interaction system. (see code sample below)`,
`Did all Unity editor work`
    ],
    mainImage: `simul/fallingsand.png`,
    mainImageOrientation: "left",
    images: [
      {
        src: `${domain}/the/the5.png`,
        thumbnail: `${domain}/the/the5.png`,
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
  },
]

