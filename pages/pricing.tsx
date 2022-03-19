import Link from "next/link";
import { ReactElement } from "react";
import { DarkLayout } from "../components/layout/DarkLayout";
import { MainLayout } from "../components/layout/MainLayout";

export default function Pricing() {
  return (
    <>
      <h1>Pricing</h1>
      <h1 className={"title"}>
        {/* Ir a <a href="/about">About</a> */}
        {/* Implementacion del Next/Link, necesario para activar el pre-fecth de una pagina. Muy recomendado */}
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/pricing.jsx</code>
      </p>
    </>
  );
}

Pricing.getLayout = function getLayout(page:ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
