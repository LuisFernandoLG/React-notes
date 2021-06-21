import "./App.css";

import { Route, HashRouter as Router, Switch } from "react-router-dom";
import { HomePage } from "./routes/HomePage";
import { NavBar } from "./components/NavBar";
import { SettingsPage } from "./routes/SettingsPage";
import { NotFoundPage } from "./routes/NotFoundPage";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"

function App() {
   return (
      <div className="App">
         <Router>
            <NavBar />

            <Switch>
               <Route path="/settings" children={SettingsPage} />
               <Route path="/" exact component={HomePage}/>
               <Route path="*" component={NotFoundPage} />
            </Switch>
         </Router>
         <ToastContainer/>
      </div>
   );
}

export default App;
