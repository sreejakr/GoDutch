import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUpPage from './SignUpPage';
import Navbar from './Navbar';
import Bills from './Bills';
import WithoutNav from './WithoutNav';
import WithNav from './WithNav';

const App = (props) => {
  console.log(props.location);

  return (
    <div style={{ fontFamily: 'Avenir' }}>
      {/* <Navbar /> */}
      <Router>
        {/* <AuthProvider> */}
        <Routes>
          {/* <Route path="/chats" component={Chats} /> */}
          <Route element={<WithoutNav />}>
            <Route path='/' element={<Login />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path='/signUp' element={<SignUpPage />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/bills" element={<Bills />} />
          </Route>
        </Routes>
        {/* </AuthProvider> */}
      </Router>
    </div>
  );
}



export default App;
