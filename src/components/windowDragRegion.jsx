import styled from 'styled-components';

const WindowDragRegion = styled.div`
  height: 20px;
  width: 100%;
  -webkit-app-region: drag;
  position: fixed;
`;

export default WindowDragRegion;
