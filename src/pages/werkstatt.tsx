import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Helmet } from "react-helmet";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Navbar from "../components/navbar/Navbar";

function Werkstatt() {
  return (
    <Layout>
      <Helmet
        title="werkstatt | moritz harfen"
        meta={[
          {
            name: "description",
            content:
              "Informationen zur Werkstatt und Historie von der Harfenbauwerkstatt Moritz Dortmund",
          },
        ]}
        htmlAttributes={{ lang: "de" }}
      />
      <Navbar />
      <Content flow="row" headline="werkstatt">
        <section className="lg:pl-20 md:w-11/12 lg:w-9/12 grid grid-flow-row gap-y-5">
          <div className="grid grid-flow-row sm:grid-flow-col gap-y-3 sm:gap-y-0 sm:gap-x-5 items-center">
            <StaticImage
              src="../images/werkstatt/Werkstatt_1.jpg"
              alt="werkstatt"
              placeholder="blurred"
              width={400}
              quality={100}
            />
            <p>
              Die Harfenbauwerkstatt &quot;Atelier für keltische Harfen&quot;
              wurde 1990 von Albrecht Nüchter im hessischen Rimbach gegründet.
              Fast drei Jahrzehnte lang fertigte Albrecht keltische Hakenharfen
              in Handarbeit. Er entwarf eigene Modelle und entwickelte sie über
              die Jahre in Zusammenarbeit mit Musiker:innen immer weiter.
              Mehrere hundert Instrumente sind in dieser Werkstatt, die Anfang
              der 2000er Jahre ins nahegelegene Haunetal umzog, entstanden.
              Dabei wurde er von seiner Frau Claudia Uecker unterstützt.
            </p>
          </div>
          <div className="grid grid-flow-row sm:grid-flow-col gap-y-3 sm:gap-y-0 sm:gap-x-5 items-center">
            <StaticImage
              src="../images/werkstatt/Aalbrecht.jpg"
              alt="Albrecht und Claudia stehen zusammen"
              placeholder="blurred"
              width={200}
              quality={100}
              className="order-1 sm:order-2"
            />
            <p className="order-2 sm:order-1">
              Am 4.4.2018 verstarb Albrecht und eine Nachfolge war zunächst
              ungewiss. Im Jahr 2021 wurde die Werkstatt von dem
              Instrumentenbauer Moritz Dortmund übernommen. Moritz hat das
              Schreinerhandwerk in Berchtesgaden und anschließend das
              Instrumentenbauhandwerk in Mittenwald gelernt und war dreieinhalb
              Jahre als Wandergeselle auf traditioneller Wanderschaft. Auf der
              Wanderschaft lernte Moritz das &quot;Atelier für keltische
              Harfen&quot; kennen und entschloss sich dazu, die Werkstatt zu
              übernehmen, während Claudia das Leihharfengeschäft weiterführt.
            </p>
          </div>
          <div className="grid grid-flow-row sm:grid-flow-col gap-y-3 sm:gap-y-0 sm:gap-x-5 items-center">
            <StaticImage
              src="../images/werkstatt/Werkstatt_2.jpg"
              alt="Holz"
              placeholder="blurred"
              width={400}
              quality={100}
            />
            <p>
              So wird Albrecht Nüchters Fackel weitergetragen und es entstehen
              in dieser Werkstatt weiterhin hochwertige, handwerklich gefertigte
              Harfen. Die Instrumente werden ausschließlich aus heimischen
              Hölzern gefertigt. Neben der hohen Qualität der Harfen spielt auch
              nachhaltiges Wirtschaften stets eine große Rolle. Es werden nicht
              nur die Harfen stetig weiterentwickelt, sondern auch die
              Produktion optimiert. Um Ressourcen zu schonen und
              uneingeschränkte Spielfreude zu garantieren.
            </p>
          </div>
        </section>
      </Content>
    </Layout>
  );
}

export default Werkstatt;
