

export const createReducer = (initialState = {}, actionHandlerKeyFuncs = {}) => {
  return (state = initialState, action) => {
    const actionHandler = actionHandlerKeyFuncs[action.type]
    return actionHandler ? actionHandler(state, action) : state
  }
}

const createAction = (type, actionProps) => {
  return {
    type,
    ...actionProps
  }
}
