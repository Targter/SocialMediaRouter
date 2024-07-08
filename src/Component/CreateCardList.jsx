import CreateCard from "./CreateCard";
// Now i want i donot have to press the button when i reload or go to the page for this i have to use useEffect hook : or i can do this
// here i can import the welcome message:
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";

const CreateCardList = () => {
  // const { postList } = useContext(CardContext);
  // const { postList, fetching } = useContext(CardContext);

  // i use this useContext to fetch the value of the post list so i remove it and pass the value with the help of useloader hook
  // Hence it is a seprate concept the data is loding in this file is not depend on any thing :
  const postList = useLoaderData();

  return (
    <>
      {/* while fetching it loads the data : or hide the other componet */}
      {/* {<Loadingfunction />} */}
      {postList.length === 0 && (
        // handleOnChange={buttonClicked} comment out the button because i use this for not loading the page always ;
        <WelcomeMessage />
      )}
      {postList.map((posts) => (
        <CreateCard key={posts.id} post={posts} />
      ))}

      {/* {!fetching && <Loadingfunction></Loadingfunction>} */}
    </>
  );
};

// i made a another function by which i can return my data;
export const FetchwithLoaderfunction = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default CreateCardList;
