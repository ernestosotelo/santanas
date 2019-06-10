import $ from "jquery"
window.jQuery = $
window.$ = $
import waypoints from "waypoints/lib/jquery.waypoints"
import "jquery-visible"

export default class ScrollEvents {
  constructor() {
    this.revealItems()
    this.revealNavSublink()
    this.fixToBottom()
    this.navLinkIndicator()
  }

  revealItems() {
    const offset = "90%"
    const itemsToReveal = $(".menu__card")
    itemsToReveal.each(function() {
      let currentItem = this
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--visible")
        },
        offset: offset
      })
    })
  }

  fixToBottom() {
    $(window).scroll(function() {
      const itemToFix = $(".about__info__btn")
      $(itemToFix).addClass("fix-to-bottom")
    })
  }

  revealNavSublink() {
    $(window).scroll(function() {
      const navSublink = $(".nav__sublink")
      const about = $("#about").visible(true, false, "both")
      const contact = $("#contact").visible(true, false, "both")
      const social = $(".social").visible(true, false, "both")
      const form = $("form").visible(true, false, "both")
      const attentionGrabber = $(".about__attention-grabber").visible(
        true,
        false,
        "both"
      )
      if (about || form || social || attentionGrabber || contact) {
        navSublink.css({ display: "none" })
      } else {
        navSublink.css({ display: "flex" })
      }
    })
  }

  navLinkIndicator() {
    const navBlock = $(".navBlock")
    navBlock.each(function() {
      let currentItem = this
      $(window).scroll(function() {
        new Waypoint({
          element: currentItem,
          handler: function() {
            const id = this.element.id
            $(`a[href="#${id}"]`).addClass("nav__link-indicator--active")
            $(`a[href!="#${id}"]`).removeClass("nav__link-indicator--active")
          },
          offset: 1
        })
      })
    })
  }
}
