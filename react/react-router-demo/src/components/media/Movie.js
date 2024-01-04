import {useNavigate} from "react-router-dom";
const Movie=()=>{
    const navigate=useNavigate()
    return (
        <div>
            <button onClick={()=>navigate('/bg')}>请别相信她</button>
        </div>
    )
}
export default Movie