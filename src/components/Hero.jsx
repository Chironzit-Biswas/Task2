import AppStoreLogo from "../images/App Store Frame.png";
import HeroSectionPic from "../images/Hero_Frame.png";

export const Hero = () => {
    return (
        <div>
            <div className={' bg-gradient-to-b from-gray-100 to-indigo-500 '}>
                <div className={'max-w-[1216px] mx-auto'}>
                    <div>
                        <div className={'flex flex-col justify-center items-center'}>
                            <p className={'text-[#4F46E5] text-[14px] mt-[96px] font-semibold bg-[#EEF2FF] py-[6px] px-[12px] rounded-full'}>Design
                                System For Gen Z</p>
                            <h1 className={'text-[60px] font-extrabold text-[#1E293B] text-center mt-[24px] md:w-2/3 leading-[68px]'}>Unleash
                                Your Inner Design Sloth Today.</h1>
                            <p className={'text-[18px] font-normal text-[#475569] mt-[24px] w-2/3 text-center'}>Suspendisse
                                faucibus interdum posuere lorem ipsum dolor sit amet. Cras fermentum odio eu feugiat
                                pretium nibh ipsum. Venenatis cras sed felis eget velit aliquet.</p>
                            <img alt={""} className={'flex justify-center items-center mx-auto mt-[48px]'}
                                 src={AppStoreLogo}/>
                        </div>
                        <div>
                            <img alt="" className={'flex justify-center items-center mx-auto mt-[48px]'}
                                 src={HeroSectionPic}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}