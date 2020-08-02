import styled from 'styled-components';

const ConWrapper = styled.div`
    border: 1px solid #333;
    .banner {
        color: red;
        height: 50px;
        background-color: gray;
    }
`;

const Input = styled.input.attrs({
    placeholder: '请输入内容'
})`
    background-color: pink;
`;

export { ConWrapper, Input };