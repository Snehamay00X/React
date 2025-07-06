import React, { use, useEffect,useState } from 'react'

function Github() {
    const [data, setData] = useState(0);
    useEffect(()=>{
        
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((response) => response.json())
        .then((data) => {
             console.log(data.followers)
            // document.querySelector('span').innerText = ` ${data.followers}`;
            setData(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        })
    },[])
  return (
    //<div className='text-center m-4 bg-amber-400 text-2xl'>Github Followers:<span></span></div>
    <div className='text-center m-4 bg-amber-400 text-4xl justify-center items-center flex gap-5 flex-row'>
       <img src={data.avatar_url} alt="Avatar" className='h-15 rounded-full' />
        Github Followers:{data.followers}
        
    </div>
  )
}

export default Github