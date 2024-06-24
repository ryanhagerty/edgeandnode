import './CardRow.css'
import Card from '../../02-molecules/Card/Card'

declare type CardRowProps = {
  cardType?: boolean
}

const CardRow: React.FC<CardRowProps> = ({ cardType }) => {
  /* NOTE: Simulating a data array of cards we can loop over
   * for sake of demo purposes.
   */
  const mockCardArray = Array.from(Array(11).keys())
  return (
    <div className={`cardrow ${cardType === false ? `cardrow--watch` : ``}`}>
      <div className="cardrow__container">
        {/* NOTE: Discuss with designer about last card's info
         * occupying too much space/off viewport on hover.
         * I would suggest flipping the last card's content
         * to the left side on hover
         */}
        {mockCardArray.map((i) => {
          return <Card key={i} cardType={cardType} />
        })}
      </div>
    </div>
  )
}

export default CardRow
