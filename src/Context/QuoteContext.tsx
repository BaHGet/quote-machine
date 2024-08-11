import React, { ReactNode, useState } from "react";
import { Quote } from "../Types/Quote.type";
import { useQuoteAPI } from "../hooks/useQuoteAPI";

export const QuoteContext = React.createContext<{quotes:Array<Quote>, order:number}|[]>([]);

export const UpdateQuoteContext = React.createContext({handelOrderChange: () => {}});

interface childrens  {
    children: ReactNode
}

export const QuoteProvider = ({ children }: childrens) => {
    const [order, setOrder] = useState<number>(0)
    const quotes = useQuoteAPI()
    const handelOrderChange = () => {
        setOrder(Math.floor(Math.random() * quotes.length))
    }
    return (
        <QuoteContext.Provider value={{quotes, order}}>
            <UpdateQuoteContext.Provider value={{handelOrderChange}}>
                {children}
            </UpdateQuoteContext.Provider>
        </QuoteContext.Provider>
    );
}
