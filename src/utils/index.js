export const shortenText = (text, n)=>{
    if(text.length>n){
        const shortenedText = text.substring(0,n).concat("...");
        return shortenText;
    }
    return text;
};