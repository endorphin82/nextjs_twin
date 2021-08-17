import {GlobalStyles} from "twin.macro";
import type {AppProps} from 'next/app'

function App({Component, pageProps}: AppProps) {
    return (
        <>
            <GlobalStyles/>
            <Component {...pageProps} />
        </>
    );
}

export default App;
