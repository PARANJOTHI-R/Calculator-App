document.addEventListener('DOMContentLoaded', () => {
    let inpVal = document.getElementById('numInp');

    inpVal.addEventListener("input", () => {
        inpVal.value = inpVal.value.replace(/[^0-9+\-*/.$]/, "");
    });
    var ans = 0;
    let keyObj = {
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "sev",
        "8": "eig",
        "9": "nine",
        "+": "plus",
        "-": "minus",
        "*": "multi",
        "/": "division",
        ".": "dot",
        "Enter": "equal",
        "=": "equal",
        "Backspace": "del",
        "x": "del",
        "C": "delAll",
        "Delete": "delAll"
    }


    // function handleResize() {
    //     if (window.innerWidth <= 480) {
    //         inpVal.blur();
    //         inpVal.readOnly = true;        // prevent typing
    //         inpVal.disabled = true;
    //     } else {
    //         inpVal.readOnly = false;       // restore normal behavior
    //         inpVal.disabled = false;
    //     }
    // }
    // window.addEventListener('resize', handleResize);
    // window.addEventListener('load', handleResize);


    function handleKeyDown(e) {
        let id = keyObj[e.key];
        if (id) {
            document.getElementById(id).classList.add("active");
        }
        if (e.key === 'Enter') {
            try {
                ans = eval(inpVal.value);
                inpVal.value = ans;
            }
            catch (error) {
                alert(error);
                if (window.innerWidth > 470) {
                    inpVal.focus();
                }
                document.getElementById('equal').classList.remove("active");
            }
        }
        if (e.key === "Delete") {
            inpVal.value = "";
        }
    }

    function handleKeyUp(e) {
        let id = keyObj[e.key];
        if (id) {
            document.getElementById(id).classList.remove("active");
        }
    }

    inpVal.addEventListener("focus", () => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);
    });

    inpVal.addEventListener("blur", () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
    });

    function touchStart(e){
        let id = keyObj[e.key];
        if (id) {
            document.getElementById(id).classList.add("active");
        }
    }
    function touchEnd(e){
        let id = keyObj[e.key];
        if (id) {
            document.getElementById(id).classList.remove("active");
        }
    }
    document.addEventListener('touchstart',touchStart);
    document.addEventListener("touchend",touchEnd);

    document.addEventListener('click', (e) => {
        const target = e.target;
        if (target.textContent === '=') {
            try {
                ans = eval(inpVal.value);
                inpVal.value = ans;
                if (window.innerWidth > 470) {
                    inpVal.focus();
                }

            } catch (error) {
                alert(error);
                if (window.innerWidth > 470) {
                    inpVal.focus();
                }
            }

        }
        if (target.textContent === 'C') {
            inpVal.value = "";
            if (window.innerWidth > 470) {
                inpVal.focus();
            }
        }
        if (/^[0-9+-\-*/.]$/.test(target.textContent)) {
            inpVal.value += target.textContent;
            if (window.innerWidth > 470) {
                inpVal.focus();
            }
        }
        if (target.textContent === 'x') {
            inpVal.value = inpVal.value.slice(0, -1);
            if (window.innerWidth > 470) {
                inpVal.focus();
            }
        }
    })

});