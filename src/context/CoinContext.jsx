/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";


export const CoinContext = createContext()

const CoinContextProvider = (props) =>{
    const [open, setOpen]= useState(false)
    const [loading, setLoading] = useState(false)
    const [allCoins, setAllCoins] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    })

    const fetchCoin = async ()=>{
        setLoading(true)
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': import.meta.env.VITE_APP_KEY_ONE}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => {setAllCoins(res)
                setLoading(false)
            })
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchCoin();
    },[currency])
   
    let contextValue = {
        allCoins, currency, setCurrency, loading, setLoading , open, setOpen
    }

    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;


