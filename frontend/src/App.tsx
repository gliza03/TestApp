import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import teams from './CollegeBasketballTeams.json';
// This is typescript!
function Welcome() {
  return (
    <div>
      <h1>March Madness!</h1>
      <h3>
        With March Madness coming up, here's a website that lists out info about
        all colleges in NCAA Basketball!
      </h3>
    </div>
  );
}

function Team(props: {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <div className="card m-3 shadow" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{props.school}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.name}</h6>
        <p className="card-text">
          <strong>Location:</strong> {props.city}, {props.state}
        </p>
      </div>
    </div>
  );
}
function TeamList() {
  return (
    <div className="container">
      <div className="row">
        {teams.teams.map((oneTeam) => (
          <div className="col-md-4">
            <Team {...oneTeam} />
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;
