import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUpPage from './SignUpPage';
import Navbar from './Navbar';
import Bills from './Bills';
import NewBill from './NewBill';
import WithoutNav from './WithoutNav';
import WithNav from './WithNav';

const App = (props) => {
  console.log(props.location);

  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path='/' element={<Login />} />
          </Route>
          <Route element={<WithoutNav />}>
            <Route path='/register' element={<SignUpPage />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/bills" element={<Bills />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/newBill" element={<NewBill />} />
          </Route>
        </Routes>
        {/* </AuthProvider> */}
      </Router>
    </div>
  );
}



export default App;
