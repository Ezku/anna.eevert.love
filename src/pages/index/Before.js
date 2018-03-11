import React from 'react'
import SingleColumnContent from '../../components/SingleColumnContent'

import { Section, H3, P, A, DL, DD, DT, Code } from '../../components/Typography'

export default function Before() {
  return (
    <SingleColumnContent>
      <Section>
        <H3>Pukukoodi</H3>
        <P>
          Kesäinen puku. Varaa sään mukaisesti tarvittaessa myös lämmintä mukaan. (Katso myös{' '}
          <A href="#juhlapaikka">juhlapaikka</A>!)
        </P>
      </Section>

      <Section>
        <H3>Majoitus</H3>
        <P>
          Ilmoittautuessasi <A href="#rsvp">yllä</A> voit kertoa mahdollisesta majoitustarpeesta.
          Pyrimme järjestämään ryhmäalennuksen johonkin Helsingin keskustan hotelleista ja olemme
          erikseen yhteydessä tästä.
        </P>
      </Section>

      <Section>
        <H3>Muistaminen</H3>
        <P>
          Tärkeintä meille on, että tulette juhlimaan kanssamme. Jos kuitenkin haluat muistaa meitä
          jotenkin, lahjatoiveemme löytyvät alta.
        </P>
        <DL>
          <DT>Häämatka ja sisustus</DT>
          <DD>
            Lähdemme pian hääjuhlan jälkeen interrail-matkalle halki Euroopan. Junaliput on jo
            hankittu, mutta muuten matkasuunnitelmat ovat joustavat. Lisäksi ostimme oman asunnon
            2016, mutta sisustus on vielä vähän vaiheessa. Kummankin projektin edistämisessä
            pienikin apu on tervetullutta!
          </DD>
          <DD>
            Häämatkaa ja sisustushankintoja voit parhaiten tukea tilisiirrolla tilille{' '}
            <Code>FI90 1663 3500 0186 35</Code>. Kirjoita viestiksi suosituksesi käyttökohteesta –
            esimerkiksi <cite>“ouzoa Kreikan saaristossa”</cite> tai{' '}
            <cite>“mukava sohva, jotta kelpaa tulla vieraisille”</cite>.
          </DD>
        </DL>
        <DL>
          <DT>Lahjakortit</DT>
          <DD>
            Aineettomat lahjat erityisesti kulttuurin, elämysten ja hyvän ruoan merkeissä ovat aina
            iloinen yllätys – ja sitä parempi jos lupaudutte seuraksi!
          </DD>
        </DL>
        <DL>
          <DT>Kodin tarpeistoa</DT>
          <DD>
            Tiedämme, että osa teistä antaa mieluiten käsinkosketeltavia lahjoja. Olemme
            valmistelleet teitä varten{' '}
            <A href="https://goo.gl/5WHFXj" target="_blank">
              Stockmannille lahjalistan
            </A>{' '}
            kestävistä ja tarpeellisista kodin hankinnoista.
          </DD>
        </DL>
      </Section>
    </SingleColumnContent>
  )
}
