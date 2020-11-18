import React, { Component } from 'react'
import { __DeletePost } from '../services/PostServices'
import { __GetProfile } from '../services/UserServices'

export default class Profile extends Component {
  constructor() {
    super()
    this.state = {
      postFetchError: false,
      posts: []
    }
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = async () => {
    try {
      
      const profileData = await __GetProfile(this.props.currentUser.user._id)
      this.setState({ posts: profileData.posts })
    } catch (error) {
      this.setState({ postFetchError: true })
    }
  }

  deletePost = async (id) => {
    try {
      const postsToKeep = this.state.posts.filter((post) => post._id !== id)
      this.setState({ posts: postsToKeep })
      await __DeletePost(id)
    } catch (error) {
     throw error
    }
  }

  render() {
    return (
      <div className="profile">
        <div className="Profile row">
          {this.state.posts.length ? (
            <div>
              {this.state.posts.map((post) => (
                <div className="col s5" key={post._id}
                  onClick={() => this.props.history.push(`/Gossip/${post._id}`)}>
                  <div className="card">
                    <div className="card-image">
                      <img src={post.image_url} alt="post" minHeight="25vh"/>
                      <span className="card-title" >{post.title}</span>
                    </div>
                    <div>
                      <p className="card-content pink darken-4">{post.description}</p>
                    </div>
                  </div>
                  <div className="card-content">
                    <button  onClick={() => this.props.history.push(`/edit/${post._id}`)}
                      className="btn waves-effect waves-light pink darken-4" type="submit" name="action" >Edit
                      <i className="material-icons right">send</i>
                    </button>
                    <button  onClick={() => this.deletePost(post._id)}
                      className="btn waves-effect waves-light pink darken-4" type="submit" name="action" >Delete
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
          <div>No Gossip, Yet...</div>
          )}
        </div>
      </div>
    )
  }
}
