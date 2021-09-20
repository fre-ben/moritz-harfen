import * as React from "react";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Navbar from "../components/navbar/Navbar";

function Werkstatt() {
  return (
    <Layout>
      <Navbar />
      <Content flow="row" headline="werkstatt">
        <div className="lg:pl-20 md:w-7/12 lg:w-9/12">
          <p className="mb-4">
            Die Harfenbauwerkstatt &quot;Atelier für keltische Harfen&quot;
            wurde 1990 von Albrecht Nüchter im hessischen Rimbach gegründet.
            Fast drei Jahrzehnte lang fertigte Albrecht keltische Hakenharfen in
            Handarbeit. Er entwarf eigene Modelle und entwickelte sie über die
            Jahre in Zusammenarbeit mit Musiker:innen immer weiter. Mehrere
            hundert Instrumente sind in dieser Werkstatt, die Anfang der 2000er
            Jahre ins nahegelegene Haunetal umzog, entstanden. Dabei wurde er
            von seiner Frau Claudia Uecker unterstützt.
          </p>
          <p className="mb-4">
            Am 4.4.2018 verstarb Albrecht und eine Nachfolge war zunächst
            ungewiss. Im Jahr 2021 wurde die Werkstatt von dem Instrumentenbauer
            Moritz Dortmund übernommen. Moritz hat das Schreinerhandwerk in
            Berchtesgaden und anschließend das Instrumentenbauhandwerk in
            Mittenwald gelernt und war dreieinhalb Jahre als Wandergeselle auf
            traditioneller Wanderschaft. Auf der Wanderschaft lernte Moritz das
            &quot;Atelier für keltische Harfen&quot; kennen und entschloss sich
            dazu, die Werkstatt zu übernehmen, während Claudia das
            Leihharfengeschäft weiterführt.
          </p>
          <p className="mb-4">
            So wird Albrecht Nüchters Fackel weitergetragen und es entstehen in
            dieser Werkstatt weiterhin hochwertige, handwerklich gefertigte
            Harfen. Die Instrumente werden ausschließlich aus heimischen Hölzern
            gefertigt. Neben der hohen Qualität der Harfen spielt auch
            nachhaltiges Wirtschaften stets eine große Rolle. Es werden nicht
            nur die Harfen stetig weiterentwickelt, sondern auch die Produktion
            optimiert. Um Ressourcen zu schonen und uneingeschränkte Spielfreude
            zu garantieren.
          </p>
        </div>
      </Content>
    </Layout>
  );
}

export default Werkstatt;
