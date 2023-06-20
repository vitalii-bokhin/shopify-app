export default function randomInt(min, max) {
    if (max < min) max = min;
    return Math.floor(Math.random() * (max - min)) + min;
};
