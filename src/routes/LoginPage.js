import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import styled from "styled-components";

const LoginPage = () => {
   const { login } = useContext(AuthContext);
   const [form, setForm] = useState({
      name: "",
      avatarLink:
         "https://i.pinimg.com/originals/73/d9/70/73d9706d243eccbc700b499437bea432.jpg",
   });

   const [imageUser, setImageUser] = useState(null);
   const [imageUserURL, setImageUserURL] = useState(null);

   const history = useHistory();

   const handleSubmit = (e) => {
      e.preventDefault();
      login(form, imageUserURL);
      history.push("/");
   };

   const handleChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      setForm({ ...form, [name]: value });
   };

   const handleFileSelected = (e) => {
      setImageUser(e.target.files[0]);
   };

   useEffect(() => {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
         setImageUserURL(reader.result);
      });

      if (imageUser) {
         reader.readAsDataURL(imageUser);
      }

      return () => {
         reader.removeEventListener("load", () => {});
      };
   }, [imageUser]);


   return (
      <div>
         <h2>Login page</h2>
         <form onSubmit={handleSubmit}>

            <input
               placeholder="Name"
               type="text"
               name="name"
               value={form.name}
               onChange={handleChange}
            />
            <InputImgContainer imageUserURL={imageUserURL}>
               <label htmlFor="img">Photo</label>
               <InputImg type="file" accept="image/png, image/jpeg" name="img" id="img" onChange={handleFileSelected} />
               {imageUserURL && <ImgPreview src={imageUserURL} alt="img" />}

            </InputImgContainer>

            <input type="submit" />
         </form>
      </div>
   );
};

export default LoginPage;

const InputImgContainer = styled.div`
   position: absolute;

   border-radius: 50%;
   overflow: hidden;

   margin: 5px;

   width: 6em;
   height: 6em;

   /* background: red; */
   padding: 10px;


   label{
      position: absolute;
      left: 0;
      top:0;
   display:block;
   width: 100%;
   height: 100%;

    color: white;
    background-color: ${({imageUserURL})=>{
      return imageUserURL ? "transparent" : "black"
   }};
    display: inline-block;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

   z-index: ${({imageUserURL})=>{
      return imageUserURL ? 100 : 0
   }};

   
   }

   label:hover{
      background: #272727;
   }

`;

const InputImg = styled.input`

width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
   top: 0;
   left: 0;
	z-index: -1;

`;

const ImgPreview = styled.img`
   background: blue;
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
`;
