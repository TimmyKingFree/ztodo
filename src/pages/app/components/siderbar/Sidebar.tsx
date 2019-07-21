import * as React from "react";
import { NavLink } from "react-router-dom";
import './sidebar.scss';

interface router {
  name: string,
  path: string,
  icon?: any
}

interface Props {
  routers: Array<router>
}


class Sidebar extends React.Component<Props> {
  render() {
    const links = this.props.routers.map((router, index) => {
      return (
        <div className="link-wrapper"  key={index}>
          <NavLink
            to={router.path}
            activeClassName="active">
              {router.icon 
                ? <img src={router.icon} alt="icon" className="icon" />
                : null}
              <span className="name">
                {router.name}
              </span>
          </NavLink>
        </div>
      )
    })
    return (
      <div className='sidebar'>
        {links}
      </div>
    )
  }
}

export default Sidebar;