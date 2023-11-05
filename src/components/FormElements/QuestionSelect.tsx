
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type QuestionSelectProps = {
  question: string,
  name: string
}
  
  
function QuestionSelect({question, name}:QuestionSelectProps) {
  return (
    <>
        <label htmlFor={name}>{question}</label>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Blindness" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mild">Mild</SelectItem>
            <SelectItem value="Normal">Normal</SelectItem>
            <SelectItem value="Legally Blind">Legally Blind</SelectItem>
          </SelectContent>
        </Select>
    </>
  )
}

export default QuestionSelect