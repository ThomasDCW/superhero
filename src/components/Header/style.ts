import styled from 'styled-components';

export default styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 14vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${(props) => props.theme.border} 3px solid;
`;
