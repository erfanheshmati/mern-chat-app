import { useEffect, useState } from "react";

export default function useGetConversations() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setConversations(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);
  return { loading, conversations };
}
