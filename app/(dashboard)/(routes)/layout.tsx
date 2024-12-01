import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

interface IProps{
  children:React.ReactNode
}

const DashboardLayout = ({children}:IProps) => {
  return (
    <div className="h-full">
      <Navbar/>
      <div className="hidden md:flex w-[17rem] flex-col fixed top-[85px] bottom-0 z-50">
        <Sidebar/>
      </div>
      <main className="md:pl-[17rem] h-full">
      {children}
      </main>
    </div>
  )
}

export default DashboardLayout