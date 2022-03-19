import Link from "next/link";
import { DarkLayout } from "../components/layout/DarkLayout";
import { MainLayout } from "../components/layout/MainLayout";
import { ReactElement } from 'react';

export default function About() {
  return (
    <>
      <h1>About</h1>
      <h1 className={"title"}>
        {/* Ir a <a href="/about">About</a> */}
        {/* Implementacion del Next/Link, necesario para activar el pre-fecth de una pagina. Muy recomendado */}
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/about.jsx</code>
      </p>
    </>
  );
}
// Se utiliza el getLayout para crear Layouts anidados. Para que funcione, en el _app.js se tiene que declarar el getLayout
About.getLayout = function getLayout(page:ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
