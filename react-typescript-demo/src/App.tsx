import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Peter',
      last: 'Parker'
    }
  ]
  return (
    <>
      <div className='App'>
        <Greet name={'Aram'} messageCount={20} isLoggedIn={false} />
        <Person name={personName}/>
        <PersonList names={nameList}/>
      </div>
    </>
  );
}

export default App;
