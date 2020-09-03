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

const theme = {
  mediaQueries,
};

export default theme;
