import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";
import { getRandomEmoji } from "../../utils/emojis"


export default function Conversations() {
    const { loading, conversations } = useGetConversations()

    return (
        <div className="flex flex-col overflow-auto">
            {loading ? <span className="loading loading-spinner mx-auto"></span> : null}

            {!loading && conversations.length === 0 && <div className="text-center">There are no users to chat</div>}

            {conversations.map((conversation, index) => (
                // <Conversation key={conversation._id} conversation={conversation} emoji={getRandomEmoji()} lastIndex={index === conversation.length - 1} />
                <Conversation key={conversation._id} conversation={conversation} lastIndex={index === conversation.length - 1} />
            ))}
        </div>
    )
}
