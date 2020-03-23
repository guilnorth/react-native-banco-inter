import Reactotron, { overlay } from "reactotron-react-native";
Reactotron.configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(overlay())
  .connect(); // let's connect!

export default Reactotron;
