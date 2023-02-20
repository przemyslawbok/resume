import styled from 'styled-components';
import { HEADER_HEIGHT } from './PageHeader.data';

export const PageHeaderStyles = styled.div`
  header {
    position: relative;
    z-index: 1;
  }
  .header-content {
    height: ${HEADER_HEIGHT}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-content .nav-links div {
    border-radius: 5px;
  }
  .header-content .nav-links .active {
    background-color: #e2f0ff;
  }
  .header-content .nav-links a {
    display: block;
    line-height: 1;
    padding: 8px 12px;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
    min-width: 75;
    text-align: center;
    color: #495057;
    &:hover {
      background-color: #f5f5f5;
      color: #212529;
    }
  }
`;
