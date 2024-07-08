import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { CardContext } from "../Store/CardContext";

// this posts passed as a prop provide the id body information from the Default-list
const CreateCard = ({ post }) => {
  // import deletepost from useContext
  const { deletePost } = useContext(CardContext);
  // console.log(post);
  // console.log(post.tags.map((posts) => console.log(posts)));
  // console.log("this will be called");
  // console.log(post.tags.map((tile) => console.log(tile)));
  //   basically this deletepost is a function which pass the id to the CardContext ; by which we can acess the button
  // const { deletepost } = useContextvalue.deletePost;
  //   console.log(useValue.postList.id);

  //   firstly i placed a badge over there instead of this place a close icon from react-icons --save
  return (
    // Applied Css in App.css
    <div className="card postCard" style={{ width: "22rem" }}>
      <div className="card-body">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger deletebutton"
          onClick={() => deletePost(post.id)}
        >
          {/* {posts.reactions} */}
          <IoClose />
        </span>
        <h5 className="card-title">{post.title} </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary Cardtag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div
        className="alert alert-dark reactions"
        style={{ marginBottom: "0" }}
        role="alert"
      >
        {`this post has reacted by ${post.reactions} people`}
      </div>
    </div>
  );
};

export default CreateCard;
