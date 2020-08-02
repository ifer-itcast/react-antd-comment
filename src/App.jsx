import React, { Component } from 'react';

import CommentItem from './components/commentItem';
import CommentInput from './components/commentInput';

export default class App extends Component {
    state = {
        commentList: []
    }
    submitComment = info => {
        this.setState({
            commentList: [...this.state.commentList, info]
        });
    }
    handleRemove = id => {
        let idx = this.state.commentList.findIndex(item => item.id === id);
        /* const newCommentList = [
            ...this.state.commentList.slice(0, idx),
            ...this.state.commentList.slice(idx+1)
        ]; */
        const newCommentList = [...this.state.commentList];
        newCommentList.splice(idx, 1);
        this.setState({ commentList: newCommentList });
    }
    render() {
        return (
            <div style={{ width: '500px', padding: '20px' }}>
                {
                    this.state.commentList.map(item => <CommentItem key={item.id} comment={item} handleRemove={this.handleRemove}/>)
                }
                <CommentInput submitComment={this.submitComment}/>
            </div>
        )
    }
}