import QuestionSelect from "@/components/FormElements/QuestionSelect";

export default function Home() {
  return (
    <div>
      <QuestionSelect question="How blind are you" name="question1"/>
      <QuestionSelect question="What colorblindness do you have" name="question2"/>
      <QuestionSelect question="questions" name="question3"/>
    </div>
  );
}
