import styled from 'styled-components';

const StyledLI = styled.li`
    margin: 1rem 0;
    display:flex;
    align-items:center;

    p{
        font-size:1.3rem;
        text-transform:capitalize;
        color: #ffffff;
        max-width: 80%;
        overflow:hidden;
        text-overflow:ellipsis;
        ::first-letter{
            font-weight: 600;
        }
    }

    button{
        background-color: orangered;
        border:none;
        outline: none;
        border-radius:5px;
        font-size: 1.3rem;
        padding:.2rem .4rem;
        color: #ffffff;
        cursor:pointer;
        margin-left:auto;
    }
`;

export default StyledLI;
