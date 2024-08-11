import { useEffect, useState } from "react"
import { Quote } from "../Types/Quote.type"

const fetchQuote = async () => {
    const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    const data = await response.json()
    const quotes = data.quotes
    return quotes
}

const getFromLocalStorage = () => {
    return localStorage.getItem('quotes') ? JSON.parse(localStorage.getItem('quotes') as string) : []
}

export const useQuoteAPI = () => {
    const[quotes, setQuotes] = useState<Array<Quote>>([])
    useEffect(() => {
        
        if(getFromLocalStorage().length !== 0){
            setQuotes(getFromLocalStorage())
        }else{
            fetchQuote().then(quotes => {
                setQuotes(quotes)
                localStorage.setItem('quotes', JSON.stringify(quotes))
            })
        }
    }, [])

    return quotes
}