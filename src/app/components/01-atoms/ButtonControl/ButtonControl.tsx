import './ButtonControl.css'

declare type ButtonControlProps = {
  option1: string
  option2: string
  onClick: () => void
  isEnabled: boolean
}

const ButtonControl: React.FC<ButtonControlProps> = ({
  option1,
  option2,
  onClick,
  isEnabled,
}) => {
  return (
    <button className="button-control" onClick={onClick}>
      <span
        className={`button-control__option ${isEnabled ? 'button-control--on' : 'button-control--off'}`}
      >
        {option1}
      </span>
      <span
        className={`button-control__option ${isEnabled ? 'button-control--off' : 'button-control--on'}`}
      >
        {option2}
      </span>
    </button>
  )
}

export default ButtonControl
