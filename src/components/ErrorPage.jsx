import { Link, useRouteError } from "react-router-dom";
Link;

const ErrorPageFound = () => {
  /*  const errorInfo = useRouteError();
  console.log(errorInfo); */
  /*  using Object Destructure */
  const { status, statusText } = useRouteError();
  return (
    <div className="bg-gray-300 text-red-800 m-10 space-y-4">
      <h1> {status} Error Spot</h1>
      <h2 className="p-3">Something went Wroung {statusText}</h2>
      <Link to={"/"} className="bg-green-500 rounded text-white">
        You Can Go back
      </Link>
    </div>
  );
};
export default ErrorPageFound;
