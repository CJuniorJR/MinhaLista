import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import api from '../../services/api';
import { getUser, logout } from '../../services/auth';
import { Header, TaskList, Task, Form, FormBox} from './styles';


class MyList extends Component {
    state = {
        task: '',
        eTask: '',
        idTask: '',
        tasks: [],
        error: ''
    }


    componentWillMount() {
        this.loadTasks();
    }

    loadTasks = async () => {
        let response = await api.get(`/users/${getUser()._id}/todo`);
        this.setState({ tasks: response.data.data });
    }

    handleCreateTask = async e => {
        e.preventDefault();

        let task = {
            value: this.state.task
        }

        if(!task.value) {
            this.setState({ error: 'Nenhuma tarefa adicionada.' });
        } else{
            try {
                let created = await api.post(`/users/${getUser()._id}/todo`, task);
                if(created.status === 201){
                    this.loadTasks();
                    this.setState({ task: '' });
                } else {
                    this.setState({ error: 'Não foi possível cadastrar a tarefa.' });
                }
            } catch (error) {
                console.log(error);
                this.setState({ error: 'Ocorreu um erro inesperado.' });
            }
        }

       
    }

    handleLogOut = async (e, id) => {
        e.preventDefault();
        logout();
        this.props.history.push('/');
    }

    editTask = (id, task) => {
        this.setState({ idTask: id, eTask: task });
    }
        

    handleUpdateTask = async e => {
        e.preventDefault();

        let task = {
            value: this.state.eTask
        }

        if(!task.value){
            this.setState({ error: 'Nenhuma alteração.' });
        } else {
            try {
                let updated = await api.put(`/users/${getUser()._id}/todo/${this.state.idTask}`, task);
                if(updated.status === 200){
                    this.loadTasks();
                    this.setState({ eTask: '', idTask: '' });
                }
                
            } catch (error) {
                console.log(error);
                this.setState({ error: 'Ocorreu um erro inesperado.' });
            }
        }
    }

    handleDeleteTask = async id => {
        await api.delete(`/users/${getUser()._id}/todo/${id}`);
        this.loadTasks();
    }

    render() {
        let tasks = this.state.tasks;

        return(

            <div className='container'>
                <Header>
                    <p>Usuario logado: {getUser().name}</p>
                    <button onClick={this.handleLogOut}>Sair</button>
                </Header>

                <FormBox>
                    <Form onSubmit={this.handleCreateTask}>
                        <h1>Cadastrar Tarefa</h1>
                        {this.state.error && <p>{this.state.error}</p>}
                        <textarea 
                            type='text'
                            placeholder='Descreva a tarefa'
                            rows='5'
                            value={this.state.task}
                            onChange={e => this.setState({ task: e.target.value })}
                        />
                        <button type='submit' disabled={!this.state.task}>Cadastrar tarefa</button>
                    </Form>

                    <Form onSubmit={this.handleUpdateTask}>
                        <h1>Editar Tarefa</h1>
                        {this.state.error && <p>{this.state.error}</p>}
                        <textarea 
                            type='text'
                            placeholder='Descreva a tarefa'
                            rows='5'
                            value={this.state.eTask}
                            onChange={e => this.setState({ eTask: e.target.value })}
                        />
                        <button type='submit' disabled={!this.state.eTask}>Editar tarefa</button>
                    </Form>
                </FormBox>
            
                <hr />
                <TaskList>
                    
                    <Task>
                    <h1>Tarefas</h1>
                        {tasks.map(task => (
                            <article key={task._id}>
                            <p>{task.value}</p>    
                            <button onClick={() => this.editTask(task._id, task.value)}>Editar</button>
                            <button onClick={() => this.handleDeleteTask(task._id)}>Excluir</button>
                            </article>                        
                        ))}
                    </Task>
                </TaskList>

                
            </div>
        )
    }
}

export default withRouter(MyList);
