import $ from "jquery"
window.jQuery = $
window.$ = $
import moment from "moment"

const OpenOrClosed = () => {
  const hour = moment().get("hour")
  const element = $(".about__info__open-close")
  const isOpen = hour >= 10 && hour < 16
  const closingSoon = hour >= 16 && hour < 17
  const isClosed = hour >= 17 || hour < 10

  if (isOpen) {
    element.text("OPEN").css({ color: "#a6ef4f" })
  } else if (isClosed) {
    element.text("CLOSED").css({ color: "#ff4f43" })
  } else if (closingSoon) {
    element.text("CLOSING SOON").css({ color: "#efbb4f" })
  }
}

export default OpenOrClosed
