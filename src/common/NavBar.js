import React, {Component} from 'react';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler,
    UncontrolledDropdown,
} from 'reactstrap';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Home</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state} navbar>
                        <Nav className="me-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Knowledge
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="/knowledge/search">Search Knowledge</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Reset</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Task
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="/task/search">Search Task</DropdownItem>
                                    <DropdownItem href="/task/input">Input Task</DropdownItem>
                                    <DropdownItem href="/task/plan/create">Plan Task</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Reset</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Agent
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="/agent/chat">Chat With Agent</DropdownItem>
                                    <DropdownItem href="/agent/search">Search Agent</DropdownItem>
                                    <DropdownItem href="/agent/create">Create Agent</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Reset</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Ability
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="/ability/search">Search Ability</DropdownItem>
                                    <DropdownItem href="/ability/create">Create Ability</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Reset</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <NavbarText>Simple Text</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
