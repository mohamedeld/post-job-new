import { Checkbox } from "@mui/material"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const CheckBoxInput = () => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox {...label} />
      <div >
        <h3 className="text-[14px] font-semibold text-[#000]">Keep company confientail</h3>
        <p className="color-[#0000005E] text-[12px]">Hide Company name, logo and profile</p>
      </div>
    </div>
  )
}

export default CheckBoxInput