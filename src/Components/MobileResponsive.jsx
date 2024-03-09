import { RxCross1 } from "react-icons/rx";
import clsx from "clsx";

function MobileResponsive({ clicked, setClicked, list }) {
    return (
        <div
            id="mobile-navbar"
            className={clsx(
                "fixed top-0 left-0 w-screen h-screen bg-black/20 backdrop-blur-sm transition-transform -translate-x-full",
                clicked && "translate-x-0"
            )}
        >
            <div className="bg-white w-4/5 h-screen p-7 ">

                {/* cross icon  */}
                <RxCross1
                    id="Cross-icon"
                    onClick={() => {
                        setClicked(false);
                    }}
                    className="text-2xl mb-5 cursor-pointer "
                />

                <ul className="space-y-4 font-serif">
                    {list.map((elem, i) => {
                        const { title } = elem; //destructed in react //
                        return (
                            <li key={i} className="text-lg font-bold mt-11 text-center">
                                <a href="#" className="uppercase text-gray-500 hover:text-black">
                                    {title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default MobileResponsive