import '../styles/globals.css'


// Este componente es el inicial de la aplicación es un lugar adecuado para persistir
// todos los estilos o librerias que necesitemos en toda la app. 
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
