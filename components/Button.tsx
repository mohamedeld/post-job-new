
interface IButtonProps{
  className:string;
  text:string;
  type:'submit'|'reset'|'button';
}

const Button = ({className,text,type}:IButtonProps) => {
  return (
    <button className={className} type={type}>{text}</button>
  )
}

export default Button