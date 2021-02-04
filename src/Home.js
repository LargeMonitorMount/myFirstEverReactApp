import React, {  useEffect, useState } from 'react'

import CreateAPost from './CreateAPost'
import SimpleCard from './SimpleCard'
import { auth , db } from './Firebase'




function Home() {
  
 
 
  const [user, setUser] = useState(null);
  const [posts, setposts] = useState([])
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //console.log(authUser)
        setUser(authUser)
      }else{
        setUser(null)
      }
    });

    return () => {
      //preform some cleanup
      unsubscribe();
    }

  }, [user]);

  useEffect(() => {
    db.collection('posts')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {

      setposts(snapshot.docs.map(doc =>({
        id:doc.id,
        post: doc.data()})))
    })
  }, []);
 
    return (
        <div  >
          <br />
          {user? <CreateAPost username={user} /> : <h2>Be kell lépni ❗</h2>}
          
          {
            posts.map(({id,post}) =>(
              <SimpleCard  key={id} postId={id} loggedInuser={user} username={post.username} title={post.title} text={post.text} />
            ))
          }
      </div>
    )
  
}



export default Home
