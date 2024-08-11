import { useContext } from "react"
import { QuoteContext, UpdateQuoteContext } from "../Context/QuoteContext"
import { Quote } from "../Types/Quote.type"


export const useQuoteContext = () => {
    const {quotes, order}:{quotes:Quote[], order:number} = useContext(QuoteContext) as { quotes: Quote[]; order: number }
    if(quotes === undefined){
        throw new Error('useQuoteContext must be used within a QuoteContext Provider')
    }
    return {quotes, order}
}

export const useUpdataQuoteContext = () => {
    const updateQuote = useContext(UpdateQuoteContext)
    if(updateQuote === undefined){
        throw new Error('useUpdatateQuoteContext must be used within a QuoteContext Provider')
    }
    return updateQuote
}