import * as apis from '../services/example'

export default {
  namespace: 'indexTest',//命名空间
  state:{
    name:'lcj',
    cnodeData:[]
  },
  reducers:{
    // state 
    // payload:组件传参
    setName(state,payload){
      let state_ = JSON.parse(JSON.stringify(state));
      state_.name = payload.data.name;
      return state_;
    },
    setCnodeDataList(state,payload){
      let state_ = JSON.parse(JSON.stringify(state));
      state_.cnodeData = payload.data;
      return state_;
    }
  },
  effects:{
    *setNameAsync(payload,{put,call}){
      // put 发一个action 调用reducers内方法
      yield put({
          type:'setName',
          data:{
            name:'小白'
          }
      })
    },
    *testCnode(payload,{put,call}){
     let rel = yield call(apis.testCnode);
     if(rel.data){
       yield put({
         type:'setCnodeDataList',
         data:rel.data.data
       })
     }
    }
  }
  
}