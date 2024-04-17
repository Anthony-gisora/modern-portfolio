
const Card = ({img, description, colorMode}) =>{
    return(
        <div className={`w-full flex flex-col items-center my-2 rounded-md ${colorMode ? 'bg-[#a3a1a1] text-[#161515]' :'bg-[#2c2a2a] text-[#ffff]'} p-1`}>
            <div className="w-[350px] h-[350px] rounded-md flex md:flex-row flex-col items-center justify-between">
                <img src={img} alt="proj1" className='md:w-[60%] md:h-full w-full h-[50%] object-cover rounded-md' />
                <img src={img} alt="proj1" className='md:w-[60%] md:h-full w-full h-[50%] object-cover rounded-md' />
            </div>
            <div className="">{description}</div>
        </div>
    );
}

export default Card;