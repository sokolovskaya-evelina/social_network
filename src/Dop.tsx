import React from 'react';
import {Tooltip} from "antd";
import {DislikeOutlined, LikeOutlined} from "@ant-design/icons";

const Dop = () => {
    return (
        <>
            <Tooltip key="comment-basic-like" title="Like">
      <span onClick={()=>{}}>
          <LikeOutlined/>
          <span className="comment-action"></span>
      </span>
            </Tooltip>,
            <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={()=>{}}><DislikeOutlined/>
          <span className="comment-action"></span>
      </span>
            </Tooltip>,
            <span key="comment-basic-reply-to">Reply to</span>
        </>

    );

};

export default Dop;