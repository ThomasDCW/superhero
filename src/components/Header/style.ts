import styled from 'styled-components';

export default styled.header`
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${(props) => props.theme.border} 3px solid;
`;
