import List, { iItems } from './components/List';

const list: iItems = [
  { name: 'user0', key: 0 },
  { name: 'user1', key: 1 },
  { name: 'user2', key: 2 },
  { name: 'user3', key: 3 },
  { name: 'user4', key: 4 },
  { name: 'user5', key: 5 },
  { name: 'user6', key: 6 },
  { name: 'user7', key: 7 },
  { name: 'user8', key: 8 },
  { name: 'user9', key: 9 },
  { name: 'user10', key: 10 },
  { name: 'user11', key: 11 },
  { name: 'user12', key: 12 },
  { name: 'user13', key: 13 },
  { name: 'user14', key: 14 },
  { name: 'user15', key: 15 },
];

function App() {
  const iterations: number = Math.trunc(list.length / 10);
  const listToRender: iItems[] = [];
  for (let i = 0; i <= iterations; i++) {
    const listToPush =
      i === iterations ? list.slice(i * 10) : list.slice(i * 10, 10);
    listToRender.push(listToPush);
  }

  return (
    <div className="App">
      <ul>
        {listToRender.map((list, index) => (
          <List key={index} items={list} />
        ))}
      </ul>
    </div>
  );
}

export default App;
