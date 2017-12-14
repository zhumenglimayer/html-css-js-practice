import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route, NavLink, Switch } from 'react-router-dom'

// Demo1:基础路由
class Demo1 extends React.Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><NavLink to="/">Home1</NavLink></li>
                    <li><NavLink to="/category">Category1</NavLink></li>
                    <li><NavLink to="/products">Products1</NavLink></li>
                </ul>
                <Route exact path="/" component={Home1}></Route>
                <Route exact path="/category" component={Category1}></Route>
                <Route exact path="/products" component={Products1}></Route>
            </div>
        )
    }
}
const Home1 = () => (
    <div>
        <h3>Home1</h3>
    </div>
)

const Category1 = () => (
    <div>
        <h3>Category1</h3>
    </div>
)

const Products1 = () => (
    <div>
        <h3>Products1</h3>
    </div>
)
// Demo 2: 嵌套路由
class Demo2 extends React.Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><NavLink to="/">Home2</NavLink></li>
                    <li><NavLink to="/categorys">Categorys2</NavLink></li>
                    <li><NavLink to="/products">Products2</NavLink></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home2}></Route>
                    <Route path="/categorys" component={Categorys2}></Route>
                    <Route exact path="/products" component={Products2}></Route>
                </Switch>

            </div>
        )
    }
}
const Home2 = () => (
    <div>
        <h3>Home2</h3>
    </div>
)

const Categorys2 = ({ match }) => (
    <div>
        <ul>
            <li><NavLink to={`${match.url}/shoes`}>shoes</NavLink></li>
            <li><NavLink to={`${match.url}/boots`}>boots</NavLink></li>
            <li><NavLink to={`${match.url}/footwear`}>footwear</NavLink></li>
        </ul>
        <Route path={`${match.path}/:name`} component={Category2}></Route>
        <Route exact path={`${match.path}`} render={() => (<div><h3>seclect a category</h3></div>)}></Route>
    </div>
)

const Category2 = ({ match }) => (
    <div><h3>{match.params.name}</h3></div>
)

const Products2 = () => (
    <div>
        <h3>Products2</h3>
    </div>
)



// Demo 3: 带Path参数的嵌套路由
class Demo3 extends React.Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><NavLink to="/">Home3</NavLink></li>
                    <li><NavLink to="/categorys">Categorys3</NavLink></li>
                    <li><NavLink to="/products">Products3</NavLink></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home3}></Route>
                    <Route path="/categorys" component={Categorys3}></Route>
                    <Route path="/products" component={Products3}></Route>
                </Switch>

            </div>
        )
    }
}
const Home3 = () => (
    <div>
        <h3>Home3</h3>
    </div>
)
const Categorys3 = ({ match }) => (
    <div>
        <ul>
            <li><NavLink to={`${match.url}/shoes`}>shoes</NavLink></li>
            <li><NavLink to={`${match.url}/boots`}>boots</NavLink></li>
            <li><NavLink to={`${match.url}/footwear`}>footwear</NavLink></li>
        </ul>
        <Route path={`${match.url}/:name`} component={Category3}></Route>
        <Route exact path={`${match.url}`} render={() => (<div><h3>seclect a category</h3></div>)}></Route>
    </div>
)
const Category3 = ({ match }) => (
    <div><h3>{match.params.name}</h3></div>
)

const Products3 = ({ match }) => {
    const productsData = [
        {
            id: 1,
            name: 'NIKE Liteforce Blue Sneakers',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
            status: 'Available'

        },
        {
            id: 2,
            name: 'Stylised Flip Flops and Slippers',
            description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
            status: 'Out of Stock'

        },
        {
            id: 3,
            name: 'ADIDAS Adispree Running Shoes',
            description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
            status: 'Available'
        },
        {
            id: 4,
            name: 'ADIDAS Mid Sneakers',
            description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
            status: 'Out of Stock'
        }
    ]
    var linkList = productsData.map((product) => {
        return (
            <li key={product.id}>
                <Link to={`${match.url}/${product.id}`} >{product.name}</Link>
            </li>
        )
    })

    return (
        <div>
            <h3> Products </h3>
            <ul> {linkList} </ul>
            <Route path={`${match.url}/:productId`} render={(props) => <Product3 data={productsData} {...props} />}></Route>
            <Route exact path={`${match.url}`} render={() => (<div><h3>seclect a product</h3></div>)}></Route>
        </div>
    )
}

const Product3 = ({ match, data }) => {
    var product = data.find(p => p.id == match.params.productId)
    var productData
    if (product) {
        productData = (
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <br />
                <h4>{product.status}</h4>
            </div>
        )
    } else {
        productData = (<h2> Sorry. Product doesnt exist </h2>)
    }

    return (
        <div>
            {productData}
        </div>
    )
}



ReactDOM.render(
    <BrowserRouter>
        {/* <Demo1></Demo1> */}
        {/* <Demo2></Demo2> */}
        <Demo3></Demo3>
    </BrowserRouter>
    ,
    document.getElementById('app')
)