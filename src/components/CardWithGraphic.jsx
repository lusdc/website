import { Link } from "react-router-dom";

function CardWithGraphic({ title, description, imgUrl, alt, glowColor, linkTo, setActiveLinkCallback }) {
  return (
    <>
      <div
        className="rotating-border-wrapper shadow-sm hover:shadow-xl"
        style={{ ["--rotating-border-color"]: glowColor }}
      >
        <Link to={linkTo} onClick={() => {
          setActiveLinkCallback(linkTo)
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }}>
          <div className="h-full rotating-border-card p-4 bg-gray-200 dark:bg-gray-700">
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
