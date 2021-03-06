import styled from "styled-components";
import { RadioColor } from "./RadioColor";

const palette = ["FFB5E8", "ACE7FF", "AFF8DB", "FFF"];

export const ColorPalette = ({ colorPicked, handleChange, id }) => {

   return (
      <ColorPaletteStyled >
         {palette.map((color, index) => (
            <RadioColor
               color={color}
               key={index}
               checked={colorPicked === color}
               idGroupRadio={id}
               handleChange={handleChange}
            />
         ))}
      </ColorPaletteStyled>
   );
};

const ColorPaletteStyled = styled.div`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
`