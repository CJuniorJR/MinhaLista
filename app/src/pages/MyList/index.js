import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { getUser, logout } from '../../services/auth';

class MyList extends Component {
    
    handleLogOut = async e => {
        e.preventDefault();
        logout();
        this.props.history.push('/');
    }

    render() {
        return(
            <div className='container'>
                <header>
                    <p>Usuario logado: {getUser().name}</p>
                    <button onClick={this.handleLogOut}>Sair</button>
                </header>
                
            </div>
        )
    }
}

export default withRouter(MyList);