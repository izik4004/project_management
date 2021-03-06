import DashboardIcon from "../assets/dashboard_icon.svg"
import AddIcon from "../assets/add_icon.svg"
import {NavLink} from "react-router-dom"
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-content">
            <div className="user">
                {/* {avatar and username} */}
                <p>Welcome User</p>
            </div>
            <nav className="links">
                <ul>
                    <li>
                        <NavLink to="/">
                            <img src={DashboardIcon} alt="dashboard_icon" />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/create">
                            <img src={AddIcon} alt="add_icon" />
                            <span>New Project</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
