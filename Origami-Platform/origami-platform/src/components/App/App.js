import React from 'react';
import './App.css';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Aside from '../Aside';
import Posts from '../Posts';
import Main from '../Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreatePost from '../CreatePost';
import Register from '../Register';
import Login from '../Login';
import Profile from '../Profile';
import NotFound from '../NotFound';

function render(title, Component) {
  return function () {
    return <Main title={title}><Component /></Main>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <div className="Container">
            <Aside />
            <Switch>
              <Route path="/" exact render={render('Big Title', Posts)} />
              <Route path="/create-post" render={render('Share your thoughts...', CreatePost)} />
              <Route path="/register" render={render('Register', Register)} />
              <Route path="/login" render={render('Login', Login)} />
              <Route path="/profile" render={render('Profile', Profile)} />
              <Route path="*" render={render('Page not found', NotFound)} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router >
    )
  }
};

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navigation />
//         <div className="Container">
//           <Aside />
//           {/* <Main title="Big Title"> */}
//           {/* <Posts /> */}
//           <Switch>
//             <Route path="/" exact render={render('Big Title', Posts)} />
//             <Route path="/create-post" render={render('Share your thoughts...', CreatePost)} />
//             <Route path="/register" render={render('Register', Register)} />
//             <Route path="/login" render={render('Login', Login)} />
//             <Route path="/profile" render={render('Profile', Profile)} />
//             <Route path="*" render={render('Page not found', NotFound)} />
//           </Switch>
//           {/* </Main> */}
//         </div>
//         <Footer />
//       </div>
//     </Router >
//   );
// }

export default App;