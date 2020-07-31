import NextLink from 'next/link'

export default function Timeline({ userName }) {
  return (
    <>
      <h1>This is the timeline of {userName}</h1>
      <NextLink href='/'>
        <a>
          go Home
        </a>
      </NextLink>
      <style jsx>{`
      h1 {
        font-size: 36px;
        color: #333
      }
      `}
      </style>
    </>
  )
}

// Este metodo se ejecuta en el servidor.
// Si tiene el método get initial props, se ejecuta antes de renderizrlo.
// Esto funciona solo en componentes tipo Página, no en components o subcomponentes.

// IMPORTANTE:
// Si entras directo a la ruta, se ejecuta en el servidor.
// Si entras desde otra página como PWA, se ejecuta en el cliente.
Timeline.getInitialProps = () => {
  return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    .then(response => {
      const { userName } = response
      return response
    })
}