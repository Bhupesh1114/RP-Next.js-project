import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header/Header";
import { wrapper } from "../store";
import { Provider } from "react-redux";


function App({ Component, ...rest }: AppProps) {
  const { store , props} = wrapper.useWrappedStore(rest);
  
  return (
    <Provider store={store}>
      <Header />
      <Component {...props.pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(App);
