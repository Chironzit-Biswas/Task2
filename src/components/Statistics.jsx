import iconContainer from '../images/Icon Container.png'
export const Statistics = () => {
    return (
        <div className={'max-w-[1216px] mx-auto'}>
            <div>
                <div className={'flex flex-col justify-center items-center'}>
                        <img className={'h-[56] w-[56]'} src={iconContainer} alt=""/>
                    <h1 className={'text-[36px] font-extrabold text-[#1E293B] text-center mt-[24px] md:w-2/3 leading-[44px]'}>Work lazily and  achieve the result you want.</h1>
                    <p className={'text-[18px] font-normal text-[#475569] mt-[24px] md:w-1/2 text-center mb-[64px]'}>Liquam id diam maecenas ultricies mi eget mauris pharetra et. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Fermentum iaculis eu non diam.</p>
                </div>
                <div className={'md:flex justify-center items-center text-[#4F46E5] md:mx-auto gap-[16px] '}>
                    <div className={'text-center border-r-2'}>
                        <h1 className={'text-[60px]  font-bold'}>420%</h1>
                        <p>Data Efficiency</p>

                    </div>
                    <div className={'text-center border-r-2'}>
                        <h1 className={'text-[60px]  font-bold'}>708+</h1>
                        <p>Conversion Rate</p>
                    </div>
                    <div className={'text-center border-r-2'}>
                        <h1 className={'text-[60px]  font-bold'}>1.82M</h1>
                        <p>AI LLM Scale</p>
                    </div>
                </div>
            </div>
        </div>
    )
}