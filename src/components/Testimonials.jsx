import {useEffect, useState} from "react";
import {TestimonialCard} from "./TestimonialCard.jsx";

export const Testimonials = () => {

    const [showReviews, setShowReviews] = useState([])

    useEffect(() => {
        fetch('./ReviewData.json')
            .then(res => res.json())
            .then(data => setShowReviews(data))
    }, []);
    return (
        <div>
            <div className={'max-w-[1216px] h-[48px] mx-auto'}>
                <div className={'flex flex-col justify-center items-center mx-8'}>
                    <p className={'text-[#4F46E5] text-[14px] mt-[96px] font-semibold bg-[#EEF2FF] py-[6px] px-[12px] rounded-full'}>Testimonials</p>
                    <h1 className={'text-[36px] text-center font-extrabold text-[#1E293B]  mt-[24px] md:w-2/3 leading-[44px]'}>What People Say</h1>
                    <p className={'text-[18px] font-normal text-center text-[#475569] mt-[24px]  mb-[64px]'}>You can visit our office anytime but please don’t stalk us or don’t be creepy.</p>
                </div>

                <div className={'md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col  md:mx-auto mx-10 py-[50px]'}>
                    {
                        showReviews.map(card => <TestimonialCard card={card}></TestimonialCard>)
                    }
                </div>
            </div>
        </div>
    )
}