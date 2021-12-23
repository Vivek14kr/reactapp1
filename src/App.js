
import './App.css';

function App() {
 
  const arr = ["Android", "Blackberry", "iPhone", "Windows Phone"]
  const manu = ["Samsung", "HTC","Micromax", "Apple"]
  return(
     <div className="App">

       <h1>Mobile Operating System</h1>
       {arr.map((e) =>(
        <ul>
          <li>{e}</li>
        </ul>
      ))}
      <h1>Mobile Manufacturers</h1>
       {manu.map((e) =>(
        <ul>
          <li>{e}</li>
        </ul>
      ))}
  </div>
  );
}

export default App;
