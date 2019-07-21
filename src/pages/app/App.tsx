import './App.scss';
import Sidebar from './components/siderbar/Sidebar';
import Topbar from './components/topbar/Topbar';
import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Today from './views/today/Index';
import Week from './views/week/Index';
import Month from './views/month/Index';
import Season from './views/season/Index';
import Year from './views/year/Index';
import today from '@/assets/img/svg/today.svg';
import week from '@/assets/img/svg/week.svg';
import month from '@/assets/img/svg/month.svg';
import season from '@/assets/img/svg/season.svg';
import year from '@/assets/img/svg/year.svg';

class App extends React.Component {
  render() {
    const routers = [
      {
        name: '今天',
        path: '/today',
        component: Today,
        icon: today
      },
      {
        name: '本周',
        path: '/week',
        component: Week,
        icon : week
      },
      {
        name: '本月',
        path: '/month',
        component: Month,
        icon: month,
      },
      {
        name: '本季',
        path: '/season',
        component: Season,
        icon: season,
      },
      {
        name: '本年',
        path: '/year',
        component: Year,
        icon: year,
      },
    ]
    return (
      <div className='app'>
        <div className="topbar-wrapper border-shadow">
          <Topbar />
        </div>
        <div className="main">
          <Router>
            <div className="sidebar-wrapper border-shadow">
              <Redirect from="/" to="/today" />
              <Sidebar routers={routers}/>
            </div>
            <div className="content-wrapper border-shadow">
              <div className="inner">
                <Route path="/today" exact={true} component={Today} />
                <Route path="/week" component={Week} />
              </div>
            </div>
          </Router>
        </div>
    </div>
    )
  }
}

export default App;
