import React, {Component} from 'react';
import './App.css';
import ProductItem from './components/product-item';
import Form from './components/form';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {

    constructor(props) {
      super(props);

      this.state = {
        items: [
          {
            title: "Чай",
            taken: false
          },
          {
            title: "Сахар",
            taken: true
          },
          {
            title: "Колбаса",
            taken: false
          }
        ]
      }
    }

    toggleItem(index){
      // console.log(index);
      const items = this.state.items;
      let taken = items[index].taken;
      items[index].taken = !taken;

      this.setState({items});
    }

    addItem = async (e) => {
      e.preventDefault();
      var newItem = {
        title: e.target.elements.product.value,
        taken: false
      };
      this.state.items.push(newItem);
      this.setState({});
      e.target.elements.product.value = "";
    }

    deleteItem(){

    }

    render() {
      return (
        <div>
          <Form addNewItem={this.addItem}/>
          <ol>
            {
                this.state.items.map((item, index) => {
                // return <li key={index}>{items.title}</li>
                const className = item.taken ? 'taken' : '';
                return <ProductItem   key = {index}
                                      title = {item.title}
                                      className = {className}
                                      toggleItem = {this.toggleItem.bind(this, index)}
                />
            })
            }
          </ol>
        </div>

      );
    }
}

export default App;
