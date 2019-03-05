
const tempConverter = (temp, tempType) => {
    console.log(temp)
    if (temp) {
        const kelvinDiff = 273.15;
        let convertedTemp = null;
        switch (tempType) {
            case "F":
                convertedTemp = ((temp - kelvinDiff) * 9 / 5 + 32).toFixed(1);
                break;
            case "C":
                convertedTemp = (temp - kelvinDiff).toFixed(1);
                break;
            case "K":
                convertedTemp = temp.toFixed(1);
                break;
            default:
                convertedTemp = ((temp - kelvinDiff) * 9 / 5 + 32).toFixed(1);
                break;
        }

        return convertedTemp;
    }
}

export default tempConverter;