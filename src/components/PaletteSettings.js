// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import { ColorPalette } from "./ColorPalette";

// const initialSettingsForm = {
//    color: "",
// };

// const initialSettings = {
//    colors: ["FFB5E8", "ACE7FF", "AFF8DB"],
// };

// export const PaletteSettings = () => {
//    const [settingsForm, setSettingsForm] = useState(initialSettingsForm);
//    const [settings, setSettings] = useState({});

//    useEffect(() => {
//       if (!localStorage.getItem("settings")) {
//          localStorage.setItem("settings", JSON.stringify(initialSettings));
//       }
//       const localSettings = JSON.parse(localStorage.getItem("settings"));
//       setSettings(localSettings);
//    }, []);

//    const addColor = (color) => {
//       setSettings({
//          ...settings,
//          colors: [...settings.colors, color],
//       });
//    };

//    const handleSubmit = (e) => {
//       setSettings({
//          ...setSettings,
//          [name]: value,
//       });
//    };

//    useEffect(() => {
//       localStorage.setItem("settings", JSON.stringify(settings));
//    }, [settings]);

//    const handleChange = (e) => {
//       console.log("HANDLE CHANGE");
//       const { name, value } = e.target;
//       setSettingsForm({ ...settingsForm, [name]: value });
//    };

//    return (
//       <PaletteSettingsStyled onSubmit={handleSubmit}>
//          <input
//             type="text"
//             value={settingsForm.color}
//             name="color"
//             onChange={handleChange}
//          />
//          <button>Add</button>


//       </PaletteSettingsStyled>
//    );
// };

// const PaletteSettingsStyled = styled.form``;
