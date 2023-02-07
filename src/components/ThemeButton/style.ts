import styled from 'styled-components';

export default styled.div`
  position: fixed;
  top: 0;
  right: 0;
  button {
    cursor: pointer;
    margin: 8px;
    padding: 1em;
    background: transparent;
    border: ${(props) => props.theme.border} 3px solid;
    border-radius: 4px;
  }
`;
