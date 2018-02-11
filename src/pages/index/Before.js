import React from 'react'
import { Container } from 'glamorous-grid'

export default function Before() {
  return (
    <Container>
      <h2>Pukukoodi</h2>
      <p>Tumma puku. Varaa tarvittaessa myös lämmintä mukaan.</p>

      <h2>Majoitus</h2>
      <p>
        Ilmoittautuessasi <a href="#rsvp">yllä</a> voit kertoa mahdollisesta majoitustarpeesta.
        Pyrimme järjestämään ryhmäalennuksen johonkin Helsingin keskustan hotelleista ja olemme
        erikseen yhteydessä tästä.
      </p>

      <h2>Muistaminen</h2>
      <p>
        Tärkeintä meille on, että tulette juhlimaan kanssamme. Jos kuitenkin haluat muistaa meitä
        jotenkin, lahjatoiveemme löytyvät alta.
      </p>

      <dl>
        <dt>Häämatka ja sisustus</dt>
        <dd>
          Lähdemme pian hääjuhlan jälkeen interrail-matkalle halki Euroopan. Junaliput on jo
          hankittu, mutta muuten matkasuunnitelmat ovat joustavat. Ostimme oman asunnon 2016, mutta
          sisustus on vielä vähän vaiheessa. Kummankin projektin edistämisessä pienikin apu on
          tervetullutta!
        </dd>
        <dd>
          Häämatkaa ja sisustushankintoja voit parhaiten tukea tilisiirrolla tilille{' '}
          <code>FI90 1663 3500 0186 35</code>. Kirjoita viestiksi suosituksesi rahan käyttökohteesta
          – esimerkiksi <cite>“Ouzoa Kreikan saaristossa”</cite> tai{' '}
          <cite>“mukava sohva, jotta kelpaa tulla vieraisille”</cite>.
        </dd>

        <dt>Lahjakortit</dt>
        <dd>
          Aineettomat lahjat erityisesti kulttuurin, elämysten ja hyvän ruoan merkeissä ovat aina
          iloinen yllätys – ja sitä parempi jos lupaudutte seuraksi!
        </dd>

        <dt>Kodin tarpeistoa</dt>
        <dd>
          Tiedämme, että osa teistä antaa mieluiten käsinkosketeltavia lahjoja. Olemme valmistelleet
          teitä varten{' '}
          <a href="https://goo.gl/5WHFXj" target="_blank">
            Stockmannille lahjalistan
          </a>{' '}
          kestävistä ja tarpeellisista kodin pienhankinnoista.
        </dd>
      </dl>
    </Container>
  )
}
