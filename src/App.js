import logo from './logo.svg';
import './App.css';
import Comment from './Comment';
import Ecommerce from './Ecommerce';
import Forum from './Forum';
function App() {
  return (
    <div className="App">
      <Comment />
      <Forum topic="What is React ?" />
      <Ecommerce />
      
    </div>
  );
}

export default App;
