import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChangeOfMonth from './ChangeOfMonth';

function App() {
  return (
    <div className="App">
      <header className="site-header p-2 navbar-dark bg-dark">
        <div className="navbar-brand">水田センサー</div>
        <nav className="gnav navbar-brand">
          {/* <ul className="gnav__menu">
            <li className="gnav__menu__item"><a>About</a></li>
            <li className="gnav__menu__item"><a>Works</a></li>
          </ul> */}
          <div>2020/08/20 10:00 現在</div>
        </nav>
      </header>

      <main role="main" className="px-md-4 bg-light">
        <div id="senser-values" className="pb-2 h-50">
          <div className="row align-items-center h-100">
            <div className="col-sm box mr-2">
              <h2 className="h2 border-bottom">水位</h2>
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
              <h2 className="h2 border-bottom">水温</h2>
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
        <div id="change-of-month" className="h-50">
          <h2 className="h2 border-bottom">月間推移</h2>
          <ChangeOfMonth />
        </div>
      </main>
    </div>
  );
}

export default App;
