// this is the welcome messge which shows when there is no post:

// pass onClick button as an argument which pass to the CreateCardList.jsx
const WelcomeMessage = ({ handleOnChange }) => {
  return (
    <>
      <center className="WelcomeMessage">
        <h1>Empty, There is no post</h1>
        <button
          type="button"
          className="btn btn-primary m-4"
          onClick={handleOnChange}
        >
          Get Posts from server
        </button>
      </center>
    </>
  );
};

export default WelcomeMessage;
