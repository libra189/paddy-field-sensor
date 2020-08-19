import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
      {/* <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">水田センサー</a>
      </nav> */}

      <main role="main" className="px-md-4">
        <div className="container-fluid">
          <div className="">
            <div className="row py-2">
              <div className="col-12">
                <h1 className="h2 alert alert-primary">2020/08/20 10:00 現在</h1>
              </div>
              <div className="col-sm box mr-2">
                <h1 className="h2">水位</h1>
                <div className="row justify-content-center">
                  <div className="col-4 text-right h1">
                    30
                  </div>
                  <div className="col-4">
                    cm
                  </div>
                </div>
              </div>
              <div className="col-sm box ml-2">
                <h1 className="h2">水温</h1>
                <div className="row justify-content-center">
                  <div className="col-4 text-right h1">
                    35
                  </div>
                  <div className="col-4">
                    ℃
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box mt-2">
          <div className="row">
            <div className="col">
              <h1 className="h2 alert alert-primary">月間推移</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
