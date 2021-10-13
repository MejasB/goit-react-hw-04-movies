const getImgOrDefault = imgSrc =>
  imgSrc
    ? `http://image.tmdb.org/t/p/w300${imgSrc}`
    : '../../images/default.png';

export default getImgOrDefault;
