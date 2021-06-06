// @ts-nocheck
////CODING CHALLENGE 6

////Question 3: Write a function that converts HEX to RGB. Then Make that function auto-detect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

////Taking Input From User
let plainInput = document.getElementById("plainInput");
let getOutput = document.getElementById("getOutput");
let reset = document.getElementById("reset");
let output = document.getElementById("output");

////Creating a function to get input value of plainInput.
const getInputValue = () => plainInput.value;

////Now We Will Create a Function to convert the RGB input to HEX
const convertToHEX = (red, green, blue) => {
    let r1 = parseInt(red / 16);
    let r2 = red % 16;
    let g1 = parseInt(green / 16);
    let g2 = green % 16;
    let b1 = parseInt(blue / 16);
    let b2 = blue % 16;
    let colorArray = [r1, r2, g1, g2, b1, b2];

    for (let i = 0; i < colorArray.length; i++) {
        if (colorArray[i] < 10) {
            colorArray[i] = colorArray[i].toString();
        }
        switch (colorArray[i]) {
            case 10:
                colorArray[i] = "A";
                break;
            case 11:
                colorArray[i] = "B";
                break;
            case 12:
                colorArray[i] = "C";
                break;
            case 13:
                colorArray[i] = "D";
                break;
            case 14:
                colorArray[i] = "E";
                break;
            case 15:
                colorArray[i] = "F";
                break;

            default:
                break;
        }

    }

    let toHexOutput = ` => Your HEX Output Is #${colorArray[0]}${colorArray[1]}${colorArray[2]}${colorArray[3]}${colorArray[4]}${colorArray[5]} <= `;
    output.textContent = toHexOutput;
    return toHexOutput;
};


////Now We Will Create a Function to convert the HEX input to RGB
const convertToRGB = (color) => {
    let red = parseInt(color.substr(0, 2), 16);
    let green = parseInt(color.substr(2, 2), 16);
    let blue = parseInt(color.substr(4, 2), 16);

    let rgbOutput = ` => Your RGB Output Is (${red}, ${green}, ${blue}) <= `;
    output.textContent = rgbOutput;
    return rgbOutput;
};

////Defining Whether it's HEX or RGB And Invoking The Converter Function.
const mainFunc = () => {
    const definingColorType = (input) => {
        if (input[0] === "#") {
            let extracted = input.substr(1);
            let hexInput = extracted.toUpperCase();
            convertToRGB(hexInput);

        } else {
            let rgbInput = input.split(",").map(Number);
            convertToHEX(rgbInput[0], rgbInput[1], rgbInput[2]);
        }
    };
    definingColorType(getInputValue());
};

//// Creating Reset Function
const resetFunc = () => {
    plainInput.value = "";
    output.textContent = "Your Output Will Be Here";
};

////Calling Event Listener To React on Button Click
getOutput.addEventListener("click", mainFunc);
reset.addEventListener("click", resetFunc);

