import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { getUser, logout } from '../../services/auth';

import { Header } from './styles';

class MyList extends Component {
    
    handleLogOut = async e => {
        e.preventDefault();
        logout();
        this.props.history.push('/');
    }

    render() {
        return(
            <div className='container'>
                <Header>
                    <p>Usuario logado: {getUser().name}</p>
                    <button onClick={this.handleLogOut}>Sair</button>
                </Header>
                
            </div>
        )
    }
}

export default withRouter(MyList);