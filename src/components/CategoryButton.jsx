export default function CategoryButton({ title, icon, bgcolor = "", onClick }) {
    return (
        <div onClick={onClick} className="hover:scale-105 hover:transition hover:ease hover:duration-150 dark:bg-[#3C4D67]  flex cursor-pointer items-center rounded-xl gap-4 bg-white w-full shadow-xl p-5">
            <div className={`p-1 ${bgcolor}`}>
                <img src={icon} alt="" />
            </div>
            <h1 className="dark:text-white text-[#313E51] text-3xl font-bold">{title}</h1>
        </div>
    )
}