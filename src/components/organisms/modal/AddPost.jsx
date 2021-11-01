import { useState } from "react";
import styled from "styled-components";
import { uploadImage } from "../../../api/upload";
import { addPost } from "../../../api/post.js";

const AddPost = ({ onClose }) => {
  const [imgList, setimgList] = useState([]);
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    if (imgList.length === 0) return;
    const promiseList = imgList.map((image) => {
      return uploadImage(image.file);
    });
    const urlList = await Promise.all(promiseList);
    console.log(urlList);

    const { success } = await addPost({ content, urlList });
    if (success) {
      onClose();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setimgList((prev) => [...prev, { file: file, preview: reader.result }]);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Modal>
      <Header>
        <BtnSubmit onClick={handleSubmit}>공유하기</BtnSubmit>
        <h2>새 게시물 만들기</h2>
      </Header>
      <Textarea rows="6" onChange={(e) => setContent(e.target.value)} />
      <Label for="file">컴퓨터에서 선택</Label>
      <InputFile
        id="file"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <ImageList>
        {imgList.map((image, i) => (
          <ImageItem key={i}>
            <Image src={image.preview} />
          </ImageItem>
        ))}
      </ImageList>
    </Modal>
  );
};
const Header = styled.header`
  position: relative;
`;
const BtnSubmit = styled.span`
  color: aqua;
  position: absolute;
  right: 0;
  top: 5px;
  cursor: pointer;
`;
const ImageList = styled.div``;
const ImageItem = styled.div``;
const Image = styled.img`
  width: 100%;
`;
const Modal = styled.div`
  position: fixed;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 10px;
  width: 50vw;
  height: 80vh;
  z-index: 10;
  overflow: auto;
`;
const Label = styled.label`
  display: inline-block;
  background-color: #0095f6;
  color: #fff;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
`;
const InputFile = styled.input`
  display: none;
`;
const Textarea = styled.textarea`
  width: 90%;
  resize: none;
  margin-top: 10px;
`;
export default AddPost;
