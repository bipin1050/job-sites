import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Crossbar = () => {
  return (
    <div className="bg-[#64babb] hover:bg-[#323c3b] px-2 rounded-r-sm">
      <FontAwesomeIcon icon={faXmark} style={{ color: "#ffffff" }} />
    </div>
  );
}

export default Crossbar