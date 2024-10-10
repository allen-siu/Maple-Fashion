import AvatarWindow from "./components/AvatarWindow";
import ClosetWindow from "./components/ClosetWindow";
import HeaderBar from "./components/HeaderBar";

function App() {
  return (
    <div className="flex-col h-screen max-h-screen overflow-y-visible">
      <HeaderBar />

      <div className="flex flex-row h-[calc(100vh-8vh)] max-h-[calc(100vh-8vh)]">
        <ClosetWindow />
        <AvatarWindow />
      </div>
    </div>
  );
}

export default App;
