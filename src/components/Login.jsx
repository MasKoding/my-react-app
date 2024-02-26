import { useState } from "react"
import { loginFields } from "../constant/FormField"
import Input from "./Input"
import FormExtra from "./FormExtra"
import FormAction from "./FormAction"


// get object from login field and save to fields variable
const fields = loginFields
let fieldState = {}
// looping and set value to fieldState
fields.forEach(field => fieldState[field.id]='')



const Login = () => {

    const [loginForm, setLoginForm] = useState(fieldState)

    const handleChange = (e)=>{
        setLoginForm({...loginForm,[e.target.id]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        authenticateUser()
    }

    const authenticateUser = ()=>{

    }


  return (
    <>
        <form className="mt-8 space-y-6">
            <div className="-space-y-px">
                {
                    fields.map(field=>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={loginForm[field.id]}
                                labelText={field.labelText}
                                labelFor={field.labelFor}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                isRequired={field.isRequired}
                                placeholder={field.placeholder}
                            />
                        )
                }
            </div>
            <FormExtra/>
            <FormAction
                handleSubmit={handleSubmit}
                text="Sign In"
            />
        </form>
    </>
  )
}

export default Login
