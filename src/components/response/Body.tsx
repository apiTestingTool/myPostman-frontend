import { useState } from "react";
import Editor from "@monaco-editor/react";
import EditorActions from "../EditorActions";

export default function ResponseBody() {
  const [value, setValue] = useState(`{"status":200,"data":{"id":1,"name":"John"}}`);

  return (
    <div className="h-full flex flex-col px-2">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-400">Response Body (JSON)</span>
        <EditorActions value={value} onBeautify={setValue} readOnly />
      </div>

      <div className="flex-1 border border-[#3a3a3a] rounded overflow-hidden">
        <Editor
          height="100%"
          language="json"
          theme="vs-dark"
          value={value}
          options={{
            readOnly: true,
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
