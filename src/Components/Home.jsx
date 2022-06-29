import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"


export const Home = () => {

    const [data ,setData] = useState([])
    const [search ,setSearch] = useState([])
    const [filtered ,setFiltered] = useState([])

    useEffect(() =>{getData()},[] )

    const getData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => setData(res.data))
    }
    //console.log("data :",data)


    const HandleSearch = (e) => {
        setSearch(e.target.value)
    }
    //console.log("search :",search)


    const HandleFilter = () => {

        let FilterPost = data.filter((el) => el.title.includes(search))
        setFiltered([...FilterPost])
    }
    //console.log("filtered :",filtered)
    

    return(

        <>

        <h1>Posts</h1>
        <input type="text" id="posts" placeholder="enter here" onChange={HandleSearch} />
        <button onClick={HandleFilter} >Submit</button>

        {search == "" ?

        <div>
            {data.map((el)=>(
              <div key={el.id}>

                <p>{el.id}.  {el.title}</p>

              </div>
            ))}

         </div>

         :

         <div>

              {filtered.map((el) => (

                <div key={el.id}>

                <p>{el.id}.  {el.title}</p>

                 </div>
                
               ))}

         </div>
        }
        
        </>
    )
}