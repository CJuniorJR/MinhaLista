import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        error: ''
    }


    render() {
        return (
            <div className='container'>
                <form onSubmit={alert('fui enviado')}>
                    {this.state.error && <p>{this.state.error}</p>}

                    <input
                        type='text'
                        placeholder='Nome'
                        onChange={e => this.setState({ name: e.target.value })}
                    />

                    <input 
                        type='email'
                        placeholder='E-mail'
                        onChange={e => this.setState({ email: e.target.value })}
                    />

                    <input
                        type='password'
                        placeholder='Senha'
                        onChange={e => this.setState({ password: e.target.value })}
                    />

                <button type='submit'>Cadastrar</button>
                <hr />
                <Link to='/'>Fazer Login</Link>

                </form>
            </div>
        )
    }
}

export default withRouter(SignUp);