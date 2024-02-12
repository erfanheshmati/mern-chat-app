

export default function Message() {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png" alt="user avatar" />
                </div>
            </div>

            <div className={`chat-bubble bg-blue-500 text-white`}>Hi What is up?</div>
            <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>12:42</div>
        </div>
    )
}
