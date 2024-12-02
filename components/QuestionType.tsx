"use client";
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, TextField } from "@mui/material"
import { Mic, MicIcon, Plus, SquarePen, Trash2, Type, TypeOutline } from "lucide-react"
import LogoText from "./LogoText";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { QuestionProps } from "@/app/(dashboard)/(routes)/post/create/page";
import { useEffect, useRef, useState } from "react";

type QuestionTypeProps = {
  name:string;
  register:UseFormRegister<FieldValues>;
  errors:FieldErrors;
  onSave: (question: QuestionProps) => void;
  // onEdit:(id:number)=>void;
  onDelete:()=>void;
  question: QuestionProps;
}

const QuestionType = ({name,onDelete,onSave,question}:QuestionTypeProps) => {
  const [inputValue, setInputValue] = useState<string>(question.question);
  const accordionRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);



  useEffect(() => {
    setInputValue(question.question); // Update input when question prop changes
  }, [question]);

  const handleSave = () => {
    onSave({ ...question, question: inputValue });
    setInputValue(''); // Clear input after saving
    setExpanded(false);
  };

  const toggleExpanded = ()=>{
    setExpanded(prev => !prev);
  }

  return (
    <div className="my-1">
            <Accordion expanded={expanded} onClick={toggleExpanded}>
        <AccordionSummary sx={{
          backgroundColor:'#D6DDEB2E',
          py:'9px',
          px:"25px"
        }}
          expandIcon={
            expanded ? (
              <div className="flex items-center gap-2">
                
                <div className="border-[1px] border-[#D6DDEB] border-solid p-2">
                <Trash2 strokeWidth={2} className="text-[14px] text-red-500 rotate-180" onClick={onDelete} />
                </div>
                <div className="border-[1px] border-[#D6DDEB] border-solid p-2">
                <SquarePen strokeWidth={2} className="text-[14px] text-[#2EAE7D] rotate-180"/>
                </div>
              </div>
            ) : (
              <div className="border-[1px] border-[#D6DDEB] border-solid p-2">
            <Plus fontSize={"4rem"} color="#2EAE7D" />
            </div>
            ) 
          }
          aria-controls="panel3-content"
          id="panel3-header"
        >
<Box sx={{ display: 'flex', alignItems: 'center',gap:'1rem' }}>
    <LogoText parentClassName="bg-[#2EAE7D]" Icon={Type} className="text-[0.5rem] text-white " />
    
    What makes you the ideal candidate for this position
  </Box>        </AccordionSummary>
          <div className="bg-[#D6DDEB2E] border-[1px] border-[#D6DDEB] border-solid px-3 py-2">
        <AccordionDetails>
            <header className="flex justify-between items-center flex-wrap">
            <h2 className="text-[14px] text-[#000] font-semibold">Question Type : <span className="uppercase">{name}</span></h2>
            <div className="flex items-center gap-2">
            <LogoText parentClassName="bg-[#2EAE7D]" Icon={Type} className="text-[0.5rem] text-white " />
            <Mic strokeWidth={2} className="text-[#2EAE7D]"/>
            </div>
            </header>
            <TextField
  placeholder="MultiLine with rows: 2 and rowsMax: 4"
  multiline
  rows={2}
  value={inputValue}
  onChange={e => setInputValue(e.target.value)}
  className="w-full bg-gray-100 mt-4"
/>
        </AccordionDetails>
        <AccordionActions>
          <Button onClick={()=> setExpanded(false)}>Cancel</Button>
          <Button onClick={handleSave}>Agree</Button>
        </AccordionActions>
          </div>
      </Accordion>
    </div>
  )
}

export default QuestionType