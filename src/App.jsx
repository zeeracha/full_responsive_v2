import GlobalStyle from './globalStyles';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';




import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
