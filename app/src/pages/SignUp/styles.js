import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Form = styled.form`
    width: 400px;
    background: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        color: #ff3333;
        margin-bottom: 15px;
        border: 1px solid #ff3333;
        padding: 10px;
        width: 100%;
        text-align: center;
    }

    input {
        flex: 1;
        margin-bottom: 15px;
        padding: 0 20px;
        line-height: 36px;
        color: #777;
        font-size: 15px;
        width: 100%;
        border: 1px solid #ddd;
    }

    button {
        color: #fff;
        font-size: 16px;
        background: #1E90FF;
        height: 50px;
        border: 0;
        border-radius: 5px;
        width: 100%;
    }

    hr {
        margin: 20px 0;
        border: none;
        border-bottom: 1px solid #cdcdcd;
        width: 100%;
    } 

    a {
    font-size: 16px;
    font-weight: bold;
    color: #999;
    text-decoration: none;
    }
`;





