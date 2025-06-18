import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const page = async ({params}: ParamsWithSearch) => {
    const {id} = await params;
    
    // Get the current user session
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    // If no session, redirect to sign-in
    if (!session) {
      redirect('/sign-in');
    }

    // If the profile ID doesn't match the current user's ID, redirect to their own profile
    if (session.user.id !== id) {
      redirect(`/profile/${session.user.id}`);
    }

    const userEmail = session.user.email || 'No email available';
    const userName = session.user.name || session.user.email?.split('@')[0] || 'User';
    const userImage = session.user.image || '/assets/images/dummy.jpg';

  return (
    <div className="wrapper page">
        <Header 
          subheader={userEmail} 
          title={userName} 
          userImg={userImage}
        />
        <section className="video-grid">
        {dummyCards.map((card)=>(
        <VideoCard key={card.id} {...card}/>
      ))}
        </section>
    </div>
  )
}

export default page
