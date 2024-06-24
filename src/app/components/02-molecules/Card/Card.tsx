import "./Card.css";
/* NOTE: For ease of demo purposes, I'll 
 * use the same image/text over and over. 
*/
import demoImg from "./demoImg.png";
import demoImgWatch from "./demoImg-watch.png";
import ButtonIcon from "../../01-atoms/ButtonIcon/ButtonIcon";
import Button from "../../01-atoms/Button/Button";

declare type CardProps = {
  className?: string;
};

const Card: React.FC<CardProps> = ({ className }) => {
  const classes = className ? className : "";

  return (
    <div className={`card ${classes}`}>
      <img
        className="card__img--main"
        src={demoImg.src}
        alt="sample demo img"
      />
      <div className='card__container'>
        <img
          className="card__img"
          src={demoImg.src}
          alt="sample demo img"
          aria-hidden="true"
        />
        <div className="card__content">
          <div className="card__text">
            <div className="card__eyebrow">Wallpapers of Unsplash</div>
            <div className="card__title">Human and Machine</div>
            <div className="card__description">Description for this item, would be a metadata for the collection as a fallback</div>
            <div className="card__stats">
            <div className="card__stat">
              <span>Total Assets:</span>
              <span>4,000</span>
            </div>
            <div className="card__stat">
              <span>Asset Type:</span>
              <span>ERC-721</span>
            </div>
          </div>
        </div>
        <div className="card__actions">
          <ButtonIcon/>
          <Button>Download</Button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;