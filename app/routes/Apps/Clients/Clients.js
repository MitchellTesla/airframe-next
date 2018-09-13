import React from 'react';
import faker from 'faker';

import { 
    Container,
    Row,
    Col,
    Card,
    ButtonToolbar,
    Button,
    ButtonGroup,
    CardBody,
    CardFooter,
    Table,
    TabPane,
    Badge,
    Nav,
    NavItem,
    Pagination,
    PaginationLink,
    PaginationItem,
    UncontrolledTooltip,
    UncontrolledTabs
} from './../../../components';

import { Profile } from "../../components/Profile";
import { DlRowContacts } from "../../components/Profile/DlRowContacts";
import { DlRowAddress } from "../../components/Profile/DlRowAddress";
import { TrTableClients } from "./components/TrTableClients";
import { TrTableCompanies } from "./components/TrTableCompanies";

const Clients = () => (
    <React.Fragment>
        <Container>
            { /* START Content */}
            <Row>
                <Col lg={ 8 }>
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="clients">
                            <CardBody>
                                <div className="d-flex">
                                    <Nav pills>
                                        <NavItem>
                                            <UncontrolledTabs.NavLink tabId="clients">
                                                Clients
                                            </UncontrolledTabs.NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <UncontrolledTabs.NavLink tabId="companies">
                                                Companies
                                            </UncontrolledTabs.NavLink>
                                        </NavItem>
                                    </Nav>
                                    <ButtonToolbar className="ml-auto">
                                        <ButtonGroup>
                                            <Button color="secondary" outline className="align-self-center mr-2" id="tooltipSettings">
                                                <i className="fa fa-fw fa-gear"></i>
                                            </Button>
                                        </ButtonGroup>
                                        <ButtonGroup>
                                            <Button color="primary" className="align-self-center" id="tooltipAddNew">
                                                <i className="fa fa-fw fa-plus"></i>
                                            </Button>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                    <UncontrolledTooltip placement="right" target="tooltipAddNew">
                                        Add New
                                    </UncontrolledTooltip>
                                    <UncontrolledTooltip placement="right" target="tooltipSettings">
                                        Settings
                                    </UncontrolledTooltip>
                                </div>
                            </CardBody>

                            <UncontrolledTabs.TabContent>
                                <TabPane tabId="clients">
                                    { /* START Table */}
                                    <Table className="mb-0" hover responsive>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th className="text-right">Phone</th>
                                                <th className="text-right">Label</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <TrTableClients />
                                            <TrTableClients />
                                            <TrTableClients />
                                            <TrTableClients />
                                            <TrTableClients />
                                            <TrTableClients />
                                            <TrTableClients />
                                            <TrTableClients />
                                            <TrTableClients />
                                        </tbody>
                                    </Table>
                                    { /* END Table */}
                                </TabPane>
                                <TabPane tabId="companies">
                                    { /* START Table */}
                                    <Table className="mb-0" hover responsive>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th>Name</th>
                                                <th>PM</th>
                                                <th className="text-right">Phone</th>
                                                <th className="text-right">Label</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <TrTableCompanies />
                                            <TrTableCompanies />
                                            <TrTableCompanies />
                                            <TrTableCompanies />
                                            <TrTableCompanies />
                                            <TrTableCompanies />
                                            <TrTableCompanies />
                                            <TrTableCompanies />
                                            <TrTableCompanies />
                                            <TrTableCompanies />
                                            <TrTableCompanies />
                                            <TrTableCompanies />
                                        </tbody>
                                    </Table>
                                    { /* END Table */}
                                </TabPane>
                            </UncontrolledTabs.TabContent>
                        </UncontrolledTabs>

                        <CardFooter className="d-flex">
                            <span className="align-self-center">
                                Showing 1 to 10 of 57 entries
                            </span>
                            <Pagination aria-label="Page navigation example" className="ml-auto">
                                <PaginationItem>
                                    <PaginationLink previous href="#">
                                        <i className="fa fa-fw fa-angle-left"></i>
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem active>
                                    <PaginationLink href="#">
                                        1
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">
                                        3
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink next href="#">
                                        <i className="fa fa-fw fa-angle-right"></i>
                                    </PaginationLink>
                                </PaginationItem>
                            </Pagination>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card>
                        <CardBody>
                            <Profile />
                            <div className="text-center pb-1">
                                <ul className="list-inline">
                                    <li className="list-inline-item text-center">
                                        <h2 className="mb-1">23</h2>
                                        <span>Contracts</span>
                                    </li>
                                    <li className="list-inline-item text-center">
                                        <h2 className="mb-1">13</h2>
                                        <span>Tasks</span>
                                    </li>
                                    <li className="list-inline-item text-center">
                                        <h2 className="mb-1">5</h2>
                                        <span>Relases</span>
                                    </li>
                                </ul>
                            </div>                                
                            <Row className="mt-3">
                                <Col sm={ 6 }>
                                    <Button color="primary" block>
                                        Message
                                    </Button> 
                                </Col>
                                <Col sm={ 6 }>
                                    <Button color="secondary" outline block>
                                        Edit
                                    </Button> 
                                </Col>
                            </Row>
                            <div className="mt-4 mb-2">
                                <span className="small">
                                    Profile
                                </span>
                            </div>
                            <p className="text-left">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Dicta sapiente earum, necessitatibus commodi eius pariatur 
                                repudiandae cum sunt officiis ex!
                            </p>
                            <div className="mt-4 mb-2">
                                <span className="small">
                                    Labels
                                </span>
                            </div>
                            <div className="text-left mb-4">
                                <Badge pill color="primary" className="mr-1">
                                    { faker.commerce.department() }
                                </Badge>
                                <Badge pill color="secondary" className="mr-1">
                                    { faker.commerce.department() }
                                </Badge>
                                <Badge pill color="primary" className="mr-1">
                                    { faker.commerce.department() }
                                </Badge>
                            </div>
                            <div className="mt-4 mb-2">
                                <span className="small">Contact</span>
                            </div>
                            <DlRowContacts 
                                leftSideClassName="text-left"
                                rightSideClassName="text-right"
                            />
                            <div className="mt-4 mb-2">
                                <span className="small">Address</span>
                            </div>
                            <DlRowAddress 
                                leftSideClassName="text-left"
                                rightSideClassName="text-right"
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Content */}

        </Container>
    </React.Fragment>
);

export default Clients;