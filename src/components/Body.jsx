import cookingImage from '../mockups/cooking-image.png';
import bakeryImage from '../mockups/bakery-image.png';
import dancingImage from '../mockups/dancing-image.png';
import cookingImage2 from '../mockups/cooking-image-2.png';
import guitarImage from '../mockups/guitar-image.png';
import keyboardImage from '../mockups/keyboard-image.png';
import swimmingImage from '../mockups/swimming-image.png';
import meditationImage from '../mockups/meditation-image.png';
import singingImage from '../mockups/singing-image.png';
import ExperienceCard from './ExperienceCard';

import katieZaferesImg from '../mockups/Katie-Zaferes-Image.png';
import learnWeddingPhotographyImg from '../mockups/Learn-Wedding-Photography-Image.png';
import groupMountainBikingImg from '../mockups/Group-Mountain-Biking-Image.png';

const Body = (props) => {
    return (
        <div className="Body">
            <div className="Masonry">
                <div className="MasonryItemLeft MasonryItem">
                    <img className="CookingImage" src={ cookingImage }></img>
                </div>
                <div className="MasonryItem">
                    <img className="BakeryImage" src={ bakeryImage }></img>
                </div>
                <div className="MasonryItem">
                    <img className="CookingImage2" src={ cookingImage2 }></img>
                </div>
                <div className="MasonryItem">
                    <img className="KeyboardImage" src={ keyboardImage }></img>
                </div>
                <div className="MasonryItem">
                    <img className="MeditationImage" src={ meditationImage }></img>
                </div>
                <div className="MasonryItem">
                    <img className="DancingImage" src={ dancingImage }></img>
                </div>
                <div className="MasonryItem">
                    <img className="GuitarImage" src={ guitarImage }></img>
                </div>
                <div className="MasonryItem">
                    <img className="SwimmingImage" src={ swimmingImage }></img>
                </div>
                <div className="MasonryItem">
                    <img className="SingingImage" src={ singingImage }></img>
                </div>
            </div>
            <section className="ExperiencesSection">
                <h1 className="OnlineExperiencesHeading">Online Experiences</h1>
                <h2 className="InteractiveActivitiesSubheading">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h2>
                <div className="OnlineExperiencesCards">
                    <ExperienceCard 
                        experienceStatus = "Sold Out"
                        experienceRating = "5.0"
                        experienceRatingCount = "6"
                        experienceLocation = "USA"
                        experienceImg = { katieZaferesImg }
                        experiencePrice = "136"
                        experienceHeadline = "Life lessons with Katie Zaferes"
                    />
                    <ExperienceCard 
                        experienceStatus = "Online"
                        experienceRating = "5.0"
                        experienceRatingCount = "30"
                        experienceLocation = "USA"
                        experienceImg = { learnWeddingPhotographyImg }
                        experiencePrice = "125"
                        experienceHeadline = "Learn wedding photography"
                    />
                    <ExperienceCard 
                        experienceRating = "4.8"
                        experienceRatingCount = "2"
                        experienceLocation = "USA"
                        experienceImg = { groupMountainBikingImg }
                        experiencePrice = "50"
                        experienceHeadline = "Group Mountain Bikin"
                    />
                </div>
            </section>
        </div>
    )
}

export default Body;