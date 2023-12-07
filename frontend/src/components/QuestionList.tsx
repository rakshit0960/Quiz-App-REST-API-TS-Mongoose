import React from "react"
import { OptionsInput } from "./OptionsInput";

interface Option {
    value: string;
}

interface Question {
    questionNumber: number;
    questionName: string;
    options: Option[];
    answer: number
}

interface QuestionListProp {
    questions: Question[]
    handleQuestionChange: any
    handleOptionChange: any
    handleAddOption: any
}
export const QuestionList: React.FC<QuestionListProp> = (props) => {
    return (
        <>
            {props.questions.map((question) => (
                <div key={question.questionNumber} className="mb-4 ">
                    <label className="block text-sm font-medium text-gray-600 mb-2">{`Question ${question.questionNumber}`}</label>
                    <input
                        type="text"
                        className="mt-1 p-2 border rounded w-full mb-4"
                        placeholder='Question Name'
                        value={question.questionName}
                        onChange={(e) => props.handleQuestionChange(question.questionNumber, 'questionName', e.target.value)}
                        required
                    />
                    <div className="mt-2 pl-10">
                        <div>Options</div>
                        <OptionsInput question={question} handleOptionChange={props.handleOptionChange} />
                        <button
                            type="button"
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                            onClick={() => props.handleAddOption(question.questionNumber)}
                        >
                            Add Option
                        </button>
                    </div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Correct Option</label>
                    <select
                        className="mt-1 p-2 border rounded w-full"
                        value={question.answer}
                        onChange={(e) => props.handleQuestionChange(question.questionNumber, 'answer', e.target.value)}
                        placeholder={`Correct Option`}
                        required
                    >
                        {question.options.map((_, index) =>
                            <option value={index + 1}>{index + 1}</option>
                        )}
                    </select>
                </div>
            ))}
        </>
    )
}
