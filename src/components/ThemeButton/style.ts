import styled from 'styled-components';

export default styled.div`
  position: fixed;
  top: 0;
  right: 0;
  button {
    cursor: pointer;
    margin: 8px;
    padding: 1.2em;
    background: transparent;
    border: ${(props) => props.theme.border} 3px solid;
    border-radius: 8px;
    span {
      font-size: 1.6em;
    }
  }
`;
