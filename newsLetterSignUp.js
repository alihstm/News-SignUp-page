const emailAddressInput = document.getElementById("emailInput");
const body = document.getElementById("body");
const warning = document.getElementById("warning");
const main_content = `    <main id="main-page">
        <section class="left-section">
            <div class="title-des-options">
                <p class="title">Stay updated!</p>

                <p class="des">Join 60,000+ product managers reciving monthly updates on:</p>

                <div class="options">
                    <div>
                        <img src="material/icon-success.svg" loading="lazy">
                        <p>Product discovery and building what matters</p>
                    </div>

                    <div>
                        <img src="material/icon-success.svg" loading="lazy">
                        <p>Measuring to ensure updates are success</p>
                    </div>

                    <div>
                        <img src="material/icon-success.svg" loading="lazy">
                        <p>And much more!</p>
                    </div>
                </div>
            </div>

            <div class="inputField-btn">
                <div>
                    <div>
                        <p>Email address</p>
                        <p id="warning" style="color: red; visibility: hidden;">Valid email required</p>
                    </div>
                    <input id="emailInput" placeholder="email@company.com">
                </div>

                <button onclick="Subscribe()">Subscribe to monthly newsletter</button>

            </div>
        </section>

        <section class="right-section">
            <img src="material/illustration-sign-up-desktop.svg" loading="lazy">
        </section>
    </main>`;
const thanks_content = `<div id="thanks" class="thanks-page">
        <img src="material/icon-success.svg" loading="lazy">
        <p class="title">Thanks for Subscribing!</p>
        <p class="des">A confirmation email has been sent to your email, Please open it.</p>
        <button onclick="Dimiss()">Dimmis message</button>
    </div> `;

function validateEmail(email) {
  if (
    email !== null &&
    email !== "" &&
    email.includes("@") &&
    email.includes(".")
  ) {
    return true;
  } else {
    return false;
  }
}

function Subscribe() {
  const email = emailAddressInput.value;
  if (validateEmail(email)) {
    body.innerHTML = thanks_content;
  } else {
    warning.style.visibility = "visible";
    emailAddressInput.style.border = "1px solid red";
  }
}
function Dimiss() {
  body.innerHTML = main_content;
}
