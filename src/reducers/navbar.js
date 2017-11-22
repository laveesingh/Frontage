
export function navbarClickBlogMenu(state={ blogMenuOpened:false }, action){
  switch(action.type){
    case 'NAVBAR_CLICK_BLOG_MENU':
      return { blogMenuOpened: action.open }
      break
  }
  return state
}
