import React from 'react'
import SingleColumnContent from '../../components/SingleColumnContent'

import { Section, H3, P, A, Anchor } from '../../components/Typography'

export default function Wedding() {
  return (
    <SingleColumnContent>
      <Section>
        <H3>Juhlapäivä</H3>
        <P>
          Juhlimme häitä <strong>lauantaina 16.6.2018</strong>, viikkoa ennen juhannusta.
        </P>
      </Section>

      <Section>
        <H3>
          <Anchor name="juhlapaikka">Juhlapaikka</Anchor>
        </H3>
        <P>
          <strong>Villa Smeds</strong>
          <br />
          Kauppalaivurintie 5<br />
          01670 Vantaa
        </P>
        <P>
          Miljöön tapahtumalle tarjoaa kauniin rustiikkinen{' '}
          <A href="http://www.villasmeds.fi/">Villa Smeds</A>, jossa juhlimme sekä ulko- että
          sisätiloissa. Maalaisidyllimaisemaa voit halutessasi käyttää innoituksena pukeutumista
          suunnitellessa. :)
        </P>
      </Section>

      <Section>
        <H3>Saapuminen</H3>
        <P>
          Toivomme, että suosit joukkoliikennettä ja kimppakyytejä, koska parkkipaikkoja on
          niukasti. Juhlien lopuksi (klo 23:30) järjestetään yhteiskuljetus Helsingin keskustaan.
        </P>
      </Section>

      <Section>
        <H3>Juhlan kulku</H3>
        <P>
          Aloitamme päiväosuuden Villa Smedsin pihalla <strong>kello 14:00</strong>{' '}
          valaseremonialla. Tämän jälkeen siirrymme sisälle, jossa syömme, juomme ja nautimme
          ohjelmasta.
        </P>
        <P>
          Iltaosuus alkaa <strong>kello 19:00</strong> tanssin ja musiikin merkeissä. Juhlat
          päättyvät <strong>kello 23:30</strong>, jolloin lähtee myös yhteiskuljetus Helsinkiin.
        </P>
        <P>
          Jos haluat pitää tilaisuudessa puheen tai järjestää muuta ohjelmaa, voit kertoa tästä
          ilmoittautumisen yhteydessä tai ottaa yhteyttä{' '}
          <A href="#yhteystiedot">kaasoihin tai bestmaneihin</A>.
        </P>
      </Section>
    </SingleColumnContent>
  )
}
