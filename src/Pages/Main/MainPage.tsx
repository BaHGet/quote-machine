import './main.css'
import x from '../../assets/X.png'
import { useQuoteContext, useUpdataQuoteContext } from "../../hooks/useQuoteContext"
import { Quote } from "../../Types/Quote.type"
import { QuoteTextComponent } from "../../Components/Quote/Quote"
import { Button } from '../../Components/Button/Button'

export const Main = () => {
    const handelTweet = () => {
        const text: string = quotes[order].quote.replaceAll(" ", "+");

        window.location.href = encodeURI(`https://x.com/intent/post?hashtags=quotes&text=${text}`)
    }
    
    const { quotes, order } = useQuoteContext() as { quotes: Quote[]; order: number }
    const updataQuote = useUpdataQuoteContext()
    const handelQuoteChange = () => {
        updataQuote.handelOrderChange()
    }
    
    return (
        <div className="main-container glass-effect shadow">
            <QuoteTextComponent quote={ 
                quotes[order] ?
                    quotes[order]
                    :
                    undefined
                } />
            
            <div className="button-container">
                <Button id="tweet-quote" onClick={handelTweet}>
                    <a target='_self'>
                        <img id='btn-img' src={x} alt="" />
                    </a>
                </Button>
                <Button  onClick={handelQuoteChange} id="new-quote">New Quote</Button>
            </div>
        </div>        
    )
}