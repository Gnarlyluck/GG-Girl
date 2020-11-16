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
                           <Layout
                           currentUser={this.state.currentUser}
                           authenticated={this.state.authenticated}
                         >
                          <Gossip  {...props} />
                          </Layout>
                          )}   />
                        <Route path="/AllGossip" component={(props) => (
                             <Layout
                             currentUser={this.state.currentUser}
                             authenticated={this.state.authenticated}
                           >
                            <AllGossip  {...props} /> 
                           </Layout>
                            )}  />
                        <ProtectedRoute authenticated={this.state.authenticated}
                         path="/Profile" component={(props) => (
                             <Layout
                             currentUser={this.state.currentUser}
                             authenticated={this.state.authenticated}
                           >
                            <Profile {...props} currentUser={this.state.currentUser}/>
                            </Layout>
                        )} />
                        <ProtectedRoute authenticated={this.state.authenticated}
                         path="/upload" component={(props) => (
                             <Layout
                             currentUser={this.state.currentUser}
                             authenticated={this.state.authenticated}
                           >
                            <UploadPage {...props} currentUser={this.state.currentUser}/>
                            </Layout>
                        )} />
                        <ProtectedRoute authenticated={this.state.authenticated}
                         path="/upload" component={(props) => (
                             <Layout
                             currentUser={this.state.currentUser}
                             authenticated={this.state.authenticated}
                           >
                            <UploadPage {...props} currentUser={this.state.currentUser}/>
                            </Layout>
                        )} />
                         <ProtectedRoute authenticated={this.state.authenticated}
                         path="/edit/:post_id" component={(props) => (
                             <Layout
                             currentUser={this.state.currentUser}
                             authenticated={this.state.authenticated}
                           >
                            <Profile>
                            <Edit 
                            {...props} currentUser={this.state.currentUser}/>
                            </Profile>
                            </Layout>
                        )} />


                    </Switch>
                  )}
              </main>
          )
      }
}

export default withRouter(Router)