import axios from 'axios'
import { useEffect, useState } from 'react'
import { Table } from 'flowbite-react'

const ExchangeData = () => {
    const [data,setData] = useState([ ])
    const exchangeName = [
        {name:"CAD"},
        {name:"EUR"},
        {name:"IDR"},
        {name:"JPY"},
        {name:"CHF"},
        {name:"GBP"},
    ]
    
    useEffect(()=> {
        axios.get("https://api.currencyfreaks.com/latest?apikey=d0d53d53ea5b47348516fd44eb657d6f&format=json")
    .then((res) => {
        const param = [res.data.rates.CAD, res.data.rates.EUR, res.data.rates.IDR, res.data.rates.JPY, res.data.rates.CHF, res.data.rates.GBP]
       const combine = exchangeName.map(function(item,index){
        return {name: item.name, value: param[index]}
       })
      
        setData([...combine])
        
    })
    .catch((error) => {

    })
    },[])

     console.log(data);

   
    return(
        <>
                 <Table className='table-fixed'>
        <Table.Head>
            <Table.HeadCell>
            Currency
            </Table.HeadCell>
            <Table.HeadCell>
            We Buy
            </Table.HeadCell>
            <Table.HeadCell>
            Exchange Rates
            </Table.HeadCell>
            <Table.HeadCell>
            We Sell
            </Table.HeadCell>

            
            
        </Table.Head>
        <Table.Body className="divide-y">
                 { data !== null && data.map((res) => {
                const val = parseFloat(res.value)
                const parambuy = val + (val*0.05)
                const paramsell = val - (val*0.05)
                return (
                    
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {res.name}
                    </Table.Cell>
                    <Table.Cell>
                        {parambuy.toFixed(4)}
                    </Table.Cell>
                    <Table.Cell>
                        {val.toFixed(6)}
                    </Table.Cell>
                    <Table.Cell>
                        {paramsell.toFixed(4)}
                    </Table.Cell>
                    </Table.Row>
                )
                })}

        </Table.Body>
        </Table> 
        

        </>
    )
}

export default ExchangeData