import axios from 'axios'
import { useEffect, useState } from 'react'

const ExchangeRate = () => {
    //use state for data currency and date
    const [data,setData] = useState([ ])
    const [date,setDate] = useState([ ])

    //name of currency dump
    const exchangeName = [
        {name:"CAD"},
        {name:"EUR"},
        {name:"IDR"},
        {name:"JPY"},
        {name:"CHF"},
        {name:"GBP"},
    ]
    
    //get api from currency
    useEffect(()=> {
        axios.get("https://api.currencyfreaks.com/latest?apikey=d0d53d53ea5b47348516fd44eb657d6f&format=json")
    .then((res) => {
        //setdate to date state
        setDate([res.data.date])

        //take value of rates dari CAD, EUR, IDR, JPY,CHY,GBP
        const param = [res.data.rates.CAD, res.data.rates.EUR, res.data.rates.IDR, res.data.rates.JPY, res.data.rates.CHF, res.data.rates.GBP]
        
        //menggabungkan exchangeName dan param kedalam Array object yg sama dengan property name dan value
       const combine = exchangeName.map(function(item,index){
        return {name: item.name, value: param[index]}
       })
      
       //set data hasil dari combine ke state Data
        setData([...combine])
        
    })
    .catch((error) => {

    })
    },[])

    //   console.log(date);

    return(
        <>
            <div className='rates-container'>
            <table>
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th>We Buy</th>
                        <th>Exchange Rates</th>
                        <th>We Sell</th>
                    </tr>
                </thead>
                <tbody>
                {/* mapping mengeluarkan output dari seluruh array yang ada di state data */}
                { data !== null && data.map((res) => {
                    //fungsi untuk mengubah ke bentuk float
                    const val = parseFloat(res.value)
                    //fungsi untuk harga buy
                    const parambuy = val + (val*0.05)
                    //fungsi untuk harga sell
                    const paramsell = val - (val*0.05)
                    return (
                        //toFixed fungsi agar dibelakang koma hanya 4 angka saja
                        <tr key={res.name}>
                            <td>{res.name}</td>
                            <td>{parambuy.toFixed(4)}</td>
                            <td>{val.toFixed(4)}</td>
                            <td>{paramsell.toFixed(4)}</td>
                        </tr>
                    )
                    })}
                    </tbody>
            </table>
            
            </div>
            <div className='text-rate'>
                
                <p>Rates are based from 1 USD. Last Update: <u>{date}</u></p>
                <p>This Application uses API from <a href='https://currencyfreaks.com/' target="_blank" >https://currencyfreaks.com/</a></p>
            </div>
            
        </>
    )
}

export default ExchangeRate