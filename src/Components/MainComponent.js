import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Aboutme from './AboutmeComponent'
import Certificate from './CertificateComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import Contact from './ContactComponent';


const mapStatetoProps = props =>{
    return{
        skills : props.skills,
        certificates : props.certificates
    }
}

class Main extends Component {


    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="App">
             <Header />
             <Switch>
                 <Route path='/home' component={()=> <Home/>} />
                 <Route path='/aboutme' component={()=><Aboutme skills={this.props.skills} />} />
                 <Route path='/certificate' component={()=><Certificate certificates={this.props.certificates}/>} />
                 <Route path='/contact'  component={()=> <Contact/>} />
                 <Redirect to='/home' />
             </Switch>
            </div>
        );
    }
}


export default withRouter(connect(mapStatetoProps)(Main));