import iconContainer from '../images/Icon Container.png'
export const Statistics = () => {
    return (
        <div>
            <div>
                <div className={'flex flex-col justify-center items-center'}>
                        <img className={'h-[56] w-[56]'} src={iconContainer} alt=""/>
                    <h1 className={'text-[36px] font-extrabold text-[#1E293B] text-center mt-[24px] md:w-2/3 leading-[44px]'}>Work lazily and  achieve the result you want.</h1>
                    <p className={'text-[18px] font-normal text-[#475569] mt-[24px] md:w-1/2 text-center mb-[64px]'}>Liquam id diam maecenas ultricies mi eget mauris pharetra et. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Fermentum iaculis eu non diam.</p>
                </div>
            </div>
        </div>
    )
}