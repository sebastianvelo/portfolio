const getImg = (file: string, folder: string = "") =>
  `https://github.com/SebastianVelo/portfolio/blob/main/src/assets${folder}/${file}.png?raw=true`;

export default getImg;
