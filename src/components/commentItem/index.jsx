import React, { PureComponent } from "react";
import { Comment, Tooltip, Avatar } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

export default class CommentItem extends PureComponent {
    render() {
        const { nickname, avatar, content, datetime, id } = this.props.comment;
        return (
            <Comment
                author={<a href="##">{nickname}</a>}
                avatar={
                    <Avatar src={avatar} alt={nickname}/>
                }
                content={ <p>{content}</p> }
                datetime={
                    <Tooltip title={datetime.format("YYYY-MM-DD HH:mm:ss")}>
                        <span>{datetime.fromNow()}</span>
                    </Tooltip>
                }
                actions={[<span onClick={() => this.props.handleRemove(id)}><CloseOutlined/>删除</span>]}
            />
        );
    }
}
