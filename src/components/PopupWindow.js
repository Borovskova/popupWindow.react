import React from 'react'
import ReactDOM from 'react-dom';




class PopupWindow extends React.PureComponent {
  constructor(props) {
    super(props);


    this.containerEl = document.createElement('div');
    this.table = document.createElement('table');
    this.table.style.border = 'solid';
    this.table.style.width = '90%';
    this.containerEl.append(this.table);
    this.tableBody = document.createElement('tbody');
    this.table.append(this.tableBody);
    this.externalWindow = null;
    this.someArray = [1, 2, 3, 4, 5];
    for (let i = 0; i < this.someArray.length; i++) {
      this.tableBody.innerHTML +=
        `<tr style="border: solid;"> 
                    <td style="border: solid;">1</td>  
                    <td style="border: solid;">1</td>  
                    <td style="border: solid;">1</td>  
                    <td style="border: solid;">1</td>  
          </tr>`
    }
    this.input1 = document.createElement('input');
    this.input2 = document.createElement('input');
    this.tr = this.tableBody.lastChild;
    this.tdFirst = this.tr.firstElementChild;
    this.tdFourth = this.tr.lastElementChild;
    this.tdThird = this.tdFourth.previousElementSibling;

    this.tdFirst.textContent = '';
    this.tdFirst.append(this.input1);
    this.tdThird.textContent = '';
    this.tdThird.append(this.input2);
  }

  render() {
    if (!this.containerEl) {
      return null;
    }
    return ReactDOM.createPortal(this.props.children, this.containerEl);
  }

  componentDidMount() {
    this.externalWindow = window.open('', 'popup window', 'width=600,height=400,left=200,top=200');
    this.externalWindow.document.body.appendChild(this.containerEl);
  }

  componentWillUnmount() {
    this.externalWindow.close();
  }
}

export default PopupWindow
