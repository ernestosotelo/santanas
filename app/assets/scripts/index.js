import $ from "jquery"
window.jQuery = $
window.$ = $
import ToggleMobileNav from "./src/ToggleMobileNav"
import ScrollEvents from "./src/ScrollEvents"
import OpenOrClosed from "./src/OpenOrClosed"

OpenOrClosed()

// Modifies navigation icon and menu based on clicking the icon
ToggleMobileNav($(".nav__bar__icon"))

// Modifies navigation icon and menu when user clicks on navigation menu link
ToggleMobileNav($(".nav__link__mobile"))
new ScrollEvents()
