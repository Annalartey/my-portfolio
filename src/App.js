import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css'
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
      </Switch>
  </Router>
  );
}

export default App;

