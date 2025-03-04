import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

function Discussion({ id }) {
  const { user } = useContext(AuthContext);
  const [allChats, setAllChats] = useState([]);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (user) {
      axios
        .get(
          `${import.meta.env.VITE_API_URL}/api/images/all-chat/${user?.email}`
        )
        .then(({ data }) => {
          setAllChats(data.chats);
        });
    }
  }, [user]);

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    const prompt = e.target.prompt.value;
    setSending(true);

    if (prompt.length > 50) {
      return alert("you are not allowed gt 50 character of letter!");
    }
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/images/chat/${id}?prompt=${prompt}`,
      { email: user.email }
    );
    setSending(false);

    setAllChats((prev) => [...prev, data.reply]);
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold mt-5 p-5">Discussion</h2>

        {allChats?.map((c) => (
          <div className="" key={c?._id}>
            {/* user reply */}
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000" />
                </div>
              </div>

              <div className="chat-header">You</div>
              <div className="chat-bubble">{c?.user}</div>
            </div>{" "}
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="https://img.icons8.com/?size=100&id=eoxMN35Z6JKg&format=png&color=000000" />
                </div>
              </div>
              <div className="chat-header">Keep Seek Ai</div>
              <div className="chat-bubble">{c?.ai}</div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <form
          onSubmit={handleChatSubmit}
          className="join w-full mt-6 p-5 border-t  border-gray-400/30"
        >
          <div className="w-full">
            <label className="input w-full validator join-item">
              <input
                type="text"
                placeholder="chat with keep seek to get more info.. "
                required
                className="w-full"
                name="prompt"
              />
            </label>
          </div>
          {sending ? (
            <p className="btn btn-neutral join-item">
              <span className="loading loading-spinner loading-sm"></span>
            </p>
          ) : (
            <button className="btn btn-neutral join-item">Send</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Discussion;
