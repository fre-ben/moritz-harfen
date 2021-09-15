import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

function LeaderDisclaimer() {
  return (
    <section className="grid pl-5 lg:pl-28 sm:grid-cols-leader gap-x-5 gap-y-1 sm:gap-y-5 grid-rows-3 items-center mt-20">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://ec.europa.eu/info/food-farming-fisheries/key-policies/common-agricultural-policy/rural-development_de#ruraldevelopmentprogrammes"
        className="justify-self-start sm:justify-self-center lg:justify-self-end"
      >
        <StaticImage
          src="../../images/leader/EU.jpg"
          alt="placeholder image"
          placeholder="blurred"
          width={150}
        />
      </a>
      <p className="justify-self-start">
        Die Weiterführung dieser Werkstatt wird gefördert durch: <br />
        Europäischer Landwirtschaftsfonds für die Entwicklung des ländlichen
        Raums:
        <br /> Hier investiert Europa in die ländlichen Gebiete.
      </p>
      <a
        target="_blank"
        rel="noreferrer"
        href="http://eler.hessen.de"
        className="justify-self-start sm:justify-self-center lg:justify-self-end"
      >
        <StaticImage
          src="../../images/leader/Hessen.png"
          alt="placeholder image"
          placeholder="blurred"
          width={100}
        />
      </a>
      <p>
        Mitfinanziert durch das Land Hessen im Rahmen des <br />
        Entwicklungsplans für den ländlichen Raum des Landes Hessen 2014-2020
      </p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://umwelt.hessen.de/landwirtschaft/laendlicher-raum/foerderung-der-laendlichen-entwicklung/regionalentwicklung"
        className="justify-self-start sm:justify-self-center lg:justify-self-end"
      >
        <StaticImage
          src="../../images/leader/LEADER.jpg"
          alt="placeholder image"
          placeholder="blurred"
          width={100}
        />
      </a>
      <a target="_blank" rel="noreferrer" href="http://eler.hessen.de">
        <StaticImage
          src="../../images/leader/EPLR.jpg"
          alt="placeholder image"
          placeholder="blurred"
          width={100}
        />
      </a>
    </section>
  );
}

export default LeaderDisclaimer;
