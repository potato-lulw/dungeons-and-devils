import Campaign from "../components/Campaign"
import Character from "../components/Character"

const Home = () => {
  return (
    <div className="container flex flex-col mx-auto">
        <Character/>
        <Campaign/>
    </div>
  )
}

export default Home