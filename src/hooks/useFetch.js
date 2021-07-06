import { useState } from "react";

const initialOptions = {
   headers: {
      "Content-Type": "application/json",
   },
};

const timeOutError = {
   status: "99999",
   statusText: "It's taking too long!",
};

export const useFetch = () => {
   const [errors, setErrors] = useState(null);
   const [isLoading, setIsLoading] = useState(false);

   const fetchData = async (url, options) => {
      options = { ...options, ...initialOptions };

      const controller = new AbortController();

      options.body = JSON.stringify(options.body) || false;
      if (!options.body) delete options.body;
      setIsLoading(true);
      let timeOut = () => {};

      try {
         timeOut = setTimeout(function x() {
            controller.abort();
         }, 4000);

         options.signal = controller.signal;

         const json = await fetch(url, options)
            .then((response) => {
               if (!response.ok) {
                  throw new Error ({
                     error: true,
                     status: response.status || "000000",
                     statusText: response.statusText || "Something went wrong",
                  });
               } else return response.json();
            })
            .catch((e) => {
               if (controller.signal.aborted) {
                  throw timeOutError;
               }else throw e
            });

         return json;
      } catch (error) {
         setErrors(error);
         return null;
      } finally {
         setIsLoading(false);
         clearTimeout(timeOut);
      }
   };


   const get = async (url, options = {}) => {
      options.method = "GET";
      const d = await fetchData(url, options);
      return d
   };

   const put = async (url, options = {}) => {
      options.method = "PUT";
      return await fetchData(url, options);
   };

   const post = async (url, options = {}) => {
      options.method = "POST";
      return await fetchData(url, options);
   };

   const _delete = async (url, options = {}) => {
      options.method = "DELETE";
      return await fetchData(url, options);
   };

   return { get, post, put, _delete, errors, isLoading };
};
