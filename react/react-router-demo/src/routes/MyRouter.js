import {Link} from "react-router-dom"
import Image from "../components/Image"
const MyRouter=()=> {
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href={`/contacts/1`}>Your Name</a>
                        </li>
                        <li>
                            <a href={`/contacts/2`}>Your Friend</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <button>
                    <a href={`/bg`}>
                        查看图片
                    </a>
                </button>
                <div>
                    {/*https://blog.csdn.net/zyp1101996/article/details/104483602*/}
                    <button>
                        <Link to="/bg">查看图片</Link>
                    </button>
                </div>
                <Image>查看图片</Image>
            </div>
        </>
    );
}
export default MyRouter
