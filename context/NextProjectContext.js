import { createContext, useEffect, useState } from 'react'
import { collection, getDocs, setDocs, doc, aggregateQuerySnapshotEqual } from 'firebase/firestore'
import { db } from '../firebase'


const NextProjectContext = createContext()

const NextProjectProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])

    //when the page loads load the below.
    useEffect(() => {
        const getUsers = async () => {
            //get users from firebase database.
            const querySnapshot = await getDocs(collection(db, 'users'))
            //console logging the data from docs (basically the users database)
            // querySnapshot.docs.map (doc => console.log(doc.data()))

            //define setUsers and call the data
            setUsers ( querySnapshot.docs.map (doc => {
                //return an object data
                return{
                    id: doc.id,
                    data:{
                        ...doc.data()
                    }
                }
            }))
        }
        //runs when there is user detected or user changes
        getUsers()
        //for the [] below can put users to get dependencies array
    }, [])
    useEffect(() => {
        const getPosts = async () => {
            const querySnapshot = await getDocs(collection(db, 'articles'))

            setPosts(querySnapshot.docs.map (doc => {
                return{
                    id: doc.id,
                    data:{
                        body: doc.data().body,
                        brief: doc.data().brief,
                        category: doc.data().category,
                        postLength: doc.data().postLength,
                        author: doc.data().author,
                        bannerImage: doc.data().bannerImage,
                        postedOn: doc.data().postedOn.toDate(),
                        title: doc.data().title,
                    }
                }
            }))
        }
        getPosts()
    }, [])
    return(
        <NextProjectContext.Provider value={{ posts, users }}>
            {children}
        </NextProjectContext.Provider>
    )
}

export  { NextProjectContext, NextProjectProvider }