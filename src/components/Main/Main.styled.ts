import styled from 'styled-components';

const StyledMain = styled.main`
  padding:2rem;
  max-width: 1024px;
  margin: auto;
`;

export const StyledInputContainer = styled.section`
  text-align:center;
  input{
    height:2rem;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    margin-right: .5rem;
    padding-inline-start: 1rem
  }

  button{
    background-color: yellowgreen;
    border:none;
    outline: none;
    border-radius:5px;
    font-size: 1.3rem;
    padding:.2rem .4rem;
    color: #ffffff;
    cursor:pointer;
  }

`

export default StyledMain;
