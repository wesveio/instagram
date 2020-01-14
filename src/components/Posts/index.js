import React, {Component} from 'react';
import api from '../../services/api';
import Post from './components/Post'


export default class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = async () => {
        const posts = await api.get('infragram.json');
        console.log('POSTS', posts.data.timeline);
        
        this.setState({ posts: posts.data.timeline.posts})
    }

    renderPost = (post, i) => {
        return(
            <Post post={post} key={i} />
        )
    }

    render() {
        return (
            <div>
                {this.state.posts.length ? (
                    this.state.posts.map(this.renderPost)
                ) : (
                    <h1>Carregando...</h1>
                )}
            </div>
        )
    }
}