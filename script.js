const passwordValue = document.getElementById('password-value');
const generatePasswordBtn = document.getElementById('generate-password');
const copyPasswordBtn = document.getElementById('copy-password');

const generatePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+{}[]<>?";
    const length = 10;

    const allChars = uppercase + lowercase + numbers + symbols;
    let password = "";

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    for (let i = password.length; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordValue.value = password.split('').sort(() => Math.random() - 0.5).join('');
    //console.log("Password : ", passwordValue.value)
};

const copyPassword = () => {
    //console.log("copied")
    const passwordText = passwordValue.value;
    if (!passwordText) {
         alert("Please generate the Password!");
     return;
    }
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(passwordText).then(() => {
            alert("Password copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy password: ", err);
        });
    } else {
        const tempInput = document.createElement("input");
        tempInput.value = passwordText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        alert("Password copied to clipboard!");
    }
};

generatePasswordBtn.addEventListener('click', generatePassword);
copyPasswordBtn.addEventListener('click', copyPassword)