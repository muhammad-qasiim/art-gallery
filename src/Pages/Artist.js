
import ArtistHeader from "../components/Homepage/ArtistHeader";
import GalleryContainer from "../components/common/GalleryContainer";

function HomePage() {
  return (
    <>

      <ArtistHeader />
      <GalleryContainer>
      <div>
        <h3 className="text-xl font-semibold">Explore more art from <span className="text-blue-600">THREE MUSKETEERS</span> </h3>
      </div>
      </GalleryContainer>

    </>
  );
}

export default HomePage;