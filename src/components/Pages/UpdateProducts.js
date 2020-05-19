import React, { Component } from "react";
import axios from "axios";

class UpdateProducts extends Component {
  state = {
    products: [],
    chosenProduct: [],
    status: null,
    image: "",
  };

  async componentDidMount() {
    axios.get("http://localhost:1337/products").then((res) => {
      this.setState({ products: res.data });
    });
  }
  componentDidUpdate() {
    if (Object.keys(this.state.chosenProduct).length > 0) {
      document.querySelector(
        'input[name="title"]'
      ).value = this.state.chosenProduct.title;
      document.querySelector(
        'textarea[name="description"]'
      ).value = this.state.chosenProduct.description;
      document.querySelector(
        'input[name="price"]'
      ).value = this.state.chosenProduct.price;
    }
  }

  onImgUploadChange(e) {
    
    this.setState({ image: e.target.files[0] });

  //Förhandsvisningen av bild till produkt
    let previewOutput = document.querySelector(".card_img-top");
    previewOutput.src = URL.createObjectURL(e.target.files[0]);
  }

  onClickChosenProduct(e) {
    let chosenProductId = e.target.getAttribute("data-key");
    axios
      .get("http://localhost:1337/products/" + chosenProductId)
      .then((res) => {
        this.setState({ chosenProduct: res.data });
      });
  }

  onClickAbort() {
    this.setState({ chosenProduct: [] });
  }

  onClickDelete(e) {
    const chosenProductId = e.target.getAttribute("data-key");
    axios({
      method: "delete",
      url: `http://localhost:1337/products/${chosenProductId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => {
        console.log("Well done");
        console.log(response);
        console.log(response.status);
        if (response.status === 200) {
          this.props.dataFromEditProducts("default", response.status, "Product deleted!");
        }
      })
      .catch((error) => {
        console.log("An error occurred", error);
      });
  }

  onClickEnableUpload() {
    const fileInput = document.querySelector("#img__upload");
    fileInput.disabled = false;
  }

  async onSubmitToApi(e) {
    e.preventDefault();
    console.log(localStorage.getItem("jwt"));

    const fileInput = document.querySelector("#img__upload");

    if (!fileInput.disabled) {
      console.log("input isnt disabled");

      const formData = new FormData();
      formData.append("files", this.state.image);
      formData.append("ref", "product"); // Refererar till table/tabell i strapi
      formData.append("refId", e.target.elements.id.value); // Hämtat id från post
      formData.append("field", "image"); // Refererar till kolumn 

      axios({
        method: "post",
        url: `http://localhost:1337/upload`,
        data: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => {
          // Handle success / Samma som upload
          console.log("Picture uploaded to post, Well done");
          console.log(response);
          console.log(response.status);
          this.setState({ status: response.status });
          console.log("from state:", this.state.status);
        })
        .catch((error) => {
          console.log("An error occurred", error);
        });
    }

    axios({
      method: "put",
      url: `http://localhost:1337/products/${e.target.elements.id.value}`,
      data: {
        title: e.target.elements.title.value,
        description: e.target.elements.description.value,
        price: e.target.elements.price.value,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => {
        // Handle success / Samma som upload
        console.log("Post created, Well done");
        console.log(response);
        console.log(response.status);
        if (response.status === 200) {
          this.props.dataFromEditProducts("default", response.status, "Product updated");
        }
      })
      .catch((error) => {
        console.log("An error occurred", error);
      });
  }

  render() {
    return (
      <div className="body">
        <div className="AppDiv">
          <div className="UpdateProductsDiv">
            <h2 className="postHeaderText">Or update excisting products</h2>
            {Object.keys(this.state.chosenProduct).length === 0 && (
              <div className={"products_preview"}>
                {this.state.products.map((product) => (
                  <div className={"card__preview"} key={product.id}>
                    <div className={"card__body"}>
                      <h3 className={"card__title"}>{product.title}</h3>
                      <p className={"card__price"}>{product.price}kr</p>
                      <button
                        className={"button__success btn btn-primary"}
                        onClick={this.onClickChosenProduct.bind(this)}
                        data-key={product.id}
                      >
                        Edit
                  </button>
                    </div>
                  </div>
                ))}
              </div>
            )}


            {Object.keys(this.state.chosenProduct).length > 0 && (
              <div className={"chosenproduct"}>
                <form onSubmit={this.onSubmitToApi.bind(this)}>
                  <img
                    src={
                      "http://localhost:1337" + this.state.chosenProduct.image.url
                    }
                    className={"card_img-top"}
                    alt={"People"}
                    style={{ width: "35rem", height: "25rem" }}
                  />
                  <label
                    htmlFor={"img__upload"}
                    className={"button__secondary btn btn-primary"}
                    onClick={this.onClickEnableUpload.bind(this)}
                  >
                    Change image
              </label>
                  <input
                    id={"img__upload"}
                    type="file"
                    name="file"
                    onChange={this.onImgUploadChange.bind(this)}
                    disabled
                  />
                  <input
                    type="hidden"
                    name="id"
                    value={this.state.chosenProduct.id}
                  />
                  <input type="text" name="title" placeholder={"Enter new title"} />
                  <textarea className="updateProductsTextarea"
                    rows="5"
                    type="text"
                    name="description"
                    placeholder={"Enter new description"}
                  />
                  <input
                    type="number"
                    name="price"
                    placeholder={"Enter new price"}
                  />

                  <button className={"button__success btn btn-primary"}>Save Changes</button>
                </form>
                <button
                  className={"button__secondary btn btn-primary"}
                  onClick={this.onClickAbort.bind(this)}
                >
                  Go back
            </button>
                <button
                  className={"button__warning btn btn-primary"}
                  onClick={this.onClickDelete.bind(this)}
                  data-key={this.state.chosenProduct.id}
                >
                  Delete
            </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateProducts;