import React from 'react'
import styles from './Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

    class Header extends React.Component {
        state = {
            searchValue: ""
        }

        handleChange = (e) => {
            this.state({
                searchValue: e.target.value
            })
        }

        render() {
            const { searchValue } = this.state
            return (
                // <div className={styles.headerContainer}>
                //     <span>React course</span>
                //     <input value={searchValue} onChange={this.handleChange} placeholder="Search..." />
                // </div>
                <Navbar bg="success" expand="lg">
                    <Navbar.Brand href="#home">Online shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            )
        }
    }

export default Header