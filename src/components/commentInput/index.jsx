import React, { PureComponent } from 'react'
import { Input, Button } from 'antd';
import moment from 'moment';

export default class CommentInput extends PureComponent {
    state = {
        content: ""
    }
    addComment = () => {
        const cmInfo = {
            id: moment().valueOf(),
            avatar: 'https://zhihur.com/images/49337922.png',
            nickName: 'ifer',
            datetime: moment(),
            content: this.state.content
        };
        this.props.submitComment(cmInfo);
        this.setState({ content: '' });
    }
    handleChange = e => {
        this.setState({
            content: e.target.value
        });
    }
    render() {
        return (
            <>
                <Input.TextArea value={this.state.content} onChange={this.handleChange}/>
                <Button type="primary" onClick={this.addComment}>添加评论</Button>
            </>
        )
    }
}
