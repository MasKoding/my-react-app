

const FormExtra = () => {
  return (
    <div className="flex items-center justify-between">
        <div className="flex items-center">
            <input type="checkbox" name="remember-me" id="remember-me" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me</label>
        </div>

        <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password
                </a>
        </div>
    </div>
  )
}

export default FormExtra