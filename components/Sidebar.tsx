import SidebarRoutes from "./SidebarRoutes"

const Sidebar = () => {
  return (
    <div className='h-full border-r flex flex-col overflow-y-auto bg-[#F7F7FD] shadow-sm pt-5'>
      
      <div className="flex flex-col w-full">
        <SidebarRoutes/>
      </div>
    </div>
  )
}

export default Sidebar