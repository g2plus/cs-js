import {useNavigate} from "react-router-dom";
const Image=()=>{
    const navigate=useNavigate()
    return (
        <div>
            <button onClick={()=>navigate('/bg')}>查看图片</button>
        </div>
    )
}
export default Image
