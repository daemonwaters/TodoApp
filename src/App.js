import React,{useState} from 'react'
import './App.css';
import Input from './components/Input';
import Todo from './components/Todo';

function App() {
  const [inputText,setInputText] = useState('');
  const [todos,setTodos] = useState([]);
  return (
    <div className="wrapper">
      <header>
        <h1>
          simple react todo app
        </h1>
      </header>
        <Input todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
        {todos.map((todo,index)=>{
          return (
            <Todo todos={todos} setTodos={setTodos} index={index+1} key={index} todo={todo}/>
          )
        })}
    </div> 
  );
}

export default App;
