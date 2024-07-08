import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateCardList, {
  FetchwithLoaderfunction,
} from "./Component/CreateCardList.jsx";
import CreateForm, { ActionMethod } from "./Component/CreateForm.jsx";
// i can do a thing before showing the CreateCard i load the list first then render it for this i  make a function below or in CreateCardList and then i can load :

// this loader function tells us that when the path is / then before loading the CreateCardList firstly we have load the loader data :
// that is why i use this :

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CreateCardList />,
        loader: FetchwithLoaderfunction,
      },
      { path: "/Create-post", element: <CreateForm />, action: ActionMethod },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* remove the app from this app */}
    {/* <App /> */}
  </React.StrictMode>
);
