  "use client";

  import { usePathname } from "next/navigation"
  import Logo from "./Logo";
  import NavbarLinks from "./NavbarLinks";
  import { Bell, BellDot } from "lucide-react";
  import { UserButton } from "@clerk/nextjs";
import { Badge, Button } from "@mui/material";
  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-10 h-10", // Custom width and height
    }
  }

  const Navbar = () => {
    const pathname = usePathname();
    return (
      <div className="px-10 py-6 flex justify-between items-center">
        <div className="flex items-center gap-20">
        <Logo/>
        <NavbarLinks/>
        </div>
        <div className="flex items-center gap-6">
          <Button sx={{
            background:'linear-gradient(#2EAE7D,#134834)',
            py:'0.8rem',
            px:'1.3rem',
            fontSize:'14px',
            fontWeight:'600',
            color:'#fff',
            textTransform:"capitalize"
          }}>Add New Post</Button>
          <Badge color="secondary" variant="dot" >
          <Bell className="w-[18px] h-[25px]" />
</Badge>
          <UserButton
          afterSignOutUrl="/"
          appearance={userButtonAppearance}
          />
        
        </div>
      </div>
    )
  }

  export default Navbar