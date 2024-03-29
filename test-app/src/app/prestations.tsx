import React from "react"
import Link from "next/link"

export default function Prestations() {
  return (
    <>
        <h1>Prestations</h1>
        <p>Pour une relaxation du corps et de l&apos;esprit dans cet espace ou le temps n&apos;existe pas</p>
        <div>
            <div><Link href="/epilation">Epilations</Link></div>
            <div><Link href="/soin">Soins du visage</Link></div>
            <div><Link href="soinregard">Soins du regard</Link></div>
            <div><Link href="/reflexologie">Reflexologie plantaire</Link></div>
            <div><Link href="/reflexologie">Reflexologie cranienne</Link></div>
            <div><Link href="/onglerie">Onglerie</Link></div>
        </div>
    </>
  )
}
