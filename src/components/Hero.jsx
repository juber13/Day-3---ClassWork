
const Hero = () => {
    return (
        <div className="hero h-screen bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat)]">
            <div className="content relative  h-screen flex flex-col w-4/5 m-auto top-40 gap-3">
                <h1 className="text-6xl font-bold">Let us find your<br/> <span className="text-red-500">Forever Food.</span></h1>
                <p className="w-3/5 text-2xl ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquaea!</p>
                <div className="btns">
                    <button className="btn  bg-red-600  px-10 py-3 mr-3 text-white rounded hover:bg-red-500">Search Now</button> 
                    <button className="btn   px-10 py-3 text-red-400 bg-white rounded">Know more</button> 
                </div>
            </div>
        </div>
    )
}

export default Hero