import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { useIntl } from "gatsby-plugin-react-intl";

function LeaderDisclaimer() {
  const intl = useIntl();

  return (
    <section className="grid mt-20 gap-y-5 border-highlight border-t border-opacity-50 pt-20">
      <div className="grid sm:grid-cols-leader gap-x-5 items-center gap-y-5">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://ec.europa.eu/info/food-farming-fisheries/key-policies/common-agricultural-policy/rural-development_de#ruraldevelopmentprogrammes"
          className="justify-self-start sm:justify-self-center lg:justify-self-end"
        >
          <StaticImage
            src="../../images/leader/EU.jpg"
            alt="Logo EU"
            placeholder="blurred"
            width={150}
            quality={100}
          />
        </a>
        <p
          className="justify-self-start"
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "leaderDisclaimer.eu" }),
          }}
        />
        <a
          target="_blank"
          rel="noreferrer"
          href="http://eler.hessen.de"
          className="justify-self-start sm:justify-self-center lg:justify-self-end"
        >
          <StaticImage
            src="../../images/leader/Hessen.png"
            alt="Logo Hessen"
            placeholder="blurred"
            width={100}
            quality={100}
          />
        </a>
        <p
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "leaderDisclaimer.hessen" }),
          }}
        />
      </div>
      <div className="grid grid-flow-col gap-x-5 items-center justify-start sm:justify-center">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://umwelt.hessen.de/landwirtschaft/laendlicher-raum/foerderung-der-laendlichen-entwicklung/regionalentwicklung"
          className="justify-self-start sm:justify-self-center lg:justify-self-end"
        >
          <StaticImage
            src="../../images/leader/LEADER.jpg"
            alt="Logo Leader"
            placeholder="blurred"
            width={70}
            quality={100}
          />
        </a>
        <a target="_blank" rel="noreferrer" href="http://eler.hessen.de">
          <StaticImage
            src="../../images/leader/EPLR.jpg"
            alt="Logo EPLR"
            placeholder="blurred"
            width={62}
            quality={100}
          />
        </a>
      </div>
    </section>
  );
}

export default LeaderDisclaimer;
