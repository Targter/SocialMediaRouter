// this is the second version of the fetch api in which i fetch the data from the server and put into the data
// we take the data from the dummy api : which is a fake api in which we can obtain the data.
// url : https:dummyjson.com/posts

// we clear all the recents posts; :

// i create this to pass the value to save the value :
import { createContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";

//  i create a  context which is initially none .
export const CardContext = createContext({
  // i pass this initial value to the createContext which help me to give the provide the snippet> . no need as such but it is used to fasten the code.
  addPost: () => {},
  deletePost: () => {},
  postList: [],
});

// I made this to clean the UI in which i make a reducer function to shorten or we suppose we have to pass multiple action in the Create Post.

// Pass the CardContextProvider to the App.jsx which help me to access the values and take the children as prop

// reducerfunc is a pure function that is why i declare outside of the class.
// filter function return if we return true then element is placed else delete , that is why we put !==

// action.payload is already a object this is how we can easily access it.
const reducerfunc = (currentstate, action) => {
  let newAction = currentstate;
  if (action.type === "Delete_Post") {
    newAction = currentstate.filter((post) => post.id !== action.payload.id);
  } else if (action.type === "Add_ITEM") {
    newAction = [action.payload, ...currentstate];
  } else if (action.type === "SERVER_ITEM") {
    newAction = action.payload.post;
  }
  return newAction;
};

const CardContextProvider = ({ children }) => {
  // suppose we have to pass multiple action that is why i use Reducer hook
  //   if we change postList then the finalvalue will change. if we dispatch it
  const [postList, DispatchState] = useReducer(reducerfunc, []);

  // Now we pass the value to the addPost which take the value and pass to the reducer function ;
  const addPost = (post) => {
    // Additem(userid, title , tag, body, reaction)
    // made a addPost in the form section and pass the reaction tags all the now i have to make a object and pass to the reducer function .
    // console.log(tag);
    // console.log(`${userid} ${title} ${tag} ${body} ${reaction} `);
    const AddactionPost = {
      type: "Add_ITEM",
      payload: post,
    };

    DispatchState(AddactionPost);
  };

  const deletePost = (id) => {
    // this deletePost only dispatch the value or pass the function ;
    const deleteactionpost = {
      type: "Delete_Post",
      payload: {
        id,
      },
    };
    // This pass the deleteactionpost means it called the reducer function which can the actual thing
    DispatchState(deleteactionpost);
    // console.log(id);
  };

  // Here i define the new value or new function which pass the data from the server
  // it donot use here , it use when to load the data at initial state ; i do it later i do it with the help of useEffect only : which i hide 
  const Itemfromserver = (post) => {
    const serveritem = {
      type: "SERVER_ITEM",
      payload: {
        post,
      },
    };
    DispatchState(serveritem);
  };
  // We donot need itemfromserver anymore because instead of this i used a useEffect which fetch the post initially when the page is loading . >

  // This is the useEffect function i paste it here

  // ***********************************************************************************************************************************
  // I comment out the useEffect hook because in this i use a loader function by which i can load data first then show into the list : i made this in main.jsx and loader function where the instruction of fetching a data is function is in a CreateCardList
  // ***********************************************************************************************************************************

  // by this i am hiding my fetching value because of this i remove from all of them :
  // const [fetching, setfetchingState] = useState(false);
  // Adding a Loading spinner
  // use Effect> >> > use effect take two argument first a function or another a state
  // useEffect(() => {
  //   // calling a AbortController which can abort the api request :

  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   setfetchingState(true);
  //   // console.log("called this fetch");
  // fetch("https://dummyjson.com/posts")
  // .then((res) => res.json())
  // .then((data) => {
  //   Itemfromserver(data.posts);
  //   // do this only for changing the state
  //   setfetchingState(false);
  // });
  //   return () => {
  //     // console.log("This is the cleanup function called ");
  //     // console.log(
  //     //   "this is in a cleanup function which for aborting a API request and that is why this shows an error"
  //     // );
  //     controller.abort();
  //   };
  // }, []);
  // this is a cleanup function which helpful in many ways to avoid the unwanted fetching the data from the server or many thing >refer from notebook :
  //
  // ***********************************************************************************************************************************
  // ***********************************************************************************************************************************
  // Need to add fetching to the context provider because CreateCard are using it >
  //
  return (
    // basically i do that i made a CardContext.Provider which pass the value to the function and when it need it pass the value to the function .
    // pass postList by which i can access the Default_list ;
    <CardContext.Provider value={{ addPost, deletePost, postList }}>
      {/* i pass the children which helps me to access the value  */}
      {children}
    </CardContext.Provider>
  );
};
// comment out the initial value :
// const Default_list = [
//   {
//     id: "1",
//     title: "Welcome to the World of Tg",
//     body: "The way you work defines your sucess ",
//     reactions: 99,
//     userId: "tgWorld.in",
//     tags: ["#WelcometotgWorld", "#HelloWorld"],
//   },
//   {
//     id: "2",
//     title: "Welcome to the World of Targeter",
//     body: "Skills pays the bills ",
//     reactions: 39,
//     userId: "tgCheck.in",
//     tags: ["#WelcometotargeterWorld", "#HelloWorld"],
//   },
// ];
export default CardContextProvider;
