//let apiQuotes = [];
//Show New Quote Function
function newQuote(){
    //pick a Random Quote from apiQute Array
    const quote =localQuotes[math.floor(math.random() * localQuotes.length)];
    console.log(quote);
}

//Get Quotes from API
//async function getQuotes(){
    // const  apiUrl='https://type.fit/api/quotes';
    // try{
    //     const response=await fetch(apiUrl);
    //     //apiQuotes is a Global Veriable
    //     apiQuotes=await response.json();
    //     newQuote();

    //   }catch(error){
    //     //catch error Here!
    // }

//on Load 
//getQuotes();
newQuote();