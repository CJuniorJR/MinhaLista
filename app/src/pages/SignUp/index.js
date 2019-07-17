import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import api from '../../services/api';

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
                
                await api.post('/users', user);
                this.props.history.push('/');
                
            } catch (error) {
                console.log(error);
                this.setState({ error: 'Ocorreu um erro inesperado.' });
            }
        }
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSignUp}>
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