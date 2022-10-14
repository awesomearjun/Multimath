import Links, { MobileLinks } from "../components/Links"

function Home() {
    return <div>
      <h1 id="title">Chose your tool:</h1>
      <br />
      <br />
      <div className="cards">
        <Links />
      </div>
      <div className="mobile">
        <MobileLinks />
      </div>
    </div>;
}

export default Home;