export const stopAction = {
    type: "rotate",
    payload: false
  };

// export const yuHi = {
//   type: "bhakk",
//   payload: "Are Bhai Kaisan Ba"
// }

export const yuHi = (params = false, payload) => {
  if(params){
    return {
      type: "hatt",
      payload:  payload  // "Hatt Bhai Samne se"
    }
  }
  else {
    return {
      type: "bhakk",
      payload: payload    //"Are Bhai Kaisan Ba"
    }
}
}