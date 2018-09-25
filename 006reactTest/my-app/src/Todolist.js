// import React, { Component } from 'react';// 可以换一种写法 React.Component
// import React from 'react';
//
//

//
// // 定义一个React 组件
// class Todolist extends React.Component {
//     //es6 的语法，class 的定义
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: [
//                 'learn react',
//                 'learn enlish',
//                 'learn vue'
//             ]
//         }
//     }
//
//     handleBtnClick() {
//         this.setState({
//             list: [...this.state.list, 'hello world']
//         //难点 this 指向的问题
//         })
//     }
//
//
//   render() {
//        // jsx 语法
//     return (
//         <div>
//             <div>
//                 <input />
//                 <button onClick={this.handleBtnClick.bind(this)}>add</button>
//             </div>
//             <ul>
//                 {
//                     this.state.list.map((item, index) => {
//                         return <li key={index}>{item}</li>
//                 })
//                 }
//             </ul>
//         </div>
//     );
//   }
// }

// export default Todolist;
// // 输出用的
//
// //这段代码，可以先敲到背住。

//
// import React from 'react';
//
// class Todolist extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: [
//                 'learn react',
//                 'learn enlish',
//                 'learn vue'
//             ]
//         }
//     }
//
//     handleBtnClick() {
//         this.setState({
//             list: [...this.state.list, 'hello world']
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <div>
//                     <input />
//                     <button onClick={this.handleBtnClick.bind(this)}>add</button>
//                 </div>
//                 <ul>
//                     {
//                         this.state.list.map((item, index) => {
//                             return <li key={index}>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }
//
// export default Todolist;


// import React from 'react';
//
// class Todolist extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: [
//                 'learn React',
//                 'learn English',
//                 'learn Vue',
//             ]
//         }
//
//     }
//
//     handleBtnClick() {
//         this.setState({
//             list: [...this.state.list, 'hello world']
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <div>
//                     <input/>
//                     <button onClick={this.handleBtnClick.bind(this)}>add</button>
//                 </div>
//                 <ul>
//                     {
//                         this.state.list.map((item, index) => {
//                             return <li key={index}>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }
//
// export default Todolist;

// import React from 'react';
//
// class Todolist extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: ['learn React', 'learn English', 'learn Vue']
//         }
//     }
//     handleBtnClick() {
//         this.setState({
//             list: [...this.state.list, 'hello world']
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <div>
//                     <input/>
//                     <button onClick={this.handleBtnClick.bind(this)}>add</button>
//                 </div>
//                 <ul>
//                     {
//                         this.state.list.map((item, index) => {
//                             return <li key={index}>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }
//
// export default Todolist;

// import React, { Component } from 'react';
//
// class Todolist extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: ['learn React', 'learn Vue', 'learn English']
//         }
//     }
//     handleBtnClick() {
//         this.setState({
//             list: [...this.state.list, 'hello world']
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <div>
//                     <input/>
//                     <button onClick={this.handleBtnClick.bind(this)}>add</button>
//                 </div>
//                 <ul>
//                     {
//                         this.state.list.map((item, index) => {
//                             return <li key={index}>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }
// export default Todolist;
//
// import React, { Component } from 'react';
//
// class Todolist extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: ['learn React', 'learn Vue', 'learn English']
//         }
//     }
//     handleBtnClick() {
//         this.setState({
//             list: [...this.state.list, 'hello world']
//         })
//     }
//
//     render() {
//         return(
//             <div>
//                 <div>
//                     <input/>
//                     <button onClick={this.handleBtnClick.bind(this)}>add</button>
//                 </div>
//                 <ul>
//                     {
//                         this.state.list.map((item, index) => {
//                             return <li key={index}>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }
//
// export default Todolist;

// import React, { Component } from 'react';
//
// class Todolist extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: [
//                 'learn React',
//                 'learn Vue',
//                 'learn English'
//             ]
//         }
//     }
//     handleBtnClick() {
//         this.setState({
//             list: [...this.state.list, 'hello world']
//         })
//     }
//
//     render() {
//         return(
//             <div>
//                 <div>
//                     <input/>
//                     <button onClick={this.handleBtnClick.bind(this)}>add</button>
//                 </div>
//                 <ul>
//                     {
//                         this.state.list.map((item, index) => {
//                             return <li key={index}>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }
//
// export default Todolist;

// import React, {Component} from 'react';
//
// class Todolist extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: [],
//             inputValue: ''
//         }
//     }
//
//     handleBtnClick() {
//         this.setState({
//             list: [...this.state.list, this.state.inputValue],
//             inputValue: ''
//         })
//     }
//
//     handleInputChange(e) {
//         this.setState({
//             inputValue: e.target.value
//         })
//     }
//
//     handleItemClick(index) {
//         console.log(index);
//         const list = [...this.state.list];
//         list.splice(index, 1);
//         this.setState({
//             list: list
//         })
//
//     }
//
//
//     render() {
//         return (
//             <div>
//                 <div>
//                     <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
//                     <button onClick={this.handleBtnClick.bind(this)}>Add</button>
//                 </div>
//                 <ul>
//                     {
//                         this.state.list.map((item, index) => {
//                             return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }
//
// export default Todolist;


// import React, {Component} from 'react';
//
// class Todolist extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: [],
//             inputValue: ''
//         }
//     }
//
//     handleBtnClick() {
//         this.setState({
//             list: [...this.state.list, this.state.inputValue],
//             inputValue: ''
//         })
//     }
//
//     handleInputChange(e) {
//         this.setState({
//             inputValue: e.target.value
//         })
//     }
//
//     handleItemClick(index) {
//         console.log(index);
//         const list = [...this.state.list];
//         list.splice(index, 1);
//         this.setState({
//             list: list
//         })
//     }
//
//
//     render() {
//         return (
//             <div>
//                 <div>
//                     <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
//                     <button onClick={this.handleBtnClick.bind(this)}>Add</button>
//                 </div>
//                 <ul>
//                     {
//                         this.state.list.map((item, index) => {
//                             return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }
//
// export default Todolist;

// import React, {Component} from 'react';
//
// class Todolist extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: [],
//             inputValue: ''
//         }
//     }
//
//     handleBtnClick() {
//         this.setState({
//             list: [...this.state.list, this.state.inputValue],
//             inputValue:''
//         }
//
//     )
//     }
//
//     handleInputChange(e) {
//         this.setState({
//             inputValue: e.target.value
//         })
//     }
//
//     handleItemClick(index) {
//         console.log(index);
//         const list = [...this.state.list];
//         list.splice(index, 1);
//         this.setState({
//             list: list
//         })
//     }
//
//     render() {
//         return(
//             <div>
//                 <div>
//                     <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
//                     <button onClick={this.handleBtnClick.bind(this)}>Add</button>
//
//                 </div>
//                 <ul>
//                     {
//                         this.state.list.map((item, index) => {
//                             return<li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }
//
// export default Todolist;
//
// import React, {Component} from 'react';
//
// class Todolist extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: [],
//             inputValue: '',
//         }
//     }
//
//     handleBtnClick() {
//         this.setState({
//                 list: [...this.state.list, this.state.inputValue],
//                 inputValue:'',
//         })
//     }
//
//     handleInputChange(e) {
//         this.setState({
//             inputValue: e.target.value
//         })
//     }
//
//     handleItemClick(index) {
//         console.log(index);
//         const list=[...this.state.list];
//         list.splice(index, 1);
//         this.setState({
//             list:list
//         })
//     }
//
//     render() {
//         return(
//             <div>
//                 <div>
//                     <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
//                     <button onClick={this.handleBtnClick.bind(this)}>ADD</button>
//                 </div>
//                 <ul>
//                     {
//                         this.state.list.map((item, index) => {
//                             return <li key={index} onClick={this.handleItemClick.bind(this)}>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }
//
// export default Todolist;
//
// import React, {Component} from 'react';
// import Todoitem from './Todoitem';
//
// class Todolist extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: [],
//             inputValue: ''
//         };
//         this.handleBtnClick = this.handleBtnClick.bind(this);
//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleDelete = this.handleDelete.bind(this);
//     }
//
//     handleBtnClick() {
//         this.setState({
//             list: [...this.state.list, this.state.inputValue],
//             inputValue: '',
//         })
//     }
//
//     handleInputChange(e) {
//         this.setState({
//             inputValue: e.target.value
//         })
//     }
//
//     // handleItemClick(index) {
//     //     console.log(index);
//     //     const list=[...this.state.list];
//     //     list.splice(index, 1);
//     //     this.setState({
//     //         list:list
//     //     })
//     // }
//
//     handleDelete(index) {
//         const list = [...this.state.list];
//         list.splice(index, 1);
//         this.setState({
//             list: list
//         })
//     }
//
//     getTodoItems() {
//         return (
//             this.state.list.map((item, index) => {
//                 // return <li key={index} onClick={this.handleItemClick.bind(this)}>{item}</li>
//                 return (
//                     <Todoitem
//                         delete={this.handleDelete}
//                         key={index}
//                         content={item}
//                         index={index}
//                     />
//                 )
//             })
//         )
//     }
//
//
//     render() {
//         return (
//             <div>
//                 <div>
//                     <input value={this.state.inputValue} onChange={this.handleInputChange}/>
//                     <button onClick={this.handleBtnClick}>Add</button>
//                 </div>
//                 <ul>{this.getTodoItems()}</ul>
//             </div>
//         );
//     }
// }
//
// export default Todolist;


// import React, {Component} from 'react';
// import Todoitem from './Todoitem';
//
// class Todolist extends Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             list : [],
//             inputValue: '',
//         };
//         this.handleBtnClick=this.handleBtnClick.bind(this);
//         this.handleInputChange=this.handleInputChange.bind(this);
//         this.handleDelete=this.handleDelete.bind(this)
//     }
//
//     handleBtnClick() {
//         this.setState({
//             list: [...this.state.list, this.state.inputValue],
//             inputValue: '',
//         })
//     }
//
//     handleInputChange(e) {
//         this.setState({
//             inputValue: e.target.value
//         })
//     }
//     handleDelete() {
//         const list = [...this.state.list];
//         list.splice(list, 1);
//         this.setState({
//             list:list
//         })
//     }
//     getTodoItems() {
//         return(
//             this.state.list.map((item, index) => {
//                 return(
//                     <Todoitem delete={this.handleDelete} content={item} index={index} key={index}/>
//                 )
//             })
//         );
//     }
//     render() {
//         return(
//             <div>
//                 <div>
//                     <input value={this.state.inputValue} onChange={this.handleInputChange} />
//                     <button onClick={this.handleBtnClick}>Add</button>
//                 </div>
//                 <ul>{this.getTodoItems()}</ul>
//             </div>
//         );
//     }
// }
//
// export default Todolist;

import React, {Component} from 'react';
import Todoitem from './Todoitem';


class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state={
            list: [],
            inputValue:'',
        };
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleIuputChange=this.handleIuputChange.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    }

    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue:'',
        })
    }

    handleIuputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleDelete() {
        const list = [...this.state.list];
        list.splice(list, 1);
        this.setState({
            list:list
        })
    }

    getTodoItems() {
        return(
            this.state.list.map((item, index) => {
                return(
                    <Todoitem delete={this.handleDelete} content={item} index={index} key={index} />
                )
            })
        );
    }

    render() {
        return(
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleIuputChange} />
                    <button onClick={this.handleBtnClick}>Add</button>
                </div>
                <ul>{this.getTodoItems()}</ul>
            </div>
        );
    }
}

export default Todolist;