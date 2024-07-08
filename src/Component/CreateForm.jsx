import { Form, redirect } from "react-router-dom";

// Complete the Css of the form now time to take the value from the form this can be done by useRef();

// I do all of the work using action method in main.jsx action method perform action during form submission
// action method : use Form attribute and name method in placeholder

// action method will automatically generate the value or data of the form this can only done by react router :

const CreateForm = () => {
  return (
    <div className="formbox">
      <Form method="POST">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter your UserId here
          </label>
          <input
            type="text"
            placeholder="Your User Id"
            className="form-control placehodlerheight"
            id="UserId"
            aria-describedby="emailHelp"
            autoComplete="current-username"
            // Form Action method need this to fetch the value into another component; :
            name="userId"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            placeholder="How are you feeling today..."
            className="form-control placehodlerheight"
            id="PostTitle"
            aria-describedby="emailHelp"
            autoComplete="current-username"
            name="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label ">
            Post Content
          </label>
          <textarea
            type="text"
            placeholder="Tell us more about it"
            className="form-control"
            id="PostContent"
            aria-describedby="emailHelp"
            rows={3}
            autoComplete="current-username"
            name="body"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Number of reactions
          </label>
          <input
            type="text"
            placeholder="How many people reacted to this post"
            className="form-control placehodlerheight"
            id="NumberofReactions"
            aria-describedby="emailHelp"
            autoComplete="current-username"
            name="reactions"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label ">
            Enter your hashtags here
          </label>
          <input
            type="text"
            placeholder="Please enter your tags using spaces "
            className="form-control"
            id="Hashtags"
            aria-describedby="emailHelp"
            autoComplete="current-username"
            name="tags"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </div>
  );
};

// Action method receive  data object
export async function ActionMethod(data) {
  // by this method it provide me all form data
  const formData = await data.request.formData();
  const Neededdata = Object.fromEntries(formData);
  Neededdata.tags = Neededdata.tags.split(" ");
  console.log(Neededdata);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Neededdata),
  })
    .then((res) => res.json())
    .then((objres) => console.log(objres  ));

  return redirect("/");
}
export default CreateForm;
