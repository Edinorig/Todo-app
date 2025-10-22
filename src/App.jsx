import "./App.css";
import TaskManager from "./components/TaskManager";
import { getCookie } from "./components/util";

function App() {

  const username = getCookie("username");
  const password = getCookie("password");

  if (username && password) {
    console.log("Logged in as:", username);
  } else {
    console.log("Not logged in");
  }

  return (
    <div className="bg-sky-300 w-screen min-h-screen h-full">
      <TaskManager />


    </div>
  );
}

export default App;
