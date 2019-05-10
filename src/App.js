import React from 'react';
import Travel from './components/Travel';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Travel
            destinations="Rio"
            country="Brésil"
            picture="https://lepetitjournal.com/sites/default/files/styles/main_article/public/2018-03/Br%C3%A9sil.jpg?itok=KPPBy_Qc"
            distance="8620 km"
          />
        </div>
        <div className="col-md-6">
          <Travel
            destinations="Dubai"
            country="Emirats arabes unis"
            picture="https://images.salaun-holidays.com/(Image)-image-emirats-arabes-unis-abu-dhabi-01-is_517465184.jpg"
            distance="6702 km"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
