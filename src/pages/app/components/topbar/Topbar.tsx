import * as React from 'react';
import './topbar.scss';
import logo from '@/assets/img/logo.png';

class Topbar extends React.Component {
  render() {
    return (
      <div className="topbar"> 
        <div className="inner">
          <img className="logo" src={logo} />
        </div>
      </div>
    )
  }
}

export default Topbar;