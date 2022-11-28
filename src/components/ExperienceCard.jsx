import starRating from '../mockups/Star.svg';

const ExperienceCard = (props) => {
    return (
        <div className="OnlineExperienceCard">
            <div className="OnlineExperiencePicture">
                <div className="OnlineExperienceStatusBadge">
                    <p className="OnlineExperienceStatus">{ props.experienceStatus }</p>
                </div>
                <img src={ props.experienceImg }></img>
            </div>
            <div className="ExperienceCardSnapshot">
                <div className="ExperienceCardRating">
                    <img className="StarRatingIcon" src={ starRating }></img>
                    <span className="StarRating"> { props.experienceRating } </span>
                    <span className="StarReviewCount">({ props.experienceRatingCount }) </span>
                    &#183;
                    <span className="ExperienceLocation"> { props.experienceLocation }</span>
                </div>
                <div className="ExperienceCardName">
                    <p>{ props.experienceHeadline }</p>
                </div>
                <div className="ExperienceCardPrice">
                    <span className="ExperiencePriceOverview">From </span>
                    <span className="ExperiencePrice">${ props.experiencePrice }</span> / person
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;