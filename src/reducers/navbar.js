
export function navbarClickBlogMenu(state={ blogMenuOpened:false }, action){
  switch(action.type){
    case 'NAVBAR_CLICK_BLOG_MENU':
      return { blogMenuOpened: action.open }
      break
  }
  return state
}

export function navbarClickToolsMenu(state={ toolsMenuOpened: false}, action){
  switch(action.type){
    case 'NAVBAR_CLICK_TOOLS_MENU':
      return { toolsMenuOpened: action.open }
      break
  }
  return state
}
