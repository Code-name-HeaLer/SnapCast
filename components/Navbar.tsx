'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { authClient } from '@/lib/auth-client'

const Navbar = () => {
  const router = useRouter()
  const { data: session } = authClient.useSession()

  const handleLogout = async () => {
    try {
      await authClient.signOut()
      router.push('/sign-in')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <header className='navbar'>
      <nav>
        <Link href="/">
        <Image src="/assets/icons/logo.svg" alt='Logo' width={32} height={32}/>
        <h1>SnapCast</h1>
        </Link>

        {session && (
          <figure>
              <button onClick={() => router.push(`/profile/${session.user.id}`)}>
                  <Image 
                    src={session.user.image || "/assets/images/dummy.jpg"} 
                    alt='User' 
                    width={36} 
                    height={36} 
                    className='rounded-full aspect-square'
                  />
              </button>
              <button onClick={handleLogout} className='cursor-pointer'>
                  <Image src="/assets/icons/logout.svg" alt='logout' width={24} height={24} className='rotate-180'/>
              </button>
          </figure>
        )}

      </nav>
    </header>
  )
}

export default Navbar