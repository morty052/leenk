import { useEffect, useState } from "react"

type Props = {
    loading?:boolean,
    error?:boolean,
    url?:string
}

const UseFetch = (url:string) => {
const [loading, setloading] = useState(true)
const [data, setdata] = useState([])


  const fetchData = async () => {
    const data = await fetch(url).then((res) => res.json())
    .then((res) => res)
    // console.log(data)
    setdata(data)
  }

  useEffect(() => {
    fetchData()
  
    return () => {
      setloading(false)
    }
  }, [])
  
  return data
}

export default UseFetch