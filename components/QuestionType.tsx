import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, TextField } from "@mui/material"
import { Mic, MicIcon, Plus, Type, TypeOutline } from "lucide-react"
import LogoText from "./LogoText";

type QuestionTypeProps = {
  name:string;
}

const QuestionType = ({name}:QuestionTypeProps) => {
  return (
    <div>
            <Accordion defaultExpanded>
        <AccordionSummary sx={{
          backgroundColor:'#D6DDEB2E',
          py:'9px',
          px:"25px"
        }}
          expandIcon={<div className="border-[1px] border-[#D6DDEB] border-solid p-2">
            <Plus fontSize={"4rem"} color="#2EAE7D" />
          </div>}
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
  maxRows={4}
  className="w-full bg-gray-100 mt-4"
/>
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
          </div>
      </Accordion>
    </div>
  )
}

export default QuestionType