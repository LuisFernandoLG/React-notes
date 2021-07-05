import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
   const { login } = useContext(AuthContext);
   const [form, setForm] = useState({ name: "", avatarLink: "https://i.pinimg.com/originals/73/d9/70/73d9706d243eccbc700b499437bea432.jpg" });

   const history = useHistory()

   const handleSubmit = (e) => {
      e.preventDefault();
      login(form);
      history.push("/")

   };

   const handleChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      setForm({ ...form, [name]: value });
   };

   return (
      <div>
         <h2>Login page</h2>
         <form onSubmit={handleSubmit}>
            <input placeholder="Name" type="text" name="name" value={form.name} onChange={handleChange} />
            <input
               type="text"
               name="avatarLink"
               value={form.avatarLink}
               onChange={handleChange}
            />
            <input type="submit" />
         </form>
      </div>
   );
};

export default LoginPage;
