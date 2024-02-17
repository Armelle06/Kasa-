import Banner from "../components/Banner/Banner";
import image from "../assets/ImageBannerAPropos.png";
import Collapse from "../components/Collapse/Collapse";
import "../styles/index.css";
import "./about.css";

const descritionAbout = [
  {
    title: "Fiabilité",
    description:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    description:
      " Kasa offre une expérience exceptionnelle de location d'appartements, mettant à disposition une gamme diversifiée de logements soigneusement sélectionnés et garantissant un séjour confortable.",
  },
  {
    title: "Sécurité",
    description:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

export default function About() {
  return (
    <div className="about-page">
      <Banner image={image} alt="photo montagnes et rivière " />
      <div className="about_div">
        {descritionAbout.map((data, index) => (
          <Collapse key={index} title={data.title} content={data.description} />
        ))}
      </div>
    </div>
  );
}
