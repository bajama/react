import styled from "styled-components";

const Content = ({ post }) => {
  const { imageList, user_name } = post;
  return (
    <ContBox>
      <TopBox>
        <UserName>{user_name}유저네임</UserName>
      </TopBox>
      {imageList.map((img) => (
        <Img src={img} />
      ))}
      <IconBox></IconBox>
      <Like></Like>
      <Cont>{}콘텐츠</Cont>
    </ContBox>
  );
};
const ContBox = styled.div``;
const TopBox = styled.div``;
const UserName = styled.div``;
const Img = styled.img``;
const IconBox = styled.div``;
const Like = styled.div``;
const Cont = styled.div``;

export default Content;
