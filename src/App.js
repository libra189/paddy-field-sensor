import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div id="content" className="container-fluid">
        <div className="row">
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">水田センサー</h1>
            </div>
          </main>
        </div>

        <h1>水田センサー</h1>
        <div className="row">
          <div className="col-sm">
            <h2>水位</h2>
          </div>
          <div className="col-sm">
            <h2>水温</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
