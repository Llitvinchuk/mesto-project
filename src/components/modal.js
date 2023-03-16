function keyHandler(evt) {
  if (evt.key === "Enter") {
    closePopup(document.querySelector(".popup_opened"));
  }
}
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", keyHandler);
}
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", keyHandler);
}
