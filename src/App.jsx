import React from "react";
 

import { Helmet } from "react-helmet";
import { RouterProvider } from "react-router-dom";

import router from "./routes/routes";

const App = () => {
  return (
    <>
      <Helmet>
        <title>El Gran acto</title>
        <link rel="canonical" href="/" />
        <meta
          name="description"
          content="Nueva campaña de Inter Rapidísimo para Navidad."
        />
      </Helmet>

      <React.StrictMode>
        {/* Asegúrate de que RouterProvider envuelva todo */}
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
};

export default App;
