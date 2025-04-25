export const TestimonialCard = ({card}) => {
    const {rating,des,img,title,profile_des}=card
    return (
       <div>
           <div >
               <div className={'border-[#E2E8F0] border-1 bg-[#F8FAFC] p-[24px] rounded-xl h-[284px] w-[384px] flex flex-col justify-evenly  m-3'}>
                     <div>
                         <img src={rating} alt=""/>
                         <h1 className={'mt-[24px]'}>{des}</h1>
                     </div>
                    <div className={'flex mt-[24px]'}>
                        <img src={img} alt=""/>
                         <div className={'ml-4'}>
                             <h1>{title}</h1>
                             <p>{profile_des}</p>
                         </div>
                    </div>
               </div>

           </div>

       </div>
    )
}