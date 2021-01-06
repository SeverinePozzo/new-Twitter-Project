import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Widgets from "./Widgets"

function App() {
  return (

    <div className="container flex mx-auto">
      <Sidebar/>
      <Feed/>
      <Widgets/>
    </div>

    /*
    
    <Sidebar>

    <Feed>

    <Widgets>

    */

  );
}

export default App;

