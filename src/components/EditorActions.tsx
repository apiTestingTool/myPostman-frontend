import { useState } from "react";

interface EditorActionsProps {
  value: string;
  onBeautify?: (formatted: string) => void;
  readOnly?: boolean;
}

export default function EditorActions({
  value,
  onBeautify,
  readOnly = false,
}: EditorActionsProps) {
  const [copied, setCopied] = useState(false);

  const handleBeautify = () => {
    try {
      const formatted = JSON.stringify(JSON.parse(value), null, 2);
      onBeautify?.(formatted);
    } catch {
      alert("Invalid JSON");
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);

    setTimeout(() => setCopied(false), 1000); // hide after 1s
  };

  return (
    <div className="relative flex items-center gap-2 overflow-visible">
      {!readOnly && (
        <button
          onClick={handleBeautify}
          className="text-blue-500 font-semibold text-sm px-2 py-1 hover:text-blue-400"
        >
          Beautify
        </button>
      )}

      <button
        onClick={handleCopy}
        className="text-blue-500 font-semibold text-sm px-2 py-1 hover:text-blue-400"
      >
        Copy
      </button>

      {/* Toast message */}
      {copied && (
        <span className="absolute -top-6 right-0 bg-black text-white text-xs px-2 py-1 rounded opacity-90 z-50 animate-toast">
          Copied!
        </span>
      )}
    </div>
  );
}
