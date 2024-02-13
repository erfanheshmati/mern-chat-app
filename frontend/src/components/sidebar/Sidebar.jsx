import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";


export default function Sidebar() {
    return (
        <div className="border-r border-slate-500 flex flex-col px-1 pl-2">
            <SearchInput />
            <div className="divider px-3"></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}
