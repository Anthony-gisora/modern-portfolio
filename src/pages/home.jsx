import { Facebook, Favorite, LinkedIn, Twitter, WhatsApp } from "@mui/icons-material";

const Home =({colorMode})=>{
    return(

        <div className=" flex flex-col md:max-w-[70%] overflow-auto ">
            <div className="md:flex md:flex-row md:w-full md:justify-between">
                <div className="flex flex-col md:max-w-full">
                    <div className={`${colorMode ? 'bg-[#a3a1a1] ' :'bg-[#2c2a2a] '} self-center  min-w-fit max-w-[90%] w-[60%]  p-2 my-2 rounded-lg text-[#ff4741] flex items-center justify-center font-semibold `}>Hi, a full-stack developer based in Kenya</div>
                    <div className="p-2">
                        <h1 className="font-semibold text-[20px] border-b-2 w-fit border-[#ff4741]">About</h1>
                        <div className="">
                            <p>Anthony is a full-stack developer base in Kisii,Kenya. He has a experience in most of the demanded skills in the Web development industry. He develops Both Android and Web Apps using treding and most demanded languages which are also optimal and efficient.</p>
                        </div>
                    </div>
                </div>
                <div className="p-2 mt-2 ">
                    <h1 className="font-semibold text-[20px] border-b-2 w-fit border-[#ff4741]">Bio</h1>
                    <div className="">
                        <div className="flex w-full justify-between">
                            <h1 className={`font-semibold text-[20px] mr-2 border-r-4 ${colorMode ? 'border-[#161515]' :' border-[#ffff]'} h-fit pr-2 `}>2000</h1>
                            <p>Born in Kisii and partialy grow in Kiserian Nairobi then migrated to kisii where i grew, learned and currently working there at a startup company.</p>
                        </div>
                        <div className="flex w-full justify-between mt-3">
                            <h1 className={`font-semibold text-[20px] mr-2 border-r-4 ${colorMode ? 'border-[#161515]' :' border-[#ffff]'} h-fit pr-2 `}>2021</h1>
                            <p>Took my Diploma in Information and Communication Technology at The Kisii National Polytechnic from 2021-2024 </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex md:flex-row w-full justify-between">
                <div className="p-2 mt-2 md:w-[85%]">
                    <h1 className="font-semibold text-[20px] border-b-2 w-fit  border-[#ff4741]"><Favorite className="!text-[#ff5151]" /></h1>
                    <div className="flex w-full ">
                        <h1 className={`font-semibold text-[20px] mr-2 border-r-4 ${colorMode ? 'border-[#161515]' :' border-[#ffff]'} h-fit pr-2 `}>Other</h1>
                        <p>Dancing, Photography, Cycling, Drawing, Playing Video Games</p>
                    </div>
                </div>
                <div className="p-2 mt-2 md:flex md:flex-col md:items-start md:justify-start md:w-[50%]">
                    <h1 className="font-semibold text-[20px] border-b-2 w-fit border-[#ff4741]">Social Media</h1>
                    <div className="flex flex-col w-full justify-between">
                        <div className="flex w-full">
                            <WhatsApp className="!text-[#3ed846] mr-4" />
                            <p>0796899444</p>
                        </div>
                        <div className="flex w-full">
                            <Facebook className="!text-[#3b39ac] mr-4" />
                            <p>Anthony Gisemba</p>
                        </div>
                        <div className="flex w-full">
                            <Twitter className="!text-[#4d4be2] mr-4" />
                            <p>@tonny_g</p>
                        </div>
                        <div className="flex w-full">
                            <LinkedIn className="!text-[#3b39ac] mr-4" />
                            <p>Tonny Gisemba</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
