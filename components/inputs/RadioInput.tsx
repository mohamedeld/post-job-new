import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"

const RadioInput = () => {
  return (
    <div>
       <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
    </FormControl>
    </div>
  )
}

export default RadioInput