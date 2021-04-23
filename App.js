
import './App.css';
import './Header.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import VideoRecommendation from './components/VideoRecommendation';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import SearchPage from "./components/SearchPage"
function App() {
  return (
    <div className="app">{/*BEM class aming conv*/}
      {/* Header (sticky*/}
      <Router>
        <Switch>
          <Route path = "/search/:searchTerm">
            <Header />
            <div className="app_page">
            <Sidebar />
            
            <SearchPage />
            
            </div>
          </Route>
          <Route>
            <Header />
            <div className="app_page">
              {/* Sidebar */}
              <Sidebar />
              
  
              {/*Video Recommendation */}
              <VideoRecommendation />
            </div>
    
          </Route>
        </Switch>
      </Router>
    </div>  
  );
}

export default App;
