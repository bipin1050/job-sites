import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <FontAwesomeIcon
        icon={faCircleExclamation}
        size="6x"
        style={{ color: "#64babb" }}
      />
      <div className="text-center">
        <div className="text-2xl py-5 font-medium">OOPS! Page Not Found</div>
        <Link to={"/"} className="text-[#64babb] font-bold">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default Error