import React from 'react';
import { InputGroup, Input } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col,Container } from 'reactstrap';
import classnames from 'classnames';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { MsgBox } from '../Utility/MsgBox';
//Actions
import { findUser, findAdmin } from '../../Store/action/login'; 

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            adUserName: '',
            adPassword: '',
            activeTab: '1'
        };
        this.toggle = this.toggle.bind(this);
        this.user = this.user.bind(this);
        this.register = this.register.bind(this);
        this.admin = this.admin.bind(this);
    }
    
    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
    }
    handleUserInput(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }
    admin(){
        //this.setState({adminAccess:true});
        const { adUserName, adPassword } = this.state;
        this.props.checkAdmin({"username": adUserName, "password": adPassword});
    }
    user(){
        const { username, password } = this.state;
        this.props.checkUser({"username": username, "password": password});
        //this.setState({userAccess:true});
    }
    register(){
        console.log("registration");
        this.props.history.push('/register');
    }
    render(){
        const _props = {
            msg: "Username or Password are Invalid", 
            type: "Warning",
            className: "alert alert-warning"
        }
        //console.log("in render()", this.props)
        const style = {
            marginTop: '10%'
          };
        const styleCursor = {
            cursor: 'pointer'
        }
        if (this.props.user.hasOwnProperty("adminAccess") &&  this.props.user.adminAccess === true) {
            return <Redirect to='/admin' />
        }
        if (this.props.user.userAccess === true) {
            return <Redirect to='/user' />
        }
        return(
            <Container style={style}>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }} style={styleCursor}
                            >
                                USER
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }} style={styleCursor}
                            >
                                ADMIN
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Col>
            </Row><br/>
               <TabContent activeTab={this.state.activeTab}>
                   <TabPane tabId="1">
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}><InputGroup>
                                <Input type="text" placeholder="username" name="username" onChange={ (event) => this.handleUserInput(event)} />
                                </InputGroup>
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}><InputGroup>
                                <Input type="password" placeholder="password"  name="password" onChange={ (event) => this.handleUserInput(event)}/>
                                </InputGroup>
                            </Col>
                        </Row><br/>
                        <Button className="mrg10" color="primary" onClick={this.register}>Register</Button>    
                        <Button className="mrg10" color="success" onClick={this.user}>Sign In</Button>
                        { this.props.user.login  === "Failed" ?
                            <MsgBox {..._props}></MsgBox>
                        : null }
                    </TabPane>
                   <TabPane tabId="2">
                   <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}><InputGroup>
                        <Input placeholder="admin name" name="adUserName" onChange={ (event) => this.handleUserInput(event)}/>
                        </InputGroup>
                    </Col>
                    </Row><br/>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}><InputGroup>
                            <Input type="password" placeholder="Password" name="adPassword" onChange={ (event) => this.handleUserInput(event)}/>
                            </InputGroup>
                        </Col>
                    </Row><br/>
                        <Button color="primary" onClick={this.admin}>Admin Login</Button>
                        { this.props.user.login === "Failed" ?
                            <MsgBox {..._props}></MsgBox>
                        : null }
                   </TabPane>
               </TabContent>
           
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    "user" : state.user 
})
const mapDispatchToProps = dispatch => {
    return {
      checkUser: user => {
        dispatch(findUser(user));
      },
      checkAdmin: admin => {
          dispatch(findAdmin(admin));
      }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);