import SignupForm from "@/app/components/forms/signup-form"

export default function SignupPage() {
  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Create Account</h1>
        <p className="text-gray-600 mt-2">Sign up for a new account</p>
      </div>
      <SignupForm />
    </div>
  )
}