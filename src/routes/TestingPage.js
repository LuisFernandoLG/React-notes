import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import styled from "styled-components";

export const TestingPage = () => {
   const { isLoading, get } = useFetch();
   const [data, setData] = useState(null)

   const fetchData = async ()=>{
      const url = "https://pokeapi.co/api/v2/pokemon/1"
      const d = await get(url)
     setData(d);
   }

   useEffect(() => {
      fetchData()
   }, []);

   

   return (
      <div>
         {isLoading ? (
            <p>Cargando . . .</p>
         ) : (
            <PreCode>
               <code>{JSON.stringify(data)}</code>
            </PreCode>
         )}
      </div>
   );
};

const PreCode = styled.div`
   width: 50%;
   overflow: auto;
`;
