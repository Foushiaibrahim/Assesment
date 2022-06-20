import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Table from './component/table';
import UserApp from './component/userTable';
import Mainpage from './Pages/mainpage';
import Secondpage from './Pages/secondpage';
import Thirdpage from './Pages/thirdpage';
import Fourthpage from './Pages/forthpage';
import Lastpage from './Pages/lastpage';
export default function App() {
  return (
      <main>
          <Switch>
              <Route path="/" component={Mainpage} exact />
              <Route path="/second" component={Secondpage} />
              <Route path="/third" component={Thirdpage} />
              <Route path='/fourth'component={Fourthpage}/>
              <Route path="/last" component={Lastpage}/>
          </Switch>
      </main>
  )
}