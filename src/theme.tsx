const size = {
  mobile: "320px",
  tablet: "760px",
  laptop: "1024px",
  desktop: "2560px",
};

const mediaQueries = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

const mainWrapper = {
  fontFamily: "MADE Bon Voyage",
  backgroundImage: 'url("/pictures/background-image.png")',
};

const theme = {
  mediaQueries,
  mainWrapper,
};

export default theme;
