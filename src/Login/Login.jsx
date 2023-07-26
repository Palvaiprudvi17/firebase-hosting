// import React, { useEffect } from 'react'
// import {useDispatch,useSelector} from 'react-redux'
// import { SettheUserdetails, selectofemail, selectofuser } from './Userslice'
// import {useNavigate} from 'react-router-dom'
// import { auth, googleprovider } from '../Components/Firebase'
// import { signInWithPopup } from 'firebase/auth'
// const Login = () => {
//     const dispatch=useDispatch()
//     const username=useSelector(selectofuser)
//     const phto=useSelector(selectofemail)
//     const navigation=useNavigate()


// useEffect(()=>{
//     auth.onAuthStateChanged(async(user)=>{
//         if(user){
//             SetUser(user)
//             navigation('/home')
//         }
        
//     })
// },[username])



// const Handle=async(e)=>{
//     e.preventDefault()
//     if(!username){
//       const result=  await signInWithPopup(auth,googleprovider)
//       SetUser(result.user)
        
//     }else{
//         auth.signOut()
//         dispatch
//     }
    
// }
// const SetUser=(user)=>{
//     dispatch(
//         SettheUserdetails({
//             name:user.displayName
//         })
//     )
// }
//   return (
//     <div>
        
//     </div>
//   )
// }

// export default Login