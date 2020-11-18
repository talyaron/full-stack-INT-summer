import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Card from './components/Card/Card';


function App() {

  const [names, setNames] = useState([])

  function handleSubmit(e){
    e.preventDefault();
    let name = e.target.children.name.value;
   
    setNames([...names, name])
    e.target.children.name.value = '';
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input text='name' name='name'/>
          <input type='submit' value='send'/>
        </form>
       
        <p>
          This is my first react app
        </p>
        {
          names.map((name, index) => {
            return <Card name={name} age={18 + index} key={index} />
          })
        }

      </header>
    </div>
  );
}

export default App;
