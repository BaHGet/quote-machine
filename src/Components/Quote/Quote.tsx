import './quote.css'
import { Quote } from "../../Types/Quote.type"

type Props = {
    quote: Quote|undefined
}

export const QuoteTextComponent = (props: Props) => {
    const { quote } = props

    if(quote === undefined){
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div id="quote-box" className="quote">
            <p id="text" className='quote-text'>{quote?.quote}</p>
            <p id="author" className='author'>{quote?.author}</p>
        </div>
    )
}