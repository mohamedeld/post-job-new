
type StepperContextProps = {
  title:string;
  subTitle:string;
}

const StepperContent = ({title,subTitle}:StepperContextProps) => {
  return (
    <>
      <header className="mb-4">
        <h2 className="text-[14px] font-semibold text-[#000]">{title}</h2>
        <p className="text-[#000000A3] text-[12px]">{subTitle}</p>
      </header>
    </>
  )
}

export default StepperContent; 