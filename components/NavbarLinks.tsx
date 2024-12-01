"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";


const navLinks = [
  {
    link:'/',
    label:'Dashboard'
  },
  {
    link:'/myjobs',
    label:'My Jobs'
  },
  {
    link:'/cv/search',
    label:'CV Search'
  },
  {
    link:'/report',
    label:'Report'
  },
  {
    link:'/billing',
    label:'Billing'
  }

]

const NavbarLinks = () => {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-5">
      {
        navLinks?.map((item)=>{
          const isActive = pathname?.includes(item?.link);
          return (
            <li key={item?.label} className={`${isActive ? 'text-[#185D43]' : 'text-[#000]'} font-semibold text-[14px]`}>
              <Link href={item?.link}>{item?.label}</Link>
            </li>

          )
        })
      }
    </ul>
  )
}

export default NavbarLinks