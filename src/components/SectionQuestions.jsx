import data from '../../public/data.json';
import iconError from '/icon-error.svg'
import { useState } from 'react';

import Option from './Option';
import ProgressBar from './ProgressBar';

export default function SectionQuestions({ category }) {

    const dataQuestions = data.quizzes.filter(quiz => quiz.title === category.name)

    const { questions } = dataQuestions[0];

    const [countQuestions, setCountQuestions] = useState(1);
    const [answerSelected, setAnwserSelected] = useState();

    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);

    const [errorText, setErrorText] = useState(false);

    const [progress, setProgress] = useState(1);

    const increaseProgress = () => {
        setProgress((prev) => (prev < 10 ? prev + 1 : 10));
    };

    const handleAnswer = (answer) => {
        setAnwserSelected(answer);
    }

    const handleNextQuestion = () => {
        setCountQuestions(prev => prev + 1);
        increaseProgress();
        setAnwserSelected(undefined);
        setIsAnswered(false);

    }


    const handleSubmit = () => {
        if (answerSelected === undefined) {
            setErrorText(true);
            return;
        } else {
            setErrorText(false)
            setIsAnswered(true);
            const correct = questions[countQuestions].correctAnswer;
            setIsCorrect(answerSelected === correct);

        }

    }

    console.log(answerSelected)


    return (
        <div className='pt-16 w-full flex mx-10'>

            <div className='basis-2/3 flex flex-col justify-between'>
                <div>
                    <p className='italic text-gray-400 text-xl'>Question {countQuestions} of {questions.length}</p>
                    <h1 className=' dark:text-white text-[#313E51] text-[50px] m-0 w-2/3 font-semibold'>
                        {questions[countQuestions].question}
                    </h1>
                </div>

                <div className="py-4 mb-12 w-2/3">
                    <ProgressBar value={progress} maxValue={10} />
                </div>

            </div>

            <div className='flex flex-col basis-1/2 pt-6'>
                <div className='flex flex-col gap-4 w-full'>
                    {questions[countQuestions].options.map((option, index) => (
                        <div key={index}>
                            <Option onClick={() => handleAnswer(option)} isSelected={option === answerSelected} title={option} position={index} />
                        </div>
                    ))}
                </div>
                {
                    !isAnswered && <button onClick={handleSubmit} className='bg-[#A729F5] w-full py-6 text-white font-bold text-3xl rounded-2xl mt-5'>Submit Answer</button>
                }
                {isAnswered && <button onClick={handleNextQuestion} className='bg-[#A729F5] w-full py-6 text-white font-bold text-3xl rounded-2xl mt-5'>Next Question</button>}


                {errorText &&
                    <div opn className='flex items-center justify-center pt-4'><img src={iconError} alt="" />
                        <p className='text-[#EE5454] text-3xl'>Please select an answer</p>
                    </div>}

            </div>

        </div>
    )
}