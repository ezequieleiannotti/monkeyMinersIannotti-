import React from "react";
import Api from "./Api";

function ProdtcosApi({ api }) {
  return (
    <div>
      {api.map((api, index) => (
        <div className="card">
          <div className="row">
            <div className="col-md-4">
              <Api
                key={index}
                id={api.id}
                name={api.name}
                description={api.description}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProdtcosApi;
