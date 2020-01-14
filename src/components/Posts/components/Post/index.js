import React, {Component} from 'react';
import './style.css';

export default class Post extends Component {

    state = {
        post: null,
        liked: false
    }

    handleLikeClick() {
        this.updatePostState(this.props.post);
    }

    handleDoubleClick() {
        if (!this.props.post.viewer_has_liked) {
            this.updatePostState(this.props.post);
            this.setState({ liked: true });
            setTimeout(() => {
                this.setState({ liked: false });
            }, 1000);
        }
    }

    updatePostState(post) {
        post.viewer_has_liked = !post.viewer_has_liked;
        this.setState({ post: post })
    }
    
    componentDidMount() {
        this.setState({ post: this.props.post })
    }
    render() {
        const { post, liked } = this.state;
        return(
            <div>
                {post ? (
                    <div className="post__item">
                        <div className="post__header">
                            <div className="post__user-info">
                                <div className="post__user-profile-pic">
                                    <img src={post ? post.owner.profile_pic_url: '' } alt="" />
                                </div>
                                <div className="post__user-text">
                                    <p>{post.owner.username}</p>
                                    {post.location ? (
                                        <small>{post.location.name}</small>
                                    ): ""}
                                </div>
                            </div>
                        </div>
                        <div
                            className={"post__file" + ( liked ? " active" : "")}
                            onDoubleClick={this.handleDoubleClick.bind(this)}
                        >
                            <span className="like__big">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
                            </span>
                            <img src={post ? post.display_url : ''} alt="" />
                        </div>
                        <div className="post__footer">
                            <div className="post__actions">
                                <button className="post__btn btn__like" onClick={this.handleLikeClick.bind(this)}>
                                    <span className={"sprite like" + (post.viewer_has_liked ? ' active' : '') } ></span>
                                </button>
                                <button className="post__btn btn__comment">
                                    <span className="sprite comment"></span>
                                </button>
                                <button className="post__btn btn__direct">
                                    <span className="sprite direct"></span>
                                </button>
                                <button className="post__btn btn__save">
                                    <span className="sprite save"></span>
                                </button>
                            </div>
                            <div className="post__description">
                                <strong>{post.owner.username}</strong> {post.edge_media_to_caption.edges[0].node.text}
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1>Carregando...</h1>
                )}
            </div>
        )
    }
}


