import './Banner.css'

declare type BannerProps = {
  children: string
}

const Banner: React.FC<BannerProps> = ({ children }) => {
  return <div className="banner">{children}</div>
}

export default Banner
