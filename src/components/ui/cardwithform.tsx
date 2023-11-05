import * as React from "react"
import { questions } from "@/lib/questions"
import QuestionSelect from "../FormElements/QuestionSelect"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function CardWithForm() {
  return (
    <Card className="w-[850px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex justify-center items-center">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              {questions.map((question)=>(
                <>
                <QuestionSelect key={question.question} question={question.question} options={question.options}/>
                </>
              )

              )}
            
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
