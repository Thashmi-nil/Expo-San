// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
// import './App.css'
// import Home from "./pages/home/Home";

// function App() {
//   return (
//     <div className="App">
//       <Topbar />
//       <div className="container">
//         <Sidebar />
//         <Home />
//       </div>
//     </div>
//   );
// }

// export default App;

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './App.css'
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Analytics from "./pages/analytics/Analytics";
import Sales from "./pages/sales/Sales";
import Transactions from "./pages/transactions/Transaction";
import Reports from "./pages/reports/Reports";
import Malils from "./pages/mails/Mails";
import Feedback from "./pages/feedback/Feedback";
import Messages from "./pages/messages/Messages";
import Manage from "./pages/manage/Manage";
import SystemLog from "./pages/systemLog/SystemLog";
import Users from "./pages/users/Users"

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/analytics">
            <Analytics />
          </Route>
          <Route path="/sales">
            <Sales />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/products/:productId">
            <User />
          </Route>
          <Route path="/newProduct">
            <NewUser />
          </Route>
          <Route path="/transactions">
            <Transactions />
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
          <Route path="/mails">
            <Malils />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/manage">
            <Manage />
          </Route>
          <Route path="/systemLog">
            <SystemLog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
