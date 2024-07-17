import AvatarWindow from "./components/AvatarWindow";
import ClosetWindow from "./components/ClosetWindow";
import HeaderBar from "./components/HeaderBar";

function App() {
  return (
    <div className="flex-col h-screen max-h-screen overflow-y-visible">
      <HeaderBar />

      <div className="flex flex-row h-[calc(100vh-72px)] max-h-[calc(100vh-72px)]">
        <ClosetWindow />
        <AvatarWindow />
      </div>
    </div>
  );
}

export default App;
