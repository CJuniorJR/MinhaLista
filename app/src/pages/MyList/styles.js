import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 60px;
    background: #1E90FF;
    font-size 18px;
    font-weight: bold;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        color: #1E90FF;
        font-size: 16px;
        background: #fff;
        height: 25px;
        border: 0;
        border-radius: 5px;
        width: 10%;
        margin-left: 100px; 
    }
`;

export const TaskList = styled.div`
    max-width: 700px;
    max-height: 100%;
    margin: 20px auto 0;
    padding: 0 20px;
`;

export const Task = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    article {
        background: #fff;
        border: 1px solid #DDD;
        border-radius: 1px;
        padding: 20px;
        margin-bottom: 20px;
        justify-content: center;
        word-wrap: break-word;
    }

    p {
        padding: 20px 20px;
    }
    
    button {
        color: #fff;
        font-size: 16px;
        background: #1E90FF;
        height: 25px;
        border: 0;
        border-radius: 5px;
        width: 25%;
        margin-left: 100px; 
    }


    h1 {
        margin-left: 250px;
    }
`;

export const Form = styled.form`
    width: 400px;
    background: #fff;
    padding: 20px;
    align-items: center;
    margin-left: 200px;

    p {
        color: #ff3333;
        margin-bottom: 15px;
        border: 1px solid #ff3333;
        padding: 10px;
        width: 100%;
        text-align: center;
    }

    textarea {
        flex: 1;
        margin-bottom: 5px;
        padding: 0 20px;
        line-height: 23px;
        color: #777;
        font-size: 15px;
        resize: none;
        width: 100%;
        border: 1px solid #ddd;
    }

    button {
        
        color: #fff;
        font-size: 16px;
        background: #1E90FF;
        height: 30px;
        border: 0;
        border-radius: 5px;
        width: 100%;
    }

    button:disabled {
        background: #4682B4;
    }

    hr {
        margin: 20px 0;
        border: none;
        border-bottom: 1px solid #cdcdcd;
        width: 100%;
    } 
`;

export const FormBox = styled.div`
    display: flex;
`;