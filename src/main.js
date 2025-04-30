
export const backButtonFunction = () => {
    let backButton = document.querySelector(".back-btn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 150) {
            backButton.style.display = "block";
            backButton.style.opacity = "1";
        } else {
            backButton.style.opacity = "0";
            setTimeout(() => {
                if (window.scrollY <= 150) backButton.style.display = "none";
            }, 300);
        }
    });

    backButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
};


