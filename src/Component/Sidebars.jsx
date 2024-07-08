import { Link } from "react-router-dom";

// const Sidebar = ({ selectedtab, setVal }) => {
const Sidebar = () => {
  // When i created a router i donot need a active link that is why i am remove it : we also donot need this argument :
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {/* onClick={() => setVal("Home")} remove this onclick button from below list because of routing i donot need anymore */}
        <li className="nav-item">
          <Link
            // because i can directly atteach the path now
            to="/"
            // className={`nav-link text-white ${
            //   selectedtab === "Home" && "active"
            // }`}
            className={`nav-link text-white `}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </Link>
        </li>
        {/* remove also onClick event handler:  */}
        {/* <li onClick={() => setVal("Create Post")}> */}

        {/* Anchor tags always reload a page because of this our data will not save or at the time of again fetching from any server it lost the data and fetch the data again and again  to oveecome this problem we use "LInk "instead of "a "and use "to "instead of "href"*/}
        <li>
          <Link
            to="/Create-post"
            className={`nav-link text-white `}
            // remove this className because we do it by routing :
            // className={`nav-link text-white ${
            //   selectedtab === "Create Post" && "active"
            // // }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
