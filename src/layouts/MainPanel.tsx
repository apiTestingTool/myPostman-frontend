import { RequestBar, RequestPanel, ResponsePanel } from "@/components";

export default function MainPanel() {
  return (
    <main className="flex-1 flex flex-col flex-shrink-0 min-w-[640px] px-4">
      {/* Top request bar */}
      <RequestBar />

      {/* Request Body, Auathorization & Response */}
      <div className="flex flex-1 gap-2 py-2 min-w-[900px] overflow-x-auto h-full">
        {/* Below content area: Request and Response side by side */}
        <RequestPanel />
        <ResponsePanel />
      </div>
    </main>
  );
}
