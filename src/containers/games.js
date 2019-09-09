import React from 'react'
import Game from './canvasGames/gameContainer'
import NotFound from './notFound'
import { Redirect, Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import games from './canvasGames/canvasGames';
import Return from './return'

class Games extends React.Component {
  render() {
    let { props } = this; 
    let match = props.match;
    return (
      <Router>
        <div className="gameNav">
          <ul>
            {games().map(({ name, id }) => (
              <NavLink activeClassName="active" to={`${match.url}/${id}`} key={id}>
                <li>
                  { name }
                </li>
              </NavLink>
            ))}
          </ul>
          <hr/>
          <Switch>
            <Route exact path={`${match.path}`} component={()=>Return(match.path)}/>
            <Route path={`${match.path}/:game`} component={Game} /> 
            <Redirect to="/404" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Games;
