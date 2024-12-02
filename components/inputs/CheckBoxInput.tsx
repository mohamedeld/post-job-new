import { Checkbox } from "@mui/material"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

type CheckBoxInputProps = {
  register:UseFormRegister<FieldValues>;
  errors:FieldErrors;
}

const CheckBoxInput = ({register,errors}:CheckBoxInputProps) => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox {...register("keepCompanyConfidential")} {...label} color="success"/>
      <div>
        <h3 className="text-[14px] font-semibold text-[#000]">Keep company confientail</h3>
        <p className="color-[#0000005E] text-[12px]">Hide Company name, logo and profile</p>
      </div>
    </div>
  )
}

export default CheckBoxInput