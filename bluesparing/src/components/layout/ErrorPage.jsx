import { useNavigate, useRouteError } from "react-router-dom";
import "../ui/ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  if (error.status === 404) {
    return (
      <section className="ErrorPage">
        <img
          src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
          alt="404 page"
        />
        <div className="error_text">
          <p className="p-a">
            ... The page you were looking for could not be found
          </p>
          <p className="p-b">... Back to previous page</p>
        </div>
        <button className="btn" onClick={handleGoBack}>
          Go Back
        </button>
      </section>
    );
  } else {
    return (
      <section className="ErrorPage">
        <img
          src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
          alt="404 page"
        />
        <div className="error_text">
          <h1>The page you are looking does not exist</h1>
        </div>
        <button className="btn" onClick={handleGoBack}>
          Go Back
        </button>
      </section>
    );
  }
  console.log(error);
};

export default ErrorPage;
