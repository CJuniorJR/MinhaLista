import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import api from '../../services/api';
import { login, isAuthenticated } from '../../services/auth';

import { Container, Form } from './styles';

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
                login(logged);
                if(isAuthenticated && logged.status === 200){
                    this.props.history.push('/mylist');
                } else if(logged.status === 401) {
                    this.setState({ error: 'E-mail e/ou senha Inválidos' });
                } else {
                    this.setState({ error: 'Ocorreu um erro inesperado.' });
                }
                

            } catch (error) {
                console.log(error);
                this.setState({ error: 'Ocorreu um erro inesperado.' });
            }
        }
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSignIn}>
                    {this.state.error && <p>{this.state.error}</p>}

                    <input
                        type='email'
                        placeholder='E-mail'
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                    />

                    <input
                        type='password'
                        placeholder='Senha'
                        value={this.state.password}
                        onChange={e => this.setState({ password: e.target.value })}
                    />

                    <button type='submit'>Entrar</button>
                    <hr />
                    <Link to='/signup'>Cadastrar-se</Link>

                </Form>
            </Container>
        )
    }

}

export default withRouter(SignIn);