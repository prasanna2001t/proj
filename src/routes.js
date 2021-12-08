/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
 
  {
    path: "/dashboard",
    name: "Company Info",
    icon: "fas fa-info-circle",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Visualization",
    icon: "fas fa-eye",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Marking AOI",
    icon: "fas fa-map-marker-alt",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Land Cover",
    icon: "fas fa-globe",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Export",
    icon: "fas fa-file-export",
    component: Icons,
    layout: "/admin",
  },

];

export default dashboardRoutes;
