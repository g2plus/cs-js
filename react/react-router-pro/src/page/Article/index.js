import { useParams } from "react-router-dom"

const Article = () => {
  const params = useParams()
  const id = params.id
  const name = params.name
  return <div>我是文章页{id}-{name}</div>
}

export default Article