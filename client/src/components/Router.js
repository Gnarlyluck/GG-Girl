import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Landing from '../pages/Landing'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Gossip from '../pages/Gossip'
import { __CheckSession } from '../services/UserServices'
import ProtectedRoute from './ProtectedRoute'
import AllGossip from '../pages/AllGossip'
import Profile from '../pages/Profile'
import UploadPage from '../pages/UploadPage'
import Edit from '../pages/Edit'
import Layout from './Layout'
import Comments from "../pages/Comments"

class Router extends Component {
    constructor () {
        super()
        this.state = {
            authenticated: false,
            currentUser: null,
            pageLoading: true
        }
    }


    componentDidMount() {
        this.verifyTokenValid()
        this.setState({ pageLoading: false})
    }

    verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const session = await __CheckSession()
                this.setState(
                    {
                        currentUser: session,
                        authenticated: true
                    }, () => this.props.history.push(window.location.pathname)
                )
            }catch (error){
                this.setState({ currentUser: null, authenticated: false })
                localStorage.clear()
            }
        }
    }

    toggleAuthenticated = (value, user, done) => {
        this.setState({ authenticated: value, currentUser: user }, () => done())
    }

      render() {
          return (
              <main>
                  {this.state.pageLoading ? (
                    <h3>Loading...</h3>
                  ) : (
                    <Layout {...this.props}
                    toggleAuthenticated={this.toggleAuthenticated}
                    currentUser={this.state.currentUser}
                    authenticated={this.state.authenticated}
                  >
                    <Switch>
                        {<Route  exact path="/" component={() => 
                            (<Landing />)}
                            /> }
                        <Route path="/SignIn" component={(props) => (
                                 <SignIn toggleAuthenticated={this.toggleAuthenticated}
                                 {...props}/>)}
                                 /> 
                        <Route path="/SignUp" component={(props) => (
                            <SignUp {...props} />)}
                             />
                        <Route path="/Gossip/:post_id" component={(props) => (
                          
                          <Gossip  {...props} currentUser={this.state.currentUser}/>
                          )}   />
                        <Route path="/AllGossip" component={(props) => (
                            
                            <AllGossip  {...props} /> 
                            )}  />
                        <ProtectedRoute authenticated={this.state.authenticated}
                         path="/profile" component={(props) => (
                           
                            <Profile {...props} currentUser={this.state.currentUser}/>
                        )} />
                         <ProtectedRoute authenticated={this.state.authenticated}
                         path="/comments" component={(props) => (
                           
                            <Comments {...props} currentUser={this.state.currentUser}/>
                        )} />
                        <ProtectedRoute authenticated={this.state.authenticated}
                         path="/upload" component={(props) => (
                           
                            <UploadPage {...props} currentUser={this.state.currentUser}/>
                        )} />
                        <ProtectedRoute authenticated={this.state.authenticated}
                         path="/upload" component={(props) => (
                            <UploadPage {...props} currentUser={this.state.currentUser}/>
                        )} />
                         <ProtectedRoute authenticated={this.state.authenticated}
                         path="/edit/:post_id" component={(props) => (
                            <Edit 
                            {...props} currentUser={this.state.currentUser}/>
                        )} />


                    </Switch>
                    </Layout>
                  )}
              </main>
          )
      }
}

export default withRouter(Router)