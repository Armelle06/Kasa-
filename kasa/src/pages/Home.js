import Banner from "../components/Banner/Banner";
import image from "../assets/ImageBannerHome.png";
import CardGallery from "../components/Card/CardGallery";

const Home = () => {
  return (
    <div>
      <Banner
        image={image}
        alt="photo bord de mer rocheux "
        title="Chez vous, partout et ailleurs"
      />
      <CardGallery />
    </div>
  );
};

export default Home;
