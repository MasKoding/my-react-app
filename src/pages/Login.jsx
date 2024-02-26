import Header from "../components/Header"
import Login from "../components/Login"


const LoginPage = () => {
  return (
    <>
    <Header 
    heading="Login to your account"
    paragraph="Don't have account yet?"
    linkName="signup"
    linkUrl="/signup"
    />
    
    <Login/>
    </>
  )
}

export default LoginPage