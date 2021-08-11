import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function hola() {
  return (
    <div>
      <Head>
        <title>Hola</title>
        <meta name="description" content="Un saludo muy especial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Hola chicos</p>
      <p>Este es mi pagina Hola</p>
      <p>
        <a href="/">Ir a atras</a>
      </p>
      <p>
        <Link href="/">Ir atras con Link</Link>
      </p>
      <Image
        src="/images/nextjs.png"
        alt="Picture of the author"
        width={200}
        height={200}
      />
    </div>
  );
}
