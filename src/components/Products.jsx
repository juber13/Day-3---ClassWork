
const Products = () => {
  return (
    <div className="products mt-8 grid grid-cols-2 m-auto w-11/12">
     
      <div className="left h-[600px] bg-slate-50 relative">
        <img className="mt-20 l-10 z-10 " src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
      </div>

      <div className="right  bg-gray-100 px-40  flex items-start justify-center flex-col w-full gap-5 h-[600px]">
        <h2 className="text-3xl font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>

        <button className="bg-blue-800 px-10 py-3 text-white ">Get In Touch</button>
      </div>
    </div>
  )
}

export default Products