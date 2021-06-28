import ProfilePhoto from "./Profile/ProfilePhoto";
import FullName from "./Profile/FullName";
import Address from "./Profile/Address";
import "./App.css";
const App = () => {
  return (
    <div className="container">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
};

export default App;
