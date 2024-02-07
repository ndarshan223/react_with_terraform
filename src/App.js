import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to 2024 </h1>

        <t1> Application built and deployed by Darshan R Naik</t1>
        <t1>Mail id : ndarshan223@gmail.com</t1>
        <h3> Repo code https://github.com/ndarshan223/assignment</h3>
        
        <button style={{ fontSize: '20px', padding: '10px 20px' }} onClick={() => window.open("https://github.com/ndarshan223/assignment/blob/main/terraform/ec2.tf", "_blank")}>Infrastructure Code</button> 
        <br></br>        

        <button style={{ fontSize: '20px', padding: '10px 20px' }} onClick={() => window.open("https://github.com/ndarshan223/assignment", "_blank")}>Application Code</button> 
        <br></br>
        <button style={{ fontSize: '20px', padding: '10px 20px' }} onClick={() => window.open("https://github.com/ndarshan223/assignment/blob/main/.github/workflows/cicd.yml", "_blank")}>Configuration file for CICD of Github workflow Self hosted runner</button>


      </header>
    </div>
  );
}

export default App;
