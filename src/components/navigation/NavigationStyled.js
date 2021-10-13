import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  font-size: 18px;
  .navList {
    display: flex;
    justify-content: center;
    gap: 30px;
    list-style: none;
  }

  .navLink {
    display: inline-block;
    text-align: center;
    padding: 5px 20px;
    min-width: 150px;
    background: #74c5fc;
    background-image: linear-gradient(to bottom, #74c5fc, #0e96eb);
    border-radius: 3px;
    color: #ffffff;
    text-decoration: none;
  }
  .navLink:hover {
    background: #76bcfa;
    background-image: linear-gradient(to bottom, #76bcfa, #166494);
    text-decoration: none;
  }
  .navLinkActive {
    display: inline-block;
    text-align: center;
    padding: 5px 20px;
    min-width: 150px;
    background: #76bcfa;
    background-image: linear-gradient(to bottom, #76bcfa, #166494);
    text-decoration: none;
    border-radius: 3px;
    color: #ffffff;
  }
`;
