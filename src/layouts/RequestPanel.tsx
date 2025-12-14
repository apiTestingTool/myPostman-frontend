import { useState } from "react";
import {
  RequestBody,
  RequestAuthorization,
  RequestCookies,
} from "@/components";


type Tab = "body" | "auth" | "cookies";

export default function RequestPanel() {
  const [activeTab, setActiveTab] = useState<Tab>("body");

  return (
    <div className="w-1/2 text-white rounded h-full flex flex-col">
      {/* Tabs */}
      <div className="flex gap-6">
        <TabButton
          label="Body"
          active={activeTab === "body"}
          onClick={() => setActiveTab("body")}
        />
        <TabButton
          label="Authorization"
          active={activeTab === "auth"}
          onClick={() => setActiveTab("auth")}
        />
        <TabButton
          label="Cookies"
          active={activeTab === "cookies"}
          onClick={() => setActiveTab("cookies")}
        />
      </div>

      {/* Content */}
      <div className="flex-1 mt-3 bg-[#2a2a2a] rounded py-2 overflow-auto">
        {activeTab === "body" && <RequestBody />}
        {activeTab === "auth" && <RequestAuthorization />}
        {activeTab === "cookies" && <RequestCookies />}
      </div>
    </div>
  );
}

/* ---------- Tab Button ---------- */

function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative pb-2 text-sm font-semibold transition-colors
        ${active ? "text-blue-500" : "text-gray-400 hover:text-white"}
      `}
    >
      {label}

      {active && (
        <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-blue-500 rounded" />
      )}
    </button>
  );
}
