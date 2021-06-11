import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css'
import DetailedAbout from "./component/DetailedAbout";
import GraphicPage from "./component/GraphicPage";
import Home from "./component/Home";
import LyricsPage from "./component/LyricsPage";
import PaperPage from "./component/PaperPage";
import WebsitePage from "./component/WebsitePage";



function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/design-website" component={WebsitePage} />
          <Route exact path="/design-graphics" component={GraphicPage} />
          <Route exact path="/design-lyrics" component={LyricsPage} />
          <Route exact path="/design-paper" component={PaperPage} />
          <Route exact path="/detailed-about" component={DetailedAbout} />
      </Switch>
  </Router>
  );
}

export default App;

