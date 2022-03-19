import { CSSProperties, FC } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'

// los estilos se declaran como CSSProperties
const styles: CSSProperties = {
     color: '#0070f3',
     textDecoration: 'underline'
}

interface Props {
     text: string,
     href: string
}

export const ActiveLink: FC<Props> = ({ text, href}) => {

     const { asPath } = useRouter(); // es un Hook de Next para el router de navegacion. asPath devuelve la ruta 

     return (
          <Link href={href}>
               {/* el style senala un error por Typescript. Pasando el mouse, se tendría que declarar como CSSProperties | undefined */}
               {/* <a style={ asPath === href ? styles : null }>{text}</a> */}
               {/* Siccome lo avevo declarado como null si la ruta no es activa, entonces lo debo cambiar en undefined */}
               <a style={ asPath === href ? styles : undefined }>{text}</a>
          </Link>
     )
}
