import Nav from "../elements/nav"

type LayoutProps = {
    children: React.ReactElement
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
        <Nav />
        {children}
    </>
  )
}

export default Layout