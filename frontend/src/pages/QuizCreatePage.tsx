import { useState } from 'react';
import { QuestionList } from '../components/QuestionList';

interface Option {
  value: string;
}

interface Question {
  questionNumber: number;
  questionName: string;
  options: Option[];
  answer: number
}

const CreateQuizPage: React.FC = () => {
  const [quizName, setQuizName] = useState<string>('');
  const [category, setCategory] = useState<string>('test');
  const [passPercent, setPassPercent] = useState<number>(40);
  const [questions, setQuestions] = useState<Question[]>([
    { questionNumber: 1, questionName: '', options: [{ value: '' }], answer: 1},
  ]);

  const handleAddQuestion = (): void => {
    const newQuestionNumber = questions.length + 1;
    setQuestions([
      ...questions,
      { questionNumber: newQuestionNumber, questionName: '', options: [{ value: '' }], answer: 1 },
    ]);
  };

  const handleQuestionChange = (questionNumber: number, field: string, value: string): void => {
    const updatedQuestions = questions.map((question) => {
      if (question.questionNumber === questionNumber) {
        return { ...question, [field]: value };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionNumber: number, optionIndex: number, value: string): void => {
    const updatedQuestions = questions.map((question) => {
      if (question.questionNumber === questionNumber) {
        const updatedOptions = [...question.options];
        updatedOptions[optionIndex] = { value };
        return { ...question, options: updatedOptions };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  const handleAddOption =  (questionNumber: number): void => {
    const updatedQuestions = questions.map((question) => {
        if (question.questionNumber === questionNumber) {
          const updatedOptions = [...question.options, { value: '' }];
          return { ...question, options: updatedOptions };
        }
        return question;
      });
      setQuestions(updatedQuestions);
  }

  const handleSubmit = (): void => {
    console.log({ quizName, category, questions });
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
       <h1 className="text-3xl font-semibold mb-6 text-center">Create Quiz</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">Quiz Name</label>
         <input
            type="text"
            className="mt-1 p-2 border rounded w-full"
            value={quizName}
            onChange={(e) => setQuizName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">Category</label>
          <select
            className="mt-1 p-2 border rounded w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="test">Test</option>
            <option value="exam">Exam</option>
          </select>
        </div>
        <label className="block text-sm font-medium text-gray-600 mb-2">Passing Percentage</label>
          <input
            type="number"
            className="mt-1 p-2 border rounded w-full"
            value={passPercent}
            min={0}
            max={100}
            onChange={(e) => setPassPercent(parseFloat(e.target.value))}
            required
          />
        <div className='divide-y-2 divide-black'>
          <QuestionList 
            questions={questions}
            handleAddOption={handleAddOption}
            handleOptionChange={handleOptionChange}
            handleQuestionChange={handleQuestionChange}
          />
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddQuestion}
        >
          Add Question
        </button>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4 block">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateQuizPage;
