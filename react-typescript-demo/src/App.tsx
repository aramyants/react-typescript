import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Peter',
      last: 'Parker',
    },
  ];
  return (
    <>
      <div className="App">
        <Button
          handleClick={(event, id) => console.log('Button clicked', event, id)}
        />
        <Input  handleChange={(event) => console.log('Input changed', event)} />

      </div>
    </>
  );
}

export default App;
