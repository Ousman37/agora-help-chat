import { type } from "os";
import { useState } from "react";

type TMessage = {
  message: string;
  id: string;
  sender: string;
};

export const HelpWidget = () => {
  const [isChatPaneIDisplayed, setIsChatPaneIDisplayed] = useState(false);
  const [senderId, setSenderId] = useState("0");

  const [messages, setMessages] = useState<TMessage[]>([
    {
      message: "Hello, how can we help you today?",
      id: "bd28bkakc2",
      sender: "1",
    },
    {
      message: "I need help fixing my computer.",
      id: "zbc2854bkcna",
      sender: "0",
    },
    {
      message: "I need help fixing my computer.",
      id: "zbc2854bkcna",
      sender: "1",
    },
    {
      message: "I need help fixing my computer.",
      id: "zbc2854bkcna",
      sender: "1",
    },
    {
      message: "I need help fixing my computer.",
      id: "zbc2854bkcna",
      sender: "0",
    },
  ]);

  return isChatPaneIDisplayed ? (
    <div
      className="
      fixed bottom-10 right-10
      flex h-96  w-72 flex-col justify-between bg-white p-6 "
    >
      <button
        className="absolute top-2 right-2 hover:text-red-400"
        onClick={() => setIsChatPaneIDisplayed(false)}
      >
        X
      </button>

      <ul>
        {messages.map(({ message, id, sender }) => (
          <li
            className={`mb-2 rounded p-1 ${
              sender === senderId ? "bg-gray-50" : "bg-blue-200"
            }`}
            key={id}
          >
            {message}
          </li>
        ))}
        ;
      </ul>

      <form className="flex">
        <input className="w-full border border-gray-600 p-1 px-2"></input>
        <button className=" right-10 cursor-pointer bg-blue-400 p-2 px-4 text-white hover:bg-blue-500">
          Send
        </button>
      </form>
    </div>
  ) : (
    <button
      onClick={() => setIsChatPaneIDisplayed(true)}
      className="
     fixed bottom-10 right-10 cursor-pointer bg-blue-400 p-2 px-3 text-white 
     hover:bg-blue-500
  "
    >
      Speak to our Support Team
    </button>
  );
};
