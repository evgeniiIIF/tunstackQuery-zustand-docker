import './App.css'
import CreateUserForm from './components/CreateUserForm';
import ThemeToggle from './components/ThemeToggle'
import UserList from './components/UserList'

function App() {

  return (
    <div className='app'>
      <h1>My React App</h1>
      <ThemeToggle />
      <UserList />
      <CreateUserForm />
    </div>
  );
}

export default App
