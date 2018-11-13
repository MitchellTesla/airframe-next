import React from 'react';

import { SidebarMenu } from './../../components';

export class SidebarMiddleNav extends React.PureComponent {
    constructor() {
        super();
        
        this.state = {
            isInteractive: false
        };
    }

    componentDidMount() {
        this.setState({ isInteractive: true });
    }

    render() {
        const { isInteractive } = this.state;
        return (
            <SidebarMenu disabled={ !isInteractive }>
                <SidebarMenu.Item
                    icon={<i className="fa fa-fw fa-home"></i>}
                    title="Dashboards"
                >
                    <SidebarMenu.Item title="Analytics"to='/dashboards/analytics' exact />
                    <SidebarMenu.Item title="Projects"to='/dashboards/projects' exact />
                    <SidebarMenu.Item title="System"to='/dashboards/system' exact />
                </SidebarMenu.Item>
                <SidebarMenu.Item
                    icon={<i className="fa fa-fw fa-th"></i>}
                    title="Widgets"
                to='/widgets'
                />
                { /* -------- Cards ---------*/ }
                <SidebarMenu.Item
                    icon={<i className="fa fa-fw fa-clone"></i>}
                    title="Cards"
                >
                    <SidebarMenu.Item title="Cards"to='/cards/cards' exact />
                    <SidebarMenu.Item title="Cards Headers"to='/cards/cardsheaders' exact />
                </SidebarMenu.Item>
                { /* -------- Layouts ---------*/ }
                <SidebarMenu.Item
                    icon={<i className="fa fa-fw fa-columns"></i>}
                    title="Layouts"
                >
                    <SidebarMenu.Item title="Navbar"to='/layouts/navbar-only' exact />
                    <SidebarMenu.Item title="Sidebar Default"to='/layouts/sidebar-default' exact />
                    <SidebarMenu.Item title="Sidebar A"to='/layouts/sidebar-a' exact />
                </SidebarMenu.Item>
                { /* -------- Interface ---------*/ }
                <SidebarMenu.Item
                    icon={<i className="fa fa-fw fa-toggle-on"></i>}
                    title="Interface"
                >
                    <SidebarMenu.Item title="Colors"to='/interface/colors' />
                    <SidebarMenu.Item title="Typography"to='/interface/typography' />
                    <SidebarMenu.Item title="Buttons"to='/interface/buttons' />
                    <SidebarMenu.Item title="Paginations"to='/interface/paginations' />
                    <SidebarMenu.Item title="Images"to='/interface/images' />
                    <SidebarMenu.Item title="Avatars"to='/interface/avatars' />
                    <SidebarMenu.Item title="Progress Bars"to='/interface/progress-bars' />
                    <SidebarMenu.Item title="Badges & Labels"to='/interface/badges-labels' />
                    <SidebarMenu.Item title="Media Objects"to='/interface/media-objects' />
                    <SidebarMenu.Item title="List Groups"to='/interface/list-groups' />
                    <SidebarMenu.Item title="Alerts"to='/interface/alerts' />
                    <SidebarMenu.Item title="Accordions"to='/interface/accordions' />
                    <SidebarMenu.Item title="Tabs Pills"to='/interface/tabs-pills' />
                    <SidebarMenu.Item title="Tooltips & Popovers"to='/interface/tooltips-popovers' />
                    <SidebarMenu.Item title="Dropdowns"to='/interface/dropdowns' />
                    <SidebarMenu.Item title="Modals"to='/interface/modals' />
                    <SidebarMenu.Item title="Breadcrumbs"to='/interface/breadcrumbs' />
                    <SidebarMenu.Item title="Navbars"to='/interface/navbars' />
                </SidebarMenu.Item>
                { /* -------- Graphs ---------*/ }
                <SidebarMenu.Item
                    icon={<i className="fa fa-fw fa-pie-chart"></i>}
                    title="Graphs"
                >
                    <SidebarMenu.Item title="ReCharts"to='/graphs/recharts' />
                </SidebarMenu.Item>
                { /* -------- Forms ---------*/ }
                <SidebarMenu.Item
                    icon={<i className="fa fa-fw fa-check-square-o"></i>}
                    title="Forms"
                >
                    <SidebarMenu.Item title="Forms"to='/forms/forms' />
                    <SidebarMenu.Item title="Forms Layouts"to='/forms/forms-layouts' />
                    <SidebarMenu.Item title="Input Groups"to='/forms/input-groups' />
                </SidebarMenu.Item>
                { /* -------- Tables ---------*/ }
                <SidebarMenu.Item
                    icon={<i className="fa fa-fw fa-trello"></i>}
                    title="Tables"
                >
                    <SidebarMenu.Item title="Tables"to='/tables/tables' />
                </SidebarMenu.Item>
                { /* -------- Apps ---------*/ }
                <SidebarMenu.Item
                    icon={<i className="fa fa-fw fa-mouse-pointer"></i>}
                    title="Apps"
                >
                    <SidebarMenu.Item title="Projects">
                        <SidebarMenu.Item title="Projects List"to="/apps/projects/list" />
                        <SidebarMenu.Item title="Projects Grid"to="/apps/projects/grid" />
                    </SidebarMenu.Item>
                    <SidebarMenu.Item title="Tasks">
                        <SidebarMenu.Item title="Tasks List"to="/apps/tasks/list" />
                        <SidebarMenu.Item title="Tasks Grid"to="/apps/tasks/grid" />
                        <SidebarMenu.Item title="Tasks Kanban"to="/apps/tasks-kanban" />
                        <SidebarMenu.Item title="Tasks Details"to="/apps/tasks-details" />
                    </SidebarMenu.Item>
                    <SidebarMenu.Item title="Files">
                        <SidebarMenu.Item title="Files List"to="/apps/files/list" />
                        <SidebarMenu.Item title="Files Grid"to="/apps/files/grid" />
                    </SidebarMenu.Item>
                    <SidebarMenu.Item title="Search Results">
                        <SidebarMenu.Item title="Search Results"to="/apps/search-results" />
                        <SidebarMenu.Item title="Images Results"to="/apps/images-results" />
                        <SidebarMenu.Item title="Videos Results"to="/apps/videos-results" />
                        <SidebarMenu.Item title="Users Results"to="/apps/users-results" />
                    </SidebarMenu.Item>
                    <SidebarMenu.Item title="Users">
                        <SidebarMenu.Item title="Users List"to="/apps/users/list" />
                        <SidebarMenu.Item title="Users Grid"to="/apps/users/grid" />
                    </SidebarMenu.Item>
                    <SidebarMenu.Item title="Gallery">
                        <SidebarMenu.Item title="Gallery Grid"to="/apps/gallery-grid" />
                        <SidebarMenu.Item title="Gallery Table"to="/apps/gallery-table" />
                    </SidebarMenu.Item>
                    <SidebarMenu.Item title="Mailbox">
                        <SidebarMenu.Item title="Inbox"to="/apps/inbox" />
                        <SidebarMenu.Item title="New Email"to="/apps/new-email" />
                        <SidebarMenu.Item title="Email Details"to="/apps/email-details" />
                    </SidebarMenu.Item>
                    <SidebarMenu.Item title="Profile">
                        <SidebarMenu.Item title="Profile Details"to="/apps/profile-details" />
                        <SidebarMenu.Item title="Profile Edit"to="/apps/profile-edit" />
                        <SidebarMenu.Item title="Account Edit"to="/apps/account-edit" />
                        <SidebarMenu.Item title="Billing Edit"to="/apps/billing-edit" />
                        <SidebarMenu.Item title="Settings Edit"to="/apps/settings-edit" />
                        <SidebarMenu.Item title="Sessions Edit"to="/apps/sessions-edit" />
                    </SidebarMenu.Item>
                    <SidebarMenu.Item title="Clients"to="/apps/clients" exact />
                    <SidebarMenu.Item title="Chat"to="/apps/chat" exact />
                </SidebarMenu.Item>
                { /* -------- Pages ---------*/ }
                <SidebarMenu.Item
                    icon={<i className="fa fa-fw fa-copy"></i>}
                    title="Pages"
                >
                    <SidebarMenu.Item title="Register"to="/pages/register" />
                    <SidebarMenu.Item title="Login"to="/pages/login" />
                    <SidebarMenu.Item title="Forgot Password"to="/pages/forgot-password" />
                    <SidebarMenu.Item title="Lock Screen"to="/pages/lock-screen" />
                    <SidebarMenu.Item title="Error 404"to="/pages/error-404" />
                    <SidebarMenu.Item title="Confirmation"to="/pages/confirmation" />
                    <SidebarMenu.Item title="Success"to="/pages/success" />
                    <SidebarMenu.Item title="Danger"to="/pages/danger" />
                    <SidebarMenu.Item title="Coming Soon"to="/pages/coming-soon" />
                    <SidebarMenu.Item title="Timeline"to="/pages/timeline" />
                </SidebarMenu.Item>
                <SidebarMenu.Item
                    icon={<i className="fa fa-fw fa-star-o"></i>}
                    title="Icons"
                to='/icons'
                />
                <SidebarMenu.Item
                    icon={<i className="fa fa-fw fa-bookmark-o"></i>}
                    title="Docs"
                to='https://webkom.gitbook.io'
                />
                { /* -------- Versions ---------*/ }
                <SidebarMenu.Item
                    icon={<i className="fa fa-fw fa-folder-open-o"></i>}
                    title="Versions"
                >
                    <SidebarMenu.Item title="React 2.0"to='https://spin.webkom.co' />
                    <SidebarMenu.Item title="React 1.0"to='https://v1.react.spin.webkom.co' />
                    <SidebarMenu.Item title="JQuery 1.0"to="https://v1.spin.webkom.co" />
                </SidebarMenu.Item>
            </SidebarMenu >
        );
    }
}
