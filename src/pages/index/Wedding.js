import React from 'react'
import SingleColumnContent from '../../components/SingleColumnContent'

import { H3, P } from '../../components/Typography'

export default function Wedding() {
  return (
    <SingleColumnContent>
      <H3>Juhlapaikka</H3>
      <P>
        Villa Smeds<br />
        Kauppalaivurintie 5<br />
        01670 Vantaa
      </P>

      <H3>Saapuminen</H3>
      <P>
        Toivomme, että suosit joukkoliikennettä ja kimppakyytejä, koska parkkipaikkoja on niukasti.
        Juhlien lopuksi (klo 23:30) järjestetään yhteiskuljetus Helsingin keskustaan.
      </P>

      <H3>Juhlan kulku</H3>

      <P>
        Aloitamme päiväosuuden Villa Smedsin pihalla <strong>kello 14:00</strong> valaseremonialla.
        Tämän jälkeen siirrymme sisälle, jossa syömme, juomme ja nautimme ohjelmasta.
      </P>
      <P>
        Iltaosuus alkaa <strong>kello 19:00</strong> tanssin ja musiikin merkeissä. Juhlat päättyvät{' '}
        <strong>kello 23:30</strong>, jolloin lähtee myös yhteiskuljetus Helsinkiin.
      </P>
      <P>
        Jos haluat pitää tilaisuudessa puheen tai järjestää muuta ohjelmaa, voit kertoa tästä
        ilmoittautumisen yhteydessä tai ottaa yhteyttä{' '}
        <a href="#yhteystiedot">bestmaniin tai kaasoihin</a>.
      </P>
    </SingleColumnContent>
  )
}
