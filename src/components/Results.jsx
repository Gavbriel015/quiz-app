export default function Results({ category, counterCorrectAnswers, questions}) {
    return (

        <div className='pt-16 w-full flex flex-col lg:flex-row lg:mx-10 pb-10 lg:mr-10'>
            <div className='basis-2/3 flex flex-col justify-between'>
                <div className="text-center lg:text-left ">
                    <h1 className=' dark:text-white text-[#313E51] text-3xl lg:text-[70px] m-0 lg:w-2/3 font-semibold lg:leading-[100px]'>
                        Quiz completed
                    </h1>
                    <p className='text-[#313E51] text-5xl lg:text-[70px] font-bold dark:text-white'>You scored...</p>
                </div>

            </div>

            <div className='flex flex-col lg:basis-1/2 m-5 lg:m-0  pt-6'>
                <div className="w-full dark:bg-[#3B4D66] bg-opacity-40 rounded-xl">
                    <div className='flex items-center justify-center pt-6'>
                        <div className={`p-1`}>
                            <img src={category.icon} alt={category.name} />
                        </div>
                        <h1 className="dark:text-white text-[#313E51] text-4xl font-bold uppercase">{category.name}</h1>

                    </div>
                    <div className="flex justify-center flex-col items-center dark:text-white text-[#313E51] p-10">
                        <p className="text-[100px] font-bold">{counterCorrectAnswers}</p>
                        <p className="text-2xl font-bold">out of {questions.length}</p>

                    </div>
                </div>
                <button onClick={() => window.location.reload(true)} className='bg-[#A729F5] w-full py-6 text-white font-bold text-3xl rounded-2xl mt-5'>Play Again!</button>

            </div>
        </div>
    )
}