
const Review = (props) => {
    return (
        <div className='review mt-10 w-full m-auto flex flex-col gap-2'>
            <div className="description h-auto bg-gray-100 rounded-lg p-4">
                {props.title}
            </div>

            <div className="footer-sec flex items-center gap-2">
                <img className="w-[50px] h-[50px] rounded-full" src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt="" />
                <div className="name-content">
                    <h2>Gladis Lennon</h2>
                    <small>Head of SEO</small>
                </div>
            </div>
        </div>
    )
}

export default Review