import data from '../../public/data.json';
import CategoryButton from './CategoryButton';
import SectionQuestions from './SectionQuestions';
import SwitchTheme from './SwitchTheme';

import { useState } from 'react';

export default function Home() {

    const [category, setCategory] = useState({
        name: '',
        icon: '',
    });

    const handleCategory = (name, icon) => {
        setCategory({ name, icon });
    }

    const bgColors = {
        0: 'bg-orange-300 bg-opacity-30',
        1: 'bg-green-300 bg-opacity-30',
        2: 'bg-blue-300 bg-opacity-30',
        3: 'bg-purple-300 bg-opacity-30'
    }

    return (
        <div className='max-w-[1500px] m-auto  w-full'>
            <header className="m-auto w-full h-12 mt-16 flex items-center justify-between">
                <div className='flex items-center pl-8'>
                    <div className={`p-1`}>
                        <img src={category.icon} alt={category.name} />
                    </div>
                    <h1 className="dark:text-white text-[#313E51] text-2xl font-bold uppercase">{category.name}</h1>
                </div>
                <div className='pr-10'>

                    <SwitchTheme />
                </div>
            </header>
            {category.name === '' && category.icon ===
                '' ?
                <div className='pt-16 flex mx-10'>
                    <div className='basis-2/3'>
                        <h1 className=' dark:text-white text-[#313E51] text-[65px] m-0 w-2/3'>
                            Welcome to the <span className='font-bold'>FrontEnd Quiz!</span>
                        </h1>
                        <div>
                            <p className='text-gray-400 text-2xl italic mt-10'>Pick a subject to get started.</p>
                        </div>
                    </div>

                    <div className='flex basis-1/2 pt-6'>
                        <div className='flex flex-col gap-4 w-full'>
                            {data.quizzes.map((quiz, index) => (
                                <div key={quiz.title}>
                                    <CategoryButton
                                        title={quiz.title}
                                        icon={quiz.icon}
                                        bgcolor={bgColors[index]}
                                        onClick={() => handleCategory(quiz.title, quiz.icon)} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div> : <SectionQuestions category={category} />}
        </div>
    );
}
