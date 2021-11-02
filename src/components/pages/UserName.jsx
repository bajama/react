import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getPost } from "../../api/post";
import { useState } from "react";

const UserName = () => {
  const [postList, setPostList] = useState([]);
  const { userName } = useParams();
  useEffect(() => {
    (async () => {
      const result = await getPost({ userName });
      setPostList(result.postList);
    })();
  }, []);

  return (
    <UserPost>
      <UserBox>
        <Box1>
          <div>kakao1</div>
          <button>팔로우하기</button>
        </Box1>
        <Box1>
          <div>게시물{postList.length}</div>
          <div>팔로워</div>
          <div>팔로우</div>
        </Box1>
      </UserBox>
      <PostList>
        {postList.map((post, i) => (
          <PostThumbnail
            key={post.id}
            src={post.imageList[0]}
            alt=""
          ></PostThumbnail>
        ))}
      </PostList>
    </UserPost>
  );
};
const UserPost = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UserBox = styled.div`
  padding: 50px 40px;
  height: 300px;
  width: 30%;
`;
const Box1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
`;

const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 20px;
`;
const PostThumbnail = styled.img`
  width: 100%;
  height: 300px;
`;
export default UserName;
