import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShoppingList from './shopping-list';
// import App from './App';
// import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

class ShopApp extends Component {

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
          },
        ]
      }
    }

    toggleItem(index){
      console.log(index);
    }

    render() {
      return (
        <ol>
          {
          this.state.items.map((item, index) => {
              // return <li key={index}>{items.title}</li>
              const _taken = item.taken ? 'taken' : '';
              return <ShoppingList  key = {index}
                                    title = {item.title}
                                    taken = {_taken}
                                    toggleItem = {this.toggleItem.bind(this, index)}
                                    />
          })
          }
        </ol>
      );
    }
}

ReactDOM.render(
  <ShopApp/>,
  document.getElementById('root')
);
