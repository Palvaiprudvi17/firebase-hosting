import {createSlice} from '@reduxjs/toolkit'
const initialState={
    name:'',
    email:'',
    photo:''
}
const Userslice=createSlice({
    name:"user",
    initialState,
    reducers:{
        SettheUserdetails:(state,action)=>{
            state.name=action.payload 
            state.email=action.payload
            state.photo=action.payload

        },
        SetofSignOut:(state)=>{
            state.name=null;
            state.email=null;
            state.photo=null;



        }
    }
})

export default Userslice.reducer
export const {SetofSignOut,SettheUserdetails} =Userslice.actions

export const selectofuser=(state=>state.user.name)
export const selectofemail=(state=>state.user.email)
export const selectofphoto=(state=>state.user.photo)
