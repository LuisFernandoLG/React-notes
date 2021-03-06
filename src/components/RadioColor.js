import styled from "styled-components";

export const RadioColor = ({ color, checked, idGroupRadio, handleChange }) => {
   let name = `color-${idGroupRadio}`;

   return (
      <RadioInput
         type="radio"
         value={color}
         name={name}
         defaultChecked={checked}
         onChange={(e) => handleChange(idGroupRadio, e)}
      />
   );
};

const RadioInput = styled.input`
      /* position: absolute; */
      appearance: none;
      cursor: pointer;

      &:checked::before {
         opacity: 0.4;
         box-shadow: 2px 2px 5px #272727;
      }

      &::before {
         content: "";
         position: relative;
         display: block;
         width: 1.5625rem;
         height: 1.5625rem;
         border-radius: 50%;
         background: #${props => props.value};
         transition: background 0.3s ease;
      }
   `;