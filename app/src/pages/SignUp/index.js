import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import api from '../../services/api';

import { Container, Form } from './styles';

class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        error: ''
    }

    handleSignUp = async e => {
        e.preventDefault();
        
        const user = this.state;

        if(!user.name || !user.email || !user.password){
            this.setState({ error: 'Dados Insuficientes.' });
        } else {
            try {
                let created = await api.post('/users', user);
                if(created.status === 201){
                    this.props.history.push('/');
                } else {
                    this.setState({ error: 'Não foi possível cadastrar o usuario' });
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
                <Form onSubmit={this.handleSignUp}>
                    {this.state.error && <p>{this.state.error}</p>}

                    <input
                        type='text'
                        placeholder='Nome'
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                    />

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

                <button type='submit'>Cadastrar</button>
                <hr />
                <Link to='/'>Fazer Login</Link>

                </Form>
            </Container>
        )
    }
}

export default withRouter(SignUp);