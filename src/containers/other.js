import React from 'react'
import YouTube from 'react-youtube';
import games from './otherList';
import { Link } from 'react-router-dom'

class Other extends React.Component {
  onSubmit = () => {
    this.props.history.push('/')
  }

  render() {
    const opts = {
      height: '305',
      width: '560',
      playerVars: {
        autoplay: 0,
      },
    };
    let gameList = games();

    return (
      <div className="home">
      <br/>
        {
          gameList.map(( { id, name, mainImage, mainImageOrientation, type, desc, gameLink, playLink } ) => {
            if(playLink)
            {
              playLink = 
                <div align="center">
                  {
                    playLink !== undefined ?
                    <a href={playLink}>
                      Play the game!
                    </a> : null
                  }
                </div>
            }
            return (
              <div className="portfolioItem" key={id}>
                <img src={require(`./images/projects/${mainImage}`)} alt="A beautiful speciment" height="250px" align={mainImageOrientation}/>
                <h3 align="center">
                  { name }
                </h3>
                <h6>
                  <i>
                    { type }
                  </i>
                </h6>
                <br/>
                { playLink }
                <p align="center">
                  { desc }
                </p>
                <div align="center">
                  {
                    gameLink !== undefined ?
                    <Link to={gameLink}>
                      More information
                    </Link> : null
                  }
                </div>
                <br/>
                <br/>
                <br/>
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default Other

