import { Link } from "react-router-dom";

function CardWithGraphic({ title, description, imgUrl, alt, glowColor, rotatingBorderAngle, linkTo, setActiveLinkCallback }) {
  return (
    <>
      <div
        className="rotating-border-wrapper shadow-lg"
        style={{ ["--rotating-border-color"]: glowColor, ["--rotating-glow-start-angle"]: rotatingBorderAngle}}
      >
        <Link to={linkTo} onClick={() => {
          setActiveLinkCallback(linkTo)
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }}>
          <div className="h-full rotating-border-card p-4 bg-gray-200 dark:bg-gray-700
                rounded-2xl 
                bg-white/10 dark:bg-gray-900/20
                backdrop-blur-xl backdrop-saturate-150
                border border-white/20 dark:border-gray-700/30
                shadow-2xl shadow-black/10 dark:shadow-black/50
                transition-all duration-500 ease-out
                hover:border-white/40 dark:hover:border-gray-600/50">

            <h2 className="text-xl font-bold dark:text-gray-100">{title}</h2>
            <p className="mt-1 text-base text-gray-700 dark:text-gray-400">{description}</p>
            <img className="rotating-border-card-icon" src={imgUrl} alt={alt} />
          </div>
        </Link>
      </div>
    </>
  );
}

export default CardWithGraphic;
