import People from './components/People';
import './App.css';

function App() {
  return (
    <div className="App">
      <People 
      firstName = {"Jane"}
      lastName = {"Doe"}
      age = {42}
      hairColor = {"Brown"}
      />
      <People 
      firstName = {"john"}
      lastName = {"Doe"}
      age = {45}
      hairColor = {"Black"}
      />
      <People 
      firstName = {"Will"}
      lastName = {"Dwelle"}
      age = {24}
      hairColor = {"Brown"}
      />
      <People 
      firstName = {"Gianna"}
      lastName = {"Dwelle"}
      age = {23}
      hairColor = {"Red"}
      />
    </div>
  );
}

export default App;
