
const Contact = () => {
  return (
    <div className='form py-5'>
        <div>
          <div className="Heading text-center text-4xl mb-5">Contact Us!</div>
        <form className="flex flex-col gap-3 items-center justify-center">
            <input className="border outline-none p-4 px-8 w-[500px] rounded-sm shadow-lg" type="text"  placeholder='Name'/>
            <input className="border outline-none p-4 px-8 w-[500px] rounded-sm shadow-lg" type="email"  placeholder='Email'/>
            <input className="border outline-none p-4 px-8 w-[500px] rounded-sm shadow-lg" type="tel"  placeholder='Phone'/>
            <input className="border outline-none p-4 px-8 w-[500px] rounded-sm shadow-lg" type="number"  placeholder='PinCode'/>
            <input className="border outline-none p-4 px-8 w-[500px] rounded-sm shadow-lg cursor-pointer" type="Submit" />
        </form>
        </div>
    </div>
  )
}

export default Contact