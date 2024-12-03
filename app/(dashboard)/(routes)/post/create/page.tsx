"use client";
import CheckBoxInput from "@/components/inputs/CheckBoxInput"
import RadioInput from "@/components/inputs/RadioInput"
import QuestionType from "@/components/QuestionType"
import SteppersPost from "@/components/SteppersPost"
import { Link, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

export type QuestionProps = {
  id:number;
  question:string;
  audioUrl:string | null;
}

const CreatePostPage = () => {
  const [email, setEmail] = useState('imetsacademy@gmail.com');
  const [isEditing, setIsEditing] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [questions, setQuestions] = useState<Array<QuestionProps>>([
    { id: 1, question: '',audioUrl:'' },
    { id: 2, question: '',audioUrl:'' },
    { id: 3, question: '',audioUrl:'' },
    { id: 4, question: '',audioUrl:'' },
    { id: 5, question: '',audioUrl:'' },
    { id: 6, question: '',audioUrl:'' }
  ])
  const {register,control,handleSubmit,formState:{isSubmitting,errors}} = useForm()

  const handleEditClick = () => {
    setIsEditing(true);
    setNewEmail(email); // Set input value to current email
  };

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNewEmail(event.target.value);
  };

  const handleInputQuestionChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setQuestions(prevQuestions =>
      prevQuestions.map((question, i) => 
        i === index ? { ...question, question: event.target.value } : question
      )
    )
  }
  const handleKeyPress = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setEmail(newEmail);
      setIsEditing(false);
    }
  };

  const handleDelete = (index: number) => {
    setQuestions(questions.filter((_, idx) => idx !== index));
  };

  const handleSaveQuestion = (savedQuestion: QuestionProps) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(question => 
        question.id === savedQuestion.id ? savedQuestion : question
      )
    );
  };
  const onSubmit = (data:any)=>{
    console.log({
      email: isEditing ? newEmail : email,
      questions,
      notificationPreference: data?.notificationPreference,
      keepCompanyConfidential: data?.keepCompanyConfidential
    })
  }
  return (
    <div className="py-2 px-8">
      <h1 className="py-8 text-center text-[25px] font-bold">Post Job Now</h1>

      {/* steps */}
      <div className="bg-[#F8F8FD99] p-14 border-[1px] border-[#D6DDEB] border-solid">
        <SteppersPost onSubmit={onSubmit} handleSubmit={handleSubmit}>
          {
            questions?.map((question,index)=>{
              return (
                <QuestionType name={`quesiton-${index}`} onDelete={() => handleDelete(index)} register={register} key={index} errors={errors}
                question={question}
                // onEdit={(event:React.ChangeEvent<HTMLInputElement>) => handleInputQuestionChange(event, index)}
                onSave={(newQuestion:QuestionProps) => handleSaveQuestion(newQuestion)}
                />

              )
            })
          }
      <h1 className="text-2xl text-[#185D43] font-bold mt-6 mb-5">Job Option</h1>
      <div className="flex items-start justify-between flex-wrap">
        <CheckBoxInput register={register} errors={errors}/>  
        <div>
          <RadioInput control={control}/>
          <h6 className="text-[#185D43] text-2xl mb-2 font-semibold">Recipient Email</h6>
      {isEditing ? (
        <TextField
          value={newEmail}
          type="email"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          variant="outlined"
          autoFocus
          className="text-blue-800 text-[14px]"
        />
      ) : (
        <Typography variant="body1">
          {email} <Link component="button" className="text-[14px] text-[#185D43]" onClick={handleEditClick}>change email address</Link>
        </Typography>
      )}
        </div>
      </div>
        </SteppersPost>
        </div>
    </div>
  )
}

export default CreatePostPage