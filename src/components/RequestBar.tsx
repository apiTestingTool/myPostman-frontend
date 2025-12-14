import { useState } from "react";
import type { HttpMethod } from "../types/global";

const METHOD_CLASS: Record<HttpMethod, string> = {
  GET: "text-http-get font-semibold",
  POST: "text-http-post font-semibold",
  PUT: "text-http-put font-semibold",
  PATCH: "text-http-patch font-semibold",
  DELETE: "text-http-delete font-semibold",
};

const METHODS: HttpMethod[] = ["GET", "POST", "PUT", "PATCH", "DELETE"];

export default function RequestBar() {
  const [method, setMethod] = useState<HttpMethod>("GET");
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-1 py-1">
      {/* Top display div: live URL preview */}
      <div className="py-1 text-sm font-semibold text-gray-400 truncate">
        {url || "Untitled Request"}
      </div>

      {/* Request Bar */}
      <div className="flex items-center gap-3 pb-2 main-bg">
        {/* Method + URL */}
        <div className="flex items-center flex-1 min-w-0">
          {/* HTTP Method */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setOpen(!open)}
              className={`h-10 w-[100px] px-3 rounded-tl-md rounded-bl-md bg-[#2a2a2a] flex items-center justify-between ${METHOD_CLASS[method]}`}
            >
              <span className="truncate">{method}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-4 h-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {open && (
              <div className="absolute mt-1 w-full bg-[#2a2a2a] rounded z-10">
                {METHODS.map((m) => (
                  <div
                    key={m}
                    onClick={() => {
                      setMethod(m);
                      setOpen(false);
                    }}
                    className={`px-3 py-2 cursor-pointer hover:bg-gray-700 ${METHOD_CLASS[m]}`}
                  >
                    {m}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Vertical Line */}
          <div className="w-px h-6 bg-[#202020]" />
          {/* URL Input */}
          <input
            id="url-request"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter request URL"
            className="flex-1 min-w-0 h-10 px-3 rounded-tr-md rounded-br-md bg-[#2a2a2a] text-white outline-none placeholder:text-gray-400 whitespace-nowrap overflow-x-auto"
          />
        </div>

        {/* RIGHT: Send Button (separate div) */}
        <div className="flex-shrink-0">
          <button className="h-10 px-4 flex items-center gap-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold">
            <span>Send</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
