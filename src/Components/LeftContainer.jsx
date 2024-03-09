import { FaCartPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function LeftContainer() {
    return (

        <div className="flex justify-center items-center space-x-4 lg:space-x-10 ">
            {/* cart */}
            <FaCartPlus className="text-2xl" />
            {/* profile pic */}
            <FaUserCircle className="text-2xl" />
        </div>
    )
}

export default LeftContainer