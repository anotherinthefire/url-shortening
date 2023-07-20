import Advanced from "../components/Advanced"
import Boost from "../components/Boost"
import Shortener from "../components/Shortener"
import Showcase from "../components/Showcase"

const Home = () => {
  return (
    <div>
      <Showcase />
      <Shortener />
      <Advanced />
      <Boost />
    </div>
  )
}

export default Home