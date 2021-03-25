// bucket.js
const initialstate={list:[{'date':'2021-03-24', 'title':'내일 제출'}]};

// Actions

const CREATE="schedule/CREATE";


// Action Creators


export const createSchedule=(data)=>{//액션 생성 함수를 컴포넌트에서 불러오기 위해 export
  return {type:CREATE,data}
}

// Reducer
export default function reducer(state = initialstate, action = {}) {
  switch (action.type) {
  
    case"schedule/CREATE":{
      // const nwe_bucket_list=[...state.list, action.bucket];
      console.log(action.data)
      const xList = state.list

      
      return { ...state, list : [...xList,action.data] };
    }
    default: return state;
  }
}



