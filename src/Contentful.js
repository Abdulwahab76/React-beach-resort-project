const contentful = require("contentful");
// const {REACT_APP_ACCESS_TOKEN,REACT_APP_API_SPACE } = process.env;
export default contentful.createClient({
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_API_SPACE,
});
