const Applayout =({children, colorMode})=>{

    return(
        <div className={`h-[100vh] ${colorMode ? 'bg-[#dbdada] text-[#161515]' :'bg-[#161515] text-[#ffff] '}  select-none  flex flex-col items-center`}>
            {children}
        </div>
    )
}

export default Applayout;