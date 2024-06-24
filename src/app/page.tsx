/* NOTE: Hi there! Cool design. I've left a lot of
 * notes lying around explaining my reasoning, but
 * would love to chat. I kept it pretty close to
 * spirit of the mocks for the goal of this being
 * an exercise, but I have other ideas for improvement.
 */
'use client'
import Header from './components/01-atoms/Header/Header'
import Banner from './components/01-atoms/Banner/Banner'
import Heading from './components/01-atoms/Heading/Heading'
import ButtonControl from './components/01-atoms/ButtonControl/ButtonControl'
import CardRow from './components/03-organisms/CardRow/CardRow'
import { useState } from 'react'

export default function Home() {
  /* NOTE: Use state management like Context API if taken
   * outside of demo purposes
   */
  const [isEnabled, setIsEnabled] = useState(true)

  const handleToggle = () => {
    setIsEnabled((prevState) => !prevState)
  }

  return (
    <main>
      <Header />
      <Banner>Introducing NFT Wallpapers</Banner>
      {/* NOTE: Abstract these container classes into a component
       */}
      <div className="main-container">
        <div className="intro-container">
          {/* NOTE: Heading size for mock vs typography definintions doesn't
           * match so going with mock
           */}
          <Heading level="1" className="display display--md">
            CC0 NFT Assets as wallpapers
          </Heading>
          <Heading level="2" className="body-copy body-copy--sm body-copy--alt">
            Grab the NFT you like for your phone wallpaper
          </Heading>
        </div>
        <ButtonControl
          option1="Phone"
          option2="Watch"
          onClick={handleToggle}
          isEnabled={isEnabled}
        />
      </div>
      <CardRow cardType={isEnabled} />
    </main>
  )
}
