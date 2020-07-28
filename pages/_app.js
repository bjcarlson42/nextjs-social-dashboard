import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/index.css'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp