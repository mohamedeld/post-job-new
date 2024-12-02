import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { Control, Controller, FieldValues } from "react-hook-form"

type RadioInputProps = {
  control?:any;
}

const RadioInput = ({control}:RadioInputProps) => {
  return (
    <div>
       <FormControl>
      <FormLabel className="text-[14px] font-semibold" id="demo-row-radio-buttons-group-label">Send email notification when there are good candidates</FormLabel>
      <RadioGroup
      
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <Controller
        
            name="notificationPreference"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                {...field}
                value="yes"
                control={<Radio sx={{
                  '&, &.Mui-checked': {
                    color: '#185D43',
                  },
                }}/>}
                label="Yes"
              />
            )}
            rules={{
              required: 'This field is required',
            }}
          />
          <Controller
            name="notificationPreference"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                {...field}
                value="no"
                control={<Radio sx={{
                  '&, &.Mui-checked': {
                    color: '#185D43',
                  },
                }}/>}
                label="No"
              />
            )}
            rules={{
              required: 'This field is required',
            }}
          />
        </RadioGroup>
    </FormControl>
    </div>
  )
}

export default RadioInput