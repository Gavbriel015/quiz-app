export default function Option({ position, title, onClick, isSelected, correctAnwster, wrongAnswer }) {

    const letter = ['A', 'B', 'C', 'D'];

    return (
        <div onClick={onClick}
            className={`
            ${isSelected ? 'border-[#A729F5] ' : ''}
            ${correctAnwster ? 'border-green-400' : ''}
            ${wrongAnswer ? 'border-red-500' : ''}
            dark:bg-[#3C4D67] border-2 border-transparent hover:border-[#A729F5] 
            group flex cursor-pointer items-center rounded-2xl gap-4 bg-white w-full shadow-xl p-5`}>
            <div className={`
            ${isSelected ? 'bg-[#A729F5]' : 'group-hover:bg-white group-hover:bg-opacity-100 dark:bg-white'}
            ${correctAnwster ? 'bg-green-400 dark:bg-green-500' : ''}
            ${wrongAnswer ? 'bg-red-500 dark:bg-red-500' : ''}
            
            min-w-12 h-12 flex items-center justify-center rounded-xl`}>
                <p className={`${isSelected ? 'text-white dark:group-hover:text-white ' : 'dark:group-hover:text-[#A729F5]'}  font-bold text-3xl text-gray-500`}>{letter[position]}</p>
            </div>
            <h1 className="dark:text-white text-[#313E51] text-xl lg:text-3xl font-bold">{title}</h1>
        </div>
    );
}
