interface Option {
  value: string;
}

interface Question {
  questionNumber: number;
  questionName: string;
  options: Option[];
  answer: number
}

interface OptionsInputProp {
  question: Question
  handleOptionChange: any
}

export const OptionsInput:React.FC<OptionsInputProp> = (props) => {
  return (
    <>
      {props.question.options.map((option, index) => (
            <input
            key={index}
            type="text"
            className="mt-1 p-2 border rounded w-full"
            value={option.value}
            onChange={(e) => props.handleOptionChange(props.question.questionNumber, index, e.target.value)}
            placeholder={`Option ${index + 1}`}
            required
            />
    ))}
    </>
  )
}
