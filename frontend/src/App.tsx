import './App.css';
// This is typescript!
function Welcome() {
  return <h1>Criminally underrated pop girls</h1>;
}

const artists = [
  { name: 'Addison Rae', bestSong: 'Diet Pepsi' },
  { name: 'Tinashe', bestSong: 'Nasty' },
  { name: 'LISA', bestSong: 'Rockstar' },
];

function Band({ name, bestSong }: { name: string; bestSong: string }) {
  return (
    <>
      <h2>Name: {name}</h2>
      <h2>Song: {bestSong}</h2>
    </>
  );
}

function BandList() {
  return (
    <>
      {artists.map((oneArtist) => (
        <Band {...oneArtist} />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <BandList />
    </>
  );
}

export default App;
