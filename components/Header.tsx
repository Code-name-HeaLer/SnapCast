import { headers } from 'next/headers'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface SharedHeaderProps {
  subheader: string;
  title: string;
  userImg?: string;
}

const Header = ({subheader, title, userImg}: SharedHeaderProps) => {
  return (
    <header className='header'>
        <section className='header-container'>
            <div className="details">
                {userImg && (
                    <Image src={userImg || '/assets/images/dummy.jpg'} alt="user" width={66} height={66} className="rounded-full"/>
                )}

                <article>
                    <p>{subheader}</p>
                    <h1>{title}</h1>
                </article>
            </div>

            <aside>
                <Link href="/upload">
                <Image src="/assets/icons/upload.svg" alt='upload' width={16} height={16}/>
                <span>Upload a Video</span>
                </Link>
            </aside>
        </section>
    </header>
  )
}

export default Header
