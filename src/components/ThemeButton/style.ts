import styled from 'styled-components';

export default styled.div`
  button {
    cursor: pointer;
    margin: 16px;
    padding: 1.2em;
    background: transparent;
    border: ${(props) => props.theme.border} 3px solid;
    border-radius: 8px;
    span {
      font-size: 1.6em;
    }
  }
`;
