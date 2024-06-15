import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { AuthSignUpForm } from '~/entities/auth/ui/signup'

export default function AuthenticateSignUp() {
  if (cookies().get('session')) {
    redirect('/')
  }

  return <AuthSignUpForm />
}
