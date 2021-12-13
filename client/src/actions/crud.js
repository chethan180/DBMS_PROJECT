import { COMPL, FETCH , MESSCOMPL ,WCOMPL,AUTH} from '../constants/actionTypes';
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

export const messcomp = (formData) => async (dispatch) => {

  try {
    console.log(formData);
      const data  = await api.messremarks(formData);
      console.log(data);
      dispatch({ type : MESSCOMPL, payload :data});

  }
  catch(error){
      console.log(error.message);
  }
}

export const wcomp = (formData) => async (dispatch) => {

  try {
    console.log(formData);
      const data  = await api.wcomplaints(formData);
      console.log(data);
      dispatch({ type : WCOMPL, payload :data});

  }
  catch(error){
      console.log(error.message);
  }
}


  export const signin = (formData, router) => async (dispatch) => {
    try {
      console.log(formData);
      const data = await api.signIn(formData);
      console.log(data);
      dispatch({ type: AUTH,payload: data.data});
      if(data.data.result.Type === "ADMIN"){
        router.push('/admin');
      }
      else if(data.data.result.Type === "STUDENT")
      {
        router.push('/student');
      }
      else{
        router.push('/admin1');
      }
    } catch (error) {
      // alert("invalid!  ");  
      console.log(error.message);
    }
  };

  export const signup = (formData, router) => async (dispatch) => {
    try {
      console.log(formData);
      const data = await api.signUp(formData);
      console.log(data);
      dispatch({ type: AUTH,payload: data.data});
      if(data.data.result.Type === "ADMIN"){
        router.push('/admin');
      }
      else if(data.data.result.Type === "STUDENT")
      {
        router.push('/student');
      }
      else{
        router.push('/admin1');
      }
    } catch (error) {
      // alert("invalid!  ");  
      console.log(error.message);
    }
  };