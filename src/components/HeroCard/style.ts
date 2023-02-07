import styled from 'styled-components';

export default styled.div`
  .card-container {
    margin: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .item {
      border: 3px solid ${(props) => props.theme.border};
      margin: 1em;
      cursor: pointer;
      position: relative;
      width: 300px;
      height: 460px;
      border-radius: 25px;
      overflow: hidden;
      transform: perspective(1000px) rotateY(25deg);
      transition: 0.3s;
      :hover {
        transform: perspective(1000px) rotateY(0);
      }
      img {
        height: 100%;
        width: 100%;
      }
    }
    &:hover .infos {
      opacity: 1;
      transform: scaleY(1);
    }
  }

  .infos {
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    opacity: 0;
    transform: translateY(-100%);
    transition: 0.5s;
  }
`;
