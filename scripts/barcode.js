on_scanner() // init function

function on_scanner() {
    let is_event = false; // for check just one event declaration
    let input = document.getElementById("barcode"); // input
    input.addEventListener("focus", function () {
        if (!is_event) {
            is_event = true;
            input.addEventListener("keypress", function (e) {
                if (e.keyCode == 13) {
                    scanner(input.value); // use value as you need
                    input.select();
                }
            }
            )
        }
    });
    document.addEventListener("keypress", function (e) {
        if (e.target.tagName !== "INPUT") {
            input.focus();
        }
    });
}

function scanner(value) {
    if (value == '') return;
    console.log(value)
}