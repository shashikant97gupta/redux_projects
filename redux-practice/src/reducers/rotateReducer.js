export default (state, action) => {
    switch (action.type) {
      case "rotate":
        return {
            ...state,
          rotating: action.payload
        };
        case "bhakk":
        return {
            ...state,
          heading: action.payload
        };
        case "hatt":
        return {
            ...state,
          heading: action.payload
        };
      default:
        return state;
    }
  };