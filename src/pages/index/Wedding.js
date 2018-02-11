import React from 'react'
import SingleColumnContent from '../../components/SingleColumnContent'

export default function Wedding() {
  return (
    <SingleColumnContent>
      <h2>Juhlapaikka</h2>
      <p>
        Villa Smeds<br />
        Kauppalaivurintie 5<br />
        01670 Vantaa
      </p>

      <h2>Saapuminen</h2>
      <p>
        Toivomme, että suosit joukkoliikennettä ja kimppakyytejä, koska parkkipaikkoja on niukasti.
        Juhlien lopuksi (klo 23:30) järjestetään yhteiskuljetus Helsingin keskustaan.
      </p>

      <h2>Juhlan kulku</h2>

      <p>
        Aloitamme päiväosuuden Villa Smedsin pihalla <strong>kello 14:00</strong> valaseremonialla.
        Tämän jälkeen siirrymme sisälle, jossa syömme, juomme ja nautimme ohjelmasta.
      </p>
      <p>
        Iltaosuus alkaa <strong>kello 19:00</strong> tanssin ja musiikin merkeissä. Juhlat päättyvät{' '}
        <strong>kello 23:30</strong>, jolloin lähtee myös yhteiskuljetus Helsinkiin.
      </p>
      <p>
        Jos haluat pitää tilaisuudessa puheen tai järjestää muuta ohjelmaa, voit kertoa tästä
        ilmoittautumisen yhteydessä tai ottaa yhteyttä{' '}
        <a href="#yhteystiedot">bestmaniin tai kaasoihin</a>.
      </p>
    </SingleColumnContent>
  )
}
