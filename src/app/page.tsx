import Header from "./components/01-atoms/Header/Header"
import Banner from "./components/01-atoms/Banner/Banner"
import Heading from "./components/01-atoms/Heading/Heading"
import ButtonControl from "./components/01-atoms/ButtonControl/ButtonControl"

import CardRow from "./components/03-organisms/CardRow/CardRow"

export default function Home() {
  return (
    <main>
      <Header />
      <Banner>
        Introducing NFT Wallpapers
      </Banner>
      <div className="main-container">
        <div className="intro-container">
          <Heading level="1" className="display display--lrg">
            CC0 NFT Assets as wallpapers
          </Heading>
          <Heading level="2" className="body body--sm">
            Grab the NFT you like for your phone wallpaper
          </Heading>
        </div>
        <ButtonControl option1="Phone" option2="Watch" />
      </div>
      <CardRow />
    </main>
  )
}
