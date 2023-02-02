import React, {useState} from 'react'
import { lineList } from '../Components/LineList';


function Lines() {
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(!like);
    }

  return (
    <div>Lines</div>
  )
}

export {Lines}