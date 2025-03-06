// const text1 = "Unique Physiotherapy Center";
// const text2 = "Our Services";
// const heading1 = document.getElementById("animated-heading");
// const heading2 = document.getElementById("animated-services");

// function animateText(element, text, speed, waitTime) {
//     let index = 0;
//     let deleting = false;

//     function animate() {
//         if (!deleting) {
//             if (index < text.length) {
//                 element.innerHTML = text.substring(0, index + 1);
//                 index++;
//                 setTimeout(animate, speed);
//             } else {
//                 setTimeout(() => {
//                     deleting = true;
//                     animate();
//                 }, waitTime);
//             }
//         } else {
//             if (index > 0) {
//                 element.innerHTML = text.substring(0, index - 1);
//                 index--;
//                 setTimeout(animate, speed);
//             } else {
//                 deleting = false;
//                 setTimeout(animate, 0);
//             }
//         }
//     }

//     animate();
// }

// animateText(heading1, text1, 100, 1500); // Animation for first heading
// animateText(heading2, text2, 100, 1500); // Animation for "Our Services"


document.addEventListener("DOMContentLoaded", function () {

    /*** Read More / Read Less Functionality ***/
    document.querySelectorAll(".read-more-btn").forEach((button) => {
        button.addEventListener("click", function () {
            const extraText = this.parentElement.querySelector(".extra-text");

            if (!extraText) return; // Ensure extraText exists to avoid errors

            if (extraText.style.display === "none" || extraText.style.display === "") {
                extraText.style.display = "block";
                this.textContent = "Read Less";
            } else {
                extraText.style.display = "none";
                this.textContent = "Read More";
            }
        });
    });

    /*** Animated Text Functionality ***/
    const text1 = "Unique Physiotherapy Centre";
    const text2 = "Our Services";
    const text3= "About Us";
    const heading1 = document.getElementById("animated-heading");
    const heading2 = document.getElementById("animated-services");
    const heading3 = document.getElementById("animated-about");

    function animateText(element, text, speed, waitTime) {
        let index = 0;
        let deleting = false;

        function animate() {
            if (!deleting) {
                if (index < text.length) {
                    element.innerHTML = text.substring(0, index + 1);
                    index++;
                    setTimeout(animate, speed);
                } else {
                    setTimeout(() => {
                        deleting = true;
                        animate();
                    }, waitTime);
                }
            } else {
                if (index > 0) {
                    element.innerHTML = text.substring(0, index - 1);
                    index--;
                    setTimeout(animate, speed);
                } else {
                    deleting = false;
                    setTimeout(animate, 0);
                }
            }
        }

        animate();
    }

    animateText(heading1, text1, 100, 1500); // Animation for first heading
    animateText(heading2, text2, 100, 1500); // Animation for "Our Services"
    animateText(heading3, text3, 100, 1500);
});
