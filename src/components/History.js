import React from "react";

const History = () => {
  return (
    <div>
      <h3>Historia</h3>
      <div>
        <p>Data</p>
        <p>Dzień</p>
        <p>Od</p>
        <p>Do</p>
        <p>Suma</p>
      </div>
      <div className="note">
        <button>Dodaj notatkę</button>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Zapisz</button>
        </div>
      </div>
    </div>
  );
};

export default History;
