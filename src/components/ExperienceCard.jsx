import katieZaferesImage from '../mockups/Katie-Zaferes-Image.png';
import starRating from '../mockups/Star.svg';

const ExperienceCard = (props) => {
    return (
        <div className="OnlineExperienceCard">
            <div className="OnlineExperiencePicture">
                <div className="OnlineExperienceStatusBadge">
                    <p className="OnlineExperienceStatus">Sold Out</p>
                </div>
                <img src={ katieZaferesImage }></img>
            </div>
            <div className="ExperienceCardSnapshot">
                <div className="ExperienceCardRating">
                    <img className="StarRatingIcon" src={ starRating }></img>
                    <span className="StarRating"> 5.0</span>
                    <span className="StarReviewCount">(6)</span>
                    &#183;
                    <span className="StarRatingLocation"> USA</span>
                </div>
                <div className="ExperienceCardName">
                    <p>Life lessons with Katie Zaferes</p>
                </div>
                <div className="ExperienceCardPrice">
                    <span className="ExperiencePriceOverview">From </span>
                    <span className="ExperiencePrice">$136</span> / person
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;