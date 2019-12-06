
export default {

  namespace: 'indexTest',//命名空间

  state:{
    name:'lcj'
  },

  reducers:{
    // state 
    // payload:组件传参
    setName(state,payload){
      let state_ = JSON.parse(JSON.stringify(state));
      state_.name = payload.data.name;
      return state_;
    }
  }
}