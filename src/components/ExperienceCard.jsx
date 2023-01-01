import starRating from '../mockups/Star.svg';

const ExperienceCard = (props) => {

    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="OnlineExperienceCard">
            <div className="OnlineExperiencePicture">
                { badgeText && <div className="OnlineExperienceStatusBadge"> <p className="OnlineExperienceStatus">{ badgeText }</p>
                </div>}
                <img src={require(`/src/mockups/${props.item.coverImg}`)} className="experienceImg"></img>
            </div>
            <div className="ExperienceCardSnapshot">
                <div className="ExperienceCardRating">
                    <img className="StarRatingIcon" src={ starRating }></img>
                    <span className="StarRating"> { props.item.stats.rating } </span>
                    <span className="StarReviewCount">({ props.item.stats.reviewCount }) </span>
                    &#183;
                    <span className="ExperienceLocation"> { props.item.location }</span>
                </div>
                <div className="ExperienceCardName">
                    <p>{ props.item.title }</p>
                </div>
                <div className="ExperienceCardPrice">
                    <span className="ExperiencePriceOverview">From </span>
                    <span className="ExperiencePrice">${ props.item.price }</span> / person
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;