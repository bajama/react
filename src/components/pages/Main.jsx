import styled from "styled-components";
import Content from "../organisms/Content";
import { postList, instance } from "../../api";
import { getPostMain } from "../../api/post";
import { shortsList } from "../../api/shortList";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await getPostMain();
      setPostList(result.postList);
    })();
  }, []);
  return (
    <MainBox>
      <UserBox>
        {postList.map((post, i) => (
          <UserBoxCont key={i}>
            <Img src={post.imageList} />
            <UserName>{post.user_name}유저네임</UserName>
          </UserBoxCont>
        ))}
      </UserBox>
      <ContContainer>
        {postList.map((post, i) => (
          <Content post={post} key={i} />
        ))}
      </ContContainer>
      <RecomendContainer></RecomendContainer>
    </MainBox>
  );
};

const MainBox = styled.div`
  margin-top: 54px;
`;
const ContContainer = styled.div``;
const RecomendContainer = styled.div``;
const UserBox = styled.div``;
const UserBoxCont = styled.div``;
const Img = styled.img``;
const UserName = styled.div``;

export default MainPage;
