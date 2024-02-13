import { BiLogOut } from "react-icons/bi"
import useLogout from "../../hooks/useLogout"


export default function LogoutButton() {
    const { loading, logout } = useLogout()

    return (
        <div className="p-4 absolute bottom-1">
            {!loading ? (
                <span className="tooltip" data-tip="Log out">
                    <BiLogOut className="w-6 h-6 text-white cursor-pointer hover:opacity-60 tooltip" onClick={logout} />
                </span>
            ) : (
                <span className="loading loading-spinner"></span>
            )}
        </div>
    )
}
