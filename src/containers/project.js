import React from 'react'
import games from './projectList'
import Gallery from 'react-grid-gallery'

class Project extends React.Component {
  onSubmit = () => {
    this.props.history.push('/')
  }
  render() {
    let props = this.props;
    let game = games().filter(({ id }) => id === props.match.params.id)

    return (
      <div className="game">
        {game.map(( {name, images, video, type, desc2, bullets, code, playLink, gitLink } ) => {
          if(images)
          {
            images = 
              <div className='gallery'>
                <Gallery images={images} float='left'/>
              </div>
          }
          if(video)
          {
            video = <iframe title="video" src={video} frameBorder='0' width='100%' height='600'></iframe>

          }
          let paragraphs;
          if(bullets)
          {
            paragraphs = bullets.map((para) => {
              return (
                <li>
                  {para}
                </li>
              )
            })
          }
          if(playLink)
          {
              playLink = <div align='center'>
                {
                  playLink !== undefined ?
                  <a href={playLink}>
                    Play the game!
                  </a> : null
                }
              </div>
          }
          if(code)
          {
            code = <iframe title="code" src={code} frameBorder='0' width='100%' height='600'></iframe>
          }
          return (
            <div className="portfolioItem">
              { images }
              <br/>
              <h3 align="center">
                { name }
              </h3>
              <h6>
                <i>
                  { type }
                </i>
              </h6>
              <br/>
              <p align='center'>
                { desc2 }
              </p>
              <ul>
                { paragraphs }
              </ul>
              {playLink}
              <br/>
              { video }
              <br/>
              <br/>
              { code }
            </div>
          )
        })}

        <br/>
        <p>
        </p>
        <p>
        </p>
        <p>
        </p>
        <br/>
        <br/>
    </div>
    )
  }
}
export default Project

