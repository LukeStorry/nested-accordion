export default '<script id="nestedAccordionClickHandlersScript">\n' +
  `var headers = document.getElementsByClassName("header");
for (let i = 0; i < headers.length; i++) {
if (headers[i].classList.contains('disabled')) continue;
headers[i].addEventListener("click", function() {
this.classList.toggle("active");
this.nextElementSibling.classList.toggle("active");
});
headers[i].addEventListener('keydown', function(event) {
if (event.code === 'Space' || event.code === 'Enter') {
headers[i].click();
}
});
}`.replace(/\n/g, '') +
  '\n</script>';
