import {useSearchParams } from "react-router-dom"

const SearchArticle = () => {
    const [params] = useSearchParams()
    const id = params.get('id')
    const name = params.get('name')
    return <div>我是文章页{id}-{name}</div>
}

export default SearchArticle