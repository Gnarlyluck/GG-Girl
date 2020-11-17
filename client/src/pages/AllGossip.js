import React, { Component } from 'react';
import { __GetPosts} from '../services/PostServices'
import { __ShowComments } from '../services/CommentService'

class AllGossip extends Component {
    constructor() {
        super()
        this.state = {
          posts: [],
          currentPage: 1
        }
      }
    
      componentDidMount() {
        this.getPosts()
      }
    
      getPosts = async () => {
        try {
          const posts = await __GetPosts(this.state.currentPage)
          this.setState({ posts: [...this.state.posts, ...posts] })
        } catch (error) {
          console.log(error)
        }
      }


    
      incrementPage = () =>
        this.setState(
          (prevstate) => ({ currentPage: prevstate.currentPage + 1 }),
          () => this.getPosts()
        )
    
      render() {
        const { posts } = this.state
        return (
          <div className="AllGossip">
            <h2 className="pop">Popular Posts</h2>
            <section className="row">
              {posts.length ? (
                posts.map((post) => (
                <div className="col s6" 
                    key={post._id}
                    onClick={() => this.props.history.push(`/Gossip/${post._id}`)}>
                        <div className="card">
                          <div className="card-image">
                            <img  src={post.image_url} alt="post"/>
                            <span className="card-title">{post.title}</span>
                          </div>
                          <div className="card-content pink darken-4">
                            <p>{post.description.substring(0, 550)}...</p>
                          </div>
                          <div className="card-action pink darken-4">
                            <p>Comments</p>
                            <p>{post.comments.length}</p>
                            <p>Likes</p>
                            <p>{post.popularity_rating}</p>
                          </div>
                        </div>
                  </div>
                      ))
              ) : (
                <h3>No Posts</h3>
              )}
              <button onClick={this.incrementPage}
              className="btn waves-effect waves-light pink darken-4" type="submit" name="action" >
              <i className="material-icons right">send</i>
              Load More</button>
            </section>
          </div>
        )
      }
    }
    
export default AllGossip