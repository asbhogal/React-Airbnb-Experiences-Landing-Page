import cookingImage from '../mockups/cooking-image.svg';
import bakeryImage from '../mockups/bakery-image.svg';
import dancingImage from '../mockups/dancing-image.svg';
import cookingImage2 from '../mockups/cooking-image-2.svg';
import guitarImage from '../mockups/guitar-image.svg';
import keyboardImage from '../mockups/keyboard-image.svg';
import swimmingImage from '../mockups/swimming-image.svg';
import meditationImage from '../mockups/meditation-image.svg';
import singingImage from '../mockups/singing-image.svg';

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
            </section>
        </div>
    )
}

export default Body;