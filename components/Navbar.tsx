  "use client";

  import { usePathname } from "next/navigation"
  import Logo from "./Logo";
  import NavbarLinks from "./NavbarLinks";
  import Button from "./Button";
  import { BellDot } from "lucide-react";
  import { UserButton } from "@clerk/nextjs";

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
          <Button className="outline-none border-none p-2 text-xl font-semibold text-white bg-[#185D43]" text={"Add New Post"} type="button"/>
          <BellDot className="w-[18px] h-[25px] text-[#25324B]" />
          <UserButton
          afterSignOutUrl="/"
          appearance={userButtonAppearance}
          />
        
        </div>
      </div>
    )
  }

  export default Navbar