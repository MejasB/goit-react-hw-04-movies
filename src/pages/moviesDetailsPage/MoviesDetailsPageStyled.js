import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  padding: 0px 100px 0px 50px;
  font-size: 16px;

  button {
    display: inline-block;
    text-align: center;
    padding: 7px 15px;
    margin-bottom: 15px;
    background: #74c5fc;
    background-image: linear-gradient(to bottom, #74c5fc, #0e96eb);
    border-radius: 3px;
    color: #ffffff;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background: #76bcfa;
    background-image: linear-gradient(to bottom, #76bcfa, #166494);
    text-decoration: none;
  }
  .cardContainer {
    display: flex;
    gap: 50px;
  }
  img {
    border-radius: 3px;
  }

  .movie-desc {
    text-align: justify;
    line-height: 1.6;
  }
  .genres-list {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 15px;
    list-style: none;
  }
  .genres-list-item {
    text-decoration: none;
  }
  .navList {
    display: flex;
    justify-content: center;
    gap: 30px;
    list-style: none;
  }
  .add-info-container {
    display: flex;
    gap: 30px;
    justify-content: center;
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
