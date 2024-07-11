import { changePremium, changeUsername, getSession } from '@/actions'
import { redirect } from 'next/navigation'

const ProfilePage = async () => {
  const session = await getSession()

  if (!session.isLoggedIn) {
    redirect('/')
  }

  return (
    <div className="profile">
      <h1>Profile Page</h1>
      <p>
        Welcome, <b>{sessionStorage.username}</b>
      </p>
      <span>
        You are a <b>{sessionStorage.isPro ? 'Premium' : 'Free'}</b> user
      </span>
      <form action={changePremium}>
        <button>{session.isPro ? 'Cancel' : 'Buy'} Premium</button>
      </form>

      <form action={changeUsername}>
        <input type="text" name="username" required placeholder={sessionStorage.username} />
        <button>Update</button>
      </form>
    </div>
  )
}

export default ProfilePage
