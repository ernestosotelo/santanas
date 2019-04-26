import $ from "jquery"
window.jQuery = $
window.$ = $

const ToggleMobileNav = element => {
  element.click(() => {
    $("#navMobile").toggleClass("nav-mobile--toggle")
    $(".nav__bar__icon").toggleClass("hide")
  })
}

export default ToggleMobileNav
