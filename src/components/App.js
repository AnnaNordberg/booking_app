import React, { Component } from "react";
import Card from "./Pages/Card";
import Header from "./Pages/Header";
import axios from "axios";
import "../Style.css";



class App extends Component {


      state = {
            products: []
      }

      async componentDidMount() {

            const res = await axios.get("http://localhost:1337/products")

            console.log(res.data);
            this.setState({ products: res.data })
      }


      render() {
            return (
                 <div className="body">
                  <div className="AppDiv">
                        
                        <Header/>   
                           

                              {this.state.products.map((product) =>
                                    <Card
                                          key={product.id}
                                          docId={product.id}
                                          title={product.title}
                                          price={product.price}
                                          description={product.description}
                                          image={"http://localhost:1337" + product.image.url}
                                    />
                              )}
                        </div>
                        </div>
                        
                        
                  )
      }
}
export default App;