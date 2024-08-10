import data from '../../public/data.json';
import iconError from '/icon-error.svg'
import { useState } from 'react';

import Option from './Option';
import ProgressBar from './ProgressBar';
import Results from './Results';

export default function SectionQuestions({ category }) {

    const dataQuestions = data.quizzes.filter(quiz => quiz.title === category.name)

    const { questions } = dataQuestions[0];

    const [countQuestions, setCountQuestions] = useState(0);
    const [counterCorrectAnswers, setCounterCorrectAnswers] = useState(0);
    const [answerSelected, setAnwserSelected] = useState();

    const [isAnswered, setIsAnswered] = useState(false);
    const [errorText, setErrorText] = useState(false);
    const [progress, setProgress] = useState(1);

    const increaseProgress = () => {
        setProgress((prev) => (prev < 10 ? prev + 1 : 10));
    };

    const handleAnswer = (answer) => {
        setAnwserSelected(answer);
    }
    console.log(counterCorrectAnswers)

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
            if (answerSelected === questions[countQuestions].answer) {
                setCounterCorrectAnswers(counterCorrectAnswers + 1);
            }
        }
    }

    return (
        <>
            {countQuestions >= 10 ? <Results counterCorrectAnswers={counterCorrectAnswers} category={category} questions={questions} />
                : (<div className='sm:pt-16 w-full flex flex-col lg:flex-row lg:mx-8 pb-10'>
                    <div className='basis-2/3 flex flex-col justify-center lg:justify-between'>
                        <div className='flex flex-col mx-4 gap-5'>
                            <p className='italic text-gray-400 text-xl pt-4 lg:pt-0'>Question {countQuestions + 1} of {questions.length}</p>
                            <h1 className=' dark:text-white text-[#313E51] text-3xl lg:text-[50px] lg:leading-[60px] m-0 w-full lg:w-2/3 font-semibold mx-2'>
                                {questions[countQuestions]?.question}
                            </h1>
                        </div>

                        <div className="py-4 flex justify-center w-full px-2 lg:w-2/3 lg:pb-24">
                            <ProgressBar value={progress} maxValue={10} />
                        </div>
                    </div>

                    <div className='flex flex-col items-center mx-4 basis-1/2 pt-6'>
                        <div className={`${isAnswered ? 'cursor-not-allowed pointer-events-none' : ''}  flex flex-col gap-4 w-full`}>
                            {questions[countQuestions]?.options.map((option, index) => (
                                <div key={index}>
                                    <Option onClick={() => handleAnswer(option)}
                                        correctAnwster={isAnswered && questions[countQuestions].answer === option}
                                        wrongAnswer={isAnswered && questions[countQuestions].answer !== option}
                                        isSelected={option === answerSelected} title={option} position={index} />
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
                </div>)}
        </>
    )
}