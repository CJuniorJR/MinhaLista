import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';


class SignIn extends Component {
    state = {
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