import React, { useState } from 'react';
import Home from './home';
import Other from './other'
//import Games from './games'
import Project from './project'
//import Counter from './counter'
import Contact from './contact'
import Resume from './resume'
import Blog from './blog'
import RedirectTo from './return'
import NotFound from './notFound'
import './style.css';
import { Redirect, Route, Link, NavLink, HashRouter as Router, Switch } from 'react-router-dom'
import { firebase } from './../firebase'

function Navigation(){
  console.log('navigation');
  return (
    <Router>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/other">
              Other Projects
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/resume">
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contact">
              Bio & Contact
            </NavLink>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path="/" component={() => RedirectTo('/home')}/>
          <Route path="/home" component={Home} />
          <Route path="/other" component={Other} />
          <Route path="/blog" component={Blog} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route path="/project/:id" component={Project} />
          <Route path="/404" component={NotFound}/>
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  );
}
          //<li>
            //<NavLink activeClassName="active" to="/games">
              //Games
            //</NavLink>
          //</li>

          //<Route path="/games" component={Games} />

export default Navigation;
