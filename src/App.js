import "normalize.css";
import "./App.css";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import { HomePage } from "./routes/HomePage";
import { NavBar } from "./components/NavBar";
import { SettingsPage } from "./routes/SettingsPage";
import { NotFoundPage } from "./routes/NotFoundPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./routes/LoginPage";
import { PrivateRoute } from "./routes/PrivateRoute";
import { TestingPage } from "./routes/TestingPage";

function App() {
   return (
      <div className="App">
         <Router>
            <AuthProvider>
               <ThemeProvider>
                  
                  <NavBar />

                  <Switch>
                     <Route path="/settings" children={SettingsPage} />
                     <Route path="/login" component={LoginPage} />
                     <Route path="/testing" component={TestingPage} />
                     <PrivateRoute path="/" exact component={HomePage} />
                     <Route path="*" component={NotFoundPage} />


                  </Switch>
               </ThemeProvider>
            </AuthProvider>
         </Router>
         <ToastContainer />
      </div>
   );
}

export default App;
