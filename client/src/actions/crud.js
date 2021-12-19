import { COMPL, FETCH} from '../constants/actionTypes';
import * as api from '../api';

export const getPosts = (formData) => async (dispatch) => {

    try {
      console.log(formData);
        const data  = await api.fetchPosts(formData);
        console.log(data);
        dispatch({ type:FETCH , payload :data});

    }
    catch(error){
        console.log(error.message);
    }
}

export const comp = (formData) => async (dispatch) => {

  try {
    console.log(formData);
      const data  = await api.complaint(formData);
      console.log(data);
      dispatch({ type : COMPL, payload :data});

  }
  catch(error){
      console.log(error.message);
  }
}


  // export const signin = (formData, router) => async (dispatch) => {
  //   try {
  //     console.log(formData);
  //     const data = await api.signIn(formData);
  //     console.log(data);
  //     dispatch({ type: AUTH,payload: data.data});
  //     if(data.data.result.Type === "HOD"){
  //       router.push('/hod');
  //     }
  //     else if(data.data.result.Type === "FAC")
  //     {
  //       router.push('/fac');
  //     }
  //     else{
  //       router.push('/hr');
  //     }
  //   } catch (error) {
  //     // alert("invalid!  ");  
  //     console.log(error.message);
  //   }
  // };