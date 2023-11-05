"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type QuestionSelectProps = {
  question: string;
  name: string;
  options: string[];
};

function QuestionSelect({ question, name, options }: QuestionSelectProps) {
  return (
    <>
      <label htmlFor={name}>{question}</label>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="---------------" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option, idx) => (
            <>
              <SelectItem key={idx} value={option}>
                {option}
              </SelectItem>
            </>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}

export default QuestionSelect;
