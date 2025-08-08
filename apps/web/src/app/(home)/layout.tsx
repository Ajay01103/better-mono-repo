import { HomeLayout } from "@/components/home-layout"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <HomeLayout>{children}</HomeLayout>
    </div>
  )
}

export default Layout
