import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { MainSection } from "./sidebar-main-section"

export const HomeSidebar = () => {
  return (
    <Sidebar
      className="pt-16 z-40 border-none"
      collapsible="icon"
    >
      <SidebarContent className="bg-background">
        <MainSection />
        <Separator />
      </SidebarContent>
    </Sidebar>
  )
}
