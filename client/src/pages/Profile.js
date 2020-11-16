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
      console.log(this.props)
      const profileData = await __GetProfile(this.props.currentUser._id)
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
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.state.posts.length ? (
            <div>
              {this.state.posts.map((post) => (
                <div key={post._id}>
                  <div
                    onClick={() =>
                      this.props.history.push(`/AllGossip/${post._id}`)
                    }
                  >
                    <div>
                      <div>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                      </div>
                    </div>
                    <img src={post.image_url} alt="post" />
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        this.props.history.push(`/edit/${post._id}`)
                      }
                    >
                      Edit
                    </button>
                    <button onClick={() => this.deletePost(post._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>No Posts</div>
          )}
        </div>
      </div>
    )
  }
}
