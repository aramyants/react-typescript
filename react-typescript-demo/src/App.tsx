import './App.css';
import { List } from './components/generics/List';

function App() {
  return (
    <>
      <div className="App">
        {/* <List
          items={['Batman', 'Superman', 'Spiderman', 'Wonder Woman']}
          onClick={(value) => console.log(value)}
        />
        <List
          items={[1, 2, 3, 4, 5]}
          onClick={(value) => console.log(value)}
        /> */}
        <List
          items={[
            { id: 1, first: 'Bruce', last: 'Wayne' },
            { id: 2, first: 'Clark', last: 'Kent' },
            { id: 3, first: 'Peter', last: 'Parker' },
            { id: 4, first: 'Diana', last: 'Prince' },
          ]}
          onClick={(value) => console.log(value)}
        />
      </div>
    </>
  );
}

export default App;
