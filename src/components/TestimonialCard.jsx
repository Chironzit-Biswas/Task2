export const TestimonialCard = ({card}) => {
    const {img,title,des,profile_des,rating}
    return (
       <div>
            <div>
                <img src={card.img} alt=""/>
                <h1>{card.title}</h1>
            </div>
       </div>
    )
}