import React, { Component } from 'react';
import { __GetPosts} from '../services/PostServices'


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
          <div >
              
            <h2>Popular Posts</h2>
            <section >
              {posts.length ? (
                posts.map((post) => (
                  <div
                    key={post._id}
                    onClick={() => this.props.history.push(`/Gossip/${post._id}`)}>
                    <div >
                      <div >
                        <div >
                          <h3>{post.title}</h3>
                          <p>{post.description.substring(0, 550)}...</p>
                        </div>
                        <div >
                          <div >
                            <p>Comments</p>
                            <p>{post.comments.length}</p>
                          </div>
                          <div >
                            <p>Likes</p>
                            <p>{post.popularity_rating}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img src={post.image_url} alt="post"/>
                  </div>
                ))
              ) : (
                <h3>No Posts</h3>
              )}
              <button onClick={this.incrementPage}>Load More</button>
            </section>
          </div>
        )
      }
    }
    
export default AllGossip