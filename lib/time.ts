export const getTime = (): string => {
    const time = new Date().getHours();
    if(time >= 5 && time < 17){
        return "Good Morning";
    }

    return "Good Evening";
}