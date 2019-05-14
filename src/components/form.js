import React from 'react';

class Form extends React.Component {
    render() {
      return (
        <form onSubmit={this.props.addNewItem}>
          <input type="text" id="addNewItemInput" name="product" placeholder="Введите продукт" />
          <button>Добавить продукт</button>
        </form>
      );
    }
}

export default Form;
