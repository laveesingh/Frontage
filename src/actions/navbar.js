
export function navbarOpenBlogMenu(){
  return {
    type: 'NAVBAR_CLICK_BLOG_MENU',
    open: true
  }
}

export function navbarCloseBlogMenu(){
  return {
    type: 'NAVBAR_CLICK_BLOG_MENU',
    open: false
  }
}

export function navbarOpenToolsMenu(){
  return {
    type: 'NAVBAR_CLICK_TOOLS_MENU',
    open: true
  }
}

export function navbarCloseToolsMenu(){
  return {
    type: 'NAVBAR_CLICK_TOOLS_MENU',
    open: false
  }
}
