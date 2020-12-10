import React from 'react';
import './App.css';
import logo from "./assets/logo.svg";
import cover from "./assets/cover_1.jpg";
import map from "./assets/map.gif";
import imageBoat from "./assets/boat.jpg";

import iconMenuOpen from "./assets/menu.svg";
import iconMenuClose from "./assets/close.svg";

import {Article} from "./components/Article";

function App() {
  return (
    <React.Fragment>
      <header className="app-header glass">
        <a id={'logo'} href={'/'}>
          <img src={logo} height={240} width={36}/>
        </a>
        <input type="checkbox" id={'menu-check'} tabIndex={-1} style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px'
        }}/>
        <nav>
          <a href={'#dienstleistungen'}>Dienstleistungen</a>
          <a href={'#philosophie'}>Philosphie</a>
          <a href={'#kontakt'}>Kontakt</a>
        </nav>
        <label id={'menu'} htmlFor={'menu-check'}>
          <img src={iconMenuOpen} className={'open'} height={36} width={36}/>
          <img src={iconMenuClose} className={'close'} height={36} width={36}/>
        </label>
      </header>
      <section id={'home'}>
        <div className={'cols'}>
          <div className={'col slogan'}>
            <h1>
              Unternehmensberatung.
              <span>Wendig, flexibel und agil.</span>
            </h1>
          </div>
          <div className={'col cover'}>
            <figure>
              <img className={'img'} src={cover}/>
            </figure>
          </div>
        </div>
      </section>
      <section id={'dienstleistungen'}>
        <h1>Dienstleistungen</h1>
        <div className={'cols'}>
          <Article title={'Buchführung'} order={1}>
            <p>
              Eine gut geführte Buchhaltung ist die Basis für wichtige Informationsquellen, welche für die Führung
              des Unternehmens benötigt werden. Je besser die Buchhaltung geführt ist, umso besser lassen sich
              relevante Kennzahlen daraus herauslesen, die für die Führung Ihres Unternehmens unabdingbar sind.
            </p>
            <p>
              Wir beraten Sie gerne bei der Planung Ihrer Buchführung und weisen Sie auf allfälligen Handlungs- und
              Optimierungsbedarf hin.
            </p>
            <p>
              UbG führt für Ihr Unternehmen die Buchhaltung nach Schweizer Standards.
            </p>
          </Article>
          <Article title={'Reporting'} order={2}>
            <p>
              Aus einer gut geführten Buchhaltung können die verschiedensten Auswertungen herausgezogen werden. Neben
              der Bilanz und der Erfolgsrechnung können zusätzliche Auswertungen, wie Liquiditätsplanung,
              Budgetvergleiche sowie Nachkalkulationen sinnvolle Ergänzungen des Reportings sein.
            </p>
            <p>
              Welche Zahlen für die Führung Ihres Unternehmens notwendig sind, entscheiden Sie. Wir beraten Sie
              gerne, wie Sie ein massgeschneidertes, Ihren Bedürfnissen entsprechendes Reporting aufbauen können.
            </p>
          </Article>
          <Article title={'Steuern'} order={3}>
            <p>
              Seine Steuern zu planen, heisst Steuern zu optimieren. Jede Buchung kann also direkt oder indirekt die
              Steuern beeinflussen.
            </p>
            <p>
              Selbstverständlich können wir es Ihnen nicht ersparen, Steuern zu bezahlen. Aber vielleicht können wir den
              Steuerbetrag reduzieren, falls wir rechtzeitig miteinbezogen werden.
            </p>
            <p>
              Steuererklärungen für natürliche und juristische Personen, sowie Mehrwertsteuerabrechnungen für Personen
              mit Einzelfirmen übernehmen wir gerne.
            </p>
          </Article>
          <Article title={'Lohnbuchaltung'} order={4}>
            <p>
              Jeweils Ende Jahr müssen die Lohnbescheinigungen diverser Sozialversicherungen ausgefüllt werden, es sind
              Quellensteuerabrechnungen und die Lohnausweise zu erstellen. Diese Arbeit kann sehr effizient und, je nach
              Ausgestaltung, kostengünstig erledigt werden, wenn eine Lohnbuchhaltung geführt wird.
            </p>
            <p>
              Wie für Sie die Lohnbuchhaltung ausgestaltet werden sollte, bestimmen Sie. Wir beraten Sie gerne wie eine
              effiziente Lösung für Ihren Betrieb aussehen könnte.
            </p>
          </Article>
          <Article title={'Finanzplanung'} order={5}>
            <p>
              Ein Budget zu erstellen ist nicht ganz so einfach wie es klingt. Es geht nämlich nicht darum die
              Vorjahreswerte der Erfolgsrechnung einfach ins Budget zu übernehmen, sondern sich Gedanken darüber zu
              machen, welche Aktionen im nächsten Jahr anstehen, wieviel Umsatz diese generieren und welche Kosten diese
              auslösen. Schwierig wird es jeweils, wenn die Planerfolgsrechnung (Budget) steht und aufgrund dieser die
              Geldflüsse aufgezeichnet werden müssen (Liquiditätsplanung).
            </p>
            <p>
              Falls Sie eine Liquiditätsplanung für die nächsten zwölf Monate, ein Budget oder einen Finanzplan
              erstellen möchten, können wir Ihnen selbstverständlich weiterhelfen.
            </p>
          </Article>
          <Article title={'IT-Schnittstellen'} order={6}>
            <p>
              Die Philosophie, dass jede Arbeit am richtigen Ort erledigt werden kann, setzt voraus, dass mit
              kompatiblen Geräten resp. Programmen gearbeitet wird. Eine Bestandesaufnahme der vorhandenen Strukturen
              und Überlegungen dazu, wer mit welchen Daten weiterarbeiten soll, ist für ein effizientes Rechnungswesen
              unabdingbar.
            </p>
            <p>
              Es ist uns ein Anliegen, bestehende Strukturen und Abläufe bei unseren Kunden nach Möglichkeit in ein
              Gesamtsystem integrieren zu können
            </p>
            <p>
              Meist bestehen in den Unternehmen bereits Systeme oder Programme, mit welchen die Auftragsabwicklung
              erledigt werden kann. Das Abklären, ob diese Daten an nachgelagerte Programme (Debitoren- /
              Kreditoren-Buchhaltung) übergeben werden können, garantiert, dass Daten nur an einem Ort erfasst und
              überall dort ausgewertet werden können, wo diese benötigt werden.
            </p>
          </Article>
        </div>
      </section>
      <section id={'philosophie'}>
        <h1>Philosphie</h1>
        <div className={'cols'}>
          <Article title={''} order={1}>
            <p>
              «High Performance for Amateurs» lautet das Motto der Quant 23-Bootsbauer. Und es sind denn Leistung auch
              bei sehr leichten Winden, Vielseitigkeit und Wandlungsfähigkeit, welche die Quant 23 Boote auszeichnen.
              Diese Attribute treffen auch auf die Unternehmensberatung Gradmann (UbG), eine Einzelfirma, geführt von
              Philipp Gradmann zu und haben den Inhaber bewogen, sich als passionierter Segler für eine Quant 23 zu
              entscheiden.
            </p>
            <p>
              Wendig, flexibel und agil agiert auch die UbG, hinter der mit Philipp Gradmann ein leidenschaftlicher
              Treuhänder steht. Schon die kaufmännische Ausbildung hat er in einer Treuhandgesellschaft absolviert und
              auch die Jahre danach war er ausschliesslich treuhänderisch tätig. Dieser fundierte Erfahrungsschatz hat
              zu einer eigenen, kleinen Beratungsfirma geführt.
            </p>
            <p>
              UbG bietet qualitativ hochstehende Arbeit zu fairen Preisen an und berät vor allem juristische Personen,
              wobei auch natürliche Personen herzlich willkommen sind.
            </p>
            <p>
              Ihren Seglern spendiert die Quant23 durch das «Foilen» lange genussvolle und gleichmässige Flüge über das
              Wasser. Bahnt sich dennoch einmal ein «Crash» an übernimmt der Scow-Bug mit spitzem Einlauf und viel
              Volumen. Nach einem meistens sanften «Touchdown» kommt der Bug gleich wieder hoch.
            </p>
            <p>
              Auch diese Eigenschaft lässt sich auf die UbG übertragen. Wir betreuen Sie in «windstillen» Zeiten und
              beraten und unterstützen Sie, wenn es einmal «windiger» werden sollte.
            </p>
            <p>
              Zögern Sie nicht uns zu kontaktieren, wir helfen Ihnen, den Bug wieder in die richtige Richtung zu
              bringen.
            </p>
            <p>
              UbG führt für Ihr Unternehmen die Buchhaltung nach Schweizer Standards.
            </p>
          </Article>
          <div className={'col map'}>
            <figure>
              <img className={'img'} src={imageBoat} width={440}/>
            </figure>
          </div>
        </div>
      </section>
      <section id={'kontakt'}>
        <h1>Kontakt</h1>
        <div className={'cols'}>
          <Article title={''} order={1}>
            <p>
              <b>Unternehmensberatung Gradmann</b>
            </p>
            <p>
              Badenerstrasse 313<br/>
              8040 Zürich<br/>
              Schweiz
            </p>
            <p>
              <span>Telefon: </span><a href={'tel:+41 44 400 40 90'}>+41 44 400 40 90</a><br/>
              <span>Fax: </span>+41 44 400 40 89<br/>
              <span>Email: </span><a href={'mailto:info@gradmann.ch'}>info@gradmann.ch</a><br/>
            </p>
          </Article>
          <div className={'col map'}>
            <figure>
              <img className={'img'} src={map} width={440}/>
            </figure>
          </div>
        </div>
      </section>
      <footer>&nbsp;
      </footer>
    </React.Fragment>
  );
}

export default App;
