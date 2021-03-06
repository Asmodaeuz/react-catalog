import React, { Component } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'

import './styles.css'

export default class Products extends Component {

    state = {
        product: {},
    }

    async componentDidMount() {

        const { id } = this.props.match.params

        const response = await api.get(`/products/${id}`)

        this.setState({ product: response.data })

    }

    render() {

        const { product } = this.state

        return (

            <div className="wrapper">

                <div className="product-info">

                    <h1>{product.title}</h1>
                    <p>{product.description}</p>

                    <p>
                        URL: <a target="_blank" rel="noopener noreferrer" href={product.url}>{product.url}</a>
                    </p>

                </div>
                <div className="button">
                   
                    <Link to={'/'}>
                        <button>Back</button>
                    </Link>

                </div>

            </div>

        )

    }

}