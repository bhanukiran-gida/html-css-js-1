document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".main_body_faqs_toggle_button");

    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;
            const plusIcon = button.querySelector(".main_body_faqs_plus_icon");
            const minusIcon = button.querySelector(".main_body_faqs_minus_icon");

            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                plusIcon.style.display = "none";
                minusIcon.style.display = "inline";
            } else {
                content.style.display = "none";
                plusIcon.style.display = "inline";
                minusIcon.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById("main_body_recipe_right_img");
    const button1 = document.getElementById("main_body_recipe_right_button_desk");
    const button2 = document.getElementById("main_body_recipe_right_button_mobile");

    button1.addEventListener("click", () => {
        mainImage.src = "assets/desktop-design.webp"; // replace with the actual path to your image1
        button1.classList.add("active");
        button1.classList.remove("inactive");
        button2.classList.remove("active");
        button2.classList.add("inactive");
    });

    button2.addEventListener("click", () => {
        mainImage.src = "assets/mobile-design.webp"; // replace with the actual path to your image2
        button2.classList.add("active");
        button2.classList.remove("inactive");
        button1.classList.remove("active");
        button1.classList.add("inactive");
    });

    // Initialize button states
    button1.classList.add("active");
    button2.classList.add("inactive");
});
