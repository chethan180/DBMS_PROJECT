import { COMPL, FETCH,AL , MESSCOMPL ,WCOMPL, AUTH, WUPDT, REVIEW, SOLV, ALLOT, EM} from '../constants/actionTypes';
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

export const isEmp = (formData) => async (dispatch) => {

  try {
    console.log(formData);
      const data  = await api.eM(formData);
      console.log(data);
      dispatch({ type:EM , payload :data});

  }
  catch(error){
      console.log(error.message);
  }
}

export const solvPosts = (formData) => async (dispatch) => {

  try {
    console.log(formData);
      const data  = await api.solv(formData);
      console.log(data);
      dispatch({ type:SOLV, payload :data});

  }
  catch(error){
      console.log(error.message);
  }
}

export const Allot = (formData) => async (dispatch) => {

  try {
    console.log(formData);
      const data  = await api.allot(formData);
      console.log(data);
      console.log(data.data.message );
      if(data.data.message === "full"){
            alert("Room is full");  
        console.log(data)
      }
      else{
        dispatch({ type:ALLOT, payload :data});

      }

  }
  catch(error){
      console.log(error.message);
  }
}

export const applyLeave = (formData) => async (dispatch) => {

  try {
    console.log(formData);
      const data  = await api.aL(formData);
      console.log(data);
      dispatch({ type:AL, payload :data});

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

export const wu = (formData) => async (dispatch) => {

  try {
    console.log(formData);
      const data  = await api.wupdates(formData);
      console.log(data);
      dispatch({ type : WUPDT, payload :data});

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
export const reviews = (formData) => async (dispatch) => {

  try {
    console.log(formData);
      const data  = await api.review(formData);
      console.log(data);
      dispatch({ type : REVIEW, payload :data});

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