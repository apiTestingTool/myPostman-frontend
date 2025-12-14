import { useState } from "react";
import Editor from "@monaco-editor/react";
import EditorActions from "../EditorActions";

export default function Body() {
  const [value, setValue] = useState(`{
  "name": "John",
  "age": 25
}`);

  return (
    <div className="h-full flex flex-col px-2">
      <div className="flex items-center justify-between mb-2 overflow-visible">
        <span className="text-sm text-gray-400">Request Body (JSON)</span>
        <EditorActions value={value} onBeautify={setValue} />
      </div>

      <div className="flex-1 border border-[#3a3a3a] rounded overflow-hidden">
        <Editor
          height="100%"
          language="json"
          theme="vs-dark"
          value={value}
          onChange={(v) => setValue(v || "")}
          options={{
            minimap: { enabled: false },
            wordWrap: "on",
            fontSize: 14,
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  );
}