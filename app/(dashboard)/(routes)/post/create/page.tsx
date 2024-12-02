import CheckBoxInput from "@/components/inputs/CheckBoxInput"
import RadioInput from "@/components/inputs/RadioInput"
import QuestionType from "@/components/QuestionType"
import SteppersPost from "@/components/SteppersPost"


const CreatePostPage = () => {
  
  return (
    <div className="py-2 px-8">
      <h1 className="py-8 text-center text-[25px] font-bold">Post Job Now</h1>

      {/* steps */}
      <div className="bg-[#F8F8FD99] p-14 border-[1px] border-[#D6DDEB] border-solid">
        <SteppersPost>
        
      <QuestionType name="Try it for free"/>
      <h1 className="text-2xl text-[#185D43] font-bold mt-6 mb-5">Job Option</h1>
      <div className="flex items-center justify-between flex-wrap">
        <CheckBoxInput/>  
        <RadioInput/>
      </div>
        </SteppersPost>
        </div>
    </div>
  )
}

export default CreatePostPage