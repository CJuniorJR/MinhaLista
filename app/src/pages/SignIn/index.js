import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import api from '../../services/api';
import { login } from '../../services/auth';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    handleSignIn = async e => {
        e.preventDefault();

        let { email, password } = this.state;

        if(!email || !password){
            this.setState({ error: 'E-mail e/ou senha inválidos.' });
        } else {
            try {
                let logged = await api.post('/users/auth', { email, password });
                login(logged.token);
                this.props.history.push('/app');

            } catch (error) {
                console.log(error);
                this.setState({ error: 'Ocorreu um erro inesperado.' });
            }
        }
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handlerSignIn}>
                    {this.state.error && <p>{this.state.error}</p>}

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

                    <button type='submit'>Entrar</button>
                    <hr />
                    <Link to='/signup'>Cadastrar-se</Link>

                </form>
            </div>
        )
    }

}

export default withRouter(SignIn);