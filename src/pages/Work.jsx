import Card from "../components/Card";
import img1 from '../assets/images/project1.png'


const Home =({colorMode})=>{
    return(

        <div className=" flex flex-col md:max-w-[70%] overflow-auto ">
            <div className="flex flex-col md:w-full ">
                <div className="flex flex-col md:max-w-full">
                    <div className={`${colorMode ? 'bg-[#a3a1a1] ' :'bg-[#2c2a2a] '} self-center  min-w-fit max-w-[90%] w-[60%]  p-2 my-2 rounded-lg text-[#ff4741] flex items-center justify-center font-semibold `}>Hi, a full-stack developer based in Kenya</div>
                    <div className="p-2">
                        <h1 className="font-semibold text-[20px] border-b-2 w-fit border-[#ff4741]">Work</h1>
                        <div className="">
                            <p>Anthony is a full-stack developer. I can work both remotely and in-office setup to essure on time commit of the product in constraction. The following are some of the project i've been working on.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row flex-wrap md:max-w-full">
                    <Card colorMode={colorMode} description="Simple School Portal" img={img1}/>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Home;