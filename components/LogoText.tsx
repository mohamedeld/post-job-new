import { LucideIcon } from "lucide-react"

type LogoTextProps = {
  Icon:LucideIcon;
  className:string;
  parentClassName?:string;
}

const LogoText = ({Icon,parentClassName,className}:LogoTextProps) => {
  return (
    <div className={parentClassName}>
      
    <Icon className={className} strokeWidth={2}  />
    </div>
  )
}

export default LogoText