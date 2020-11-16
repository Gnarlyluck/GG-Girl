import React, { Component } from 'react';
import Nav from '../components/Nav';
import { __GetPosts} from '../services/PostServices'


class AllGossip extends Component {
    constructor(props) {
        super(props)
        this.state = {
          posts: [],
         
        }
    }

    componentDidMount() {
        this.getPosts()
        console.log(this.getPosts())
    }

    getPosts = async () => {
        const showPosts = await __GetPosts(this.state)
        console.log(showPosts)
        this.setState({ posts: [...this.state.posts, ...showPosts]})
        console.log(this.setState)
        console.log(showPosts)
        }
    


   render() {
    const {posts} = this.state
    console.log(posts)
       return(
       <div>
           <Nav />
            <h2> Let's Gossip </h2>
        {posts.length ? (
            posts.map((post) => (
                <div>
                    <h3>{post.title}</h3>
            <p>{post.image_url}</p>
            <p>{post.popularity_rating}</p>
                </div>
            ))
        ) : (
            <h3>fuck off </h3>
        )}
       </div>   
       
    )

  }
}


export default AllGossip