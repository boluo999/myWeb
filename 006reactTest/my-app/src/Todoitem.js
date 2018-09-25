// import React, {Component} from 'react';
//
// class Todoitem extends Component {
//
//     // Todoitem 是 Todolist的子组件。
//     // 父组件通过属性的形式向子组件传递参数。
//     // 子组件通过props 接受父组件传递过来的参数
//
//     // 子组件如果想和父组件通信，子组件需要调用父组件传递过来的方法
//
//     constructor(props) {
//         super(props);
//         this.handleDelete = this.handleDelete.bind(this);
//
//     }
//
//     handleDelete() {
//         this.props.delete(this.props.index);
//     }
//
//     render() {
//         const {content} = this.props;
//         return(
//             <div onClick={this.handleDelete}>{content}</div>
//         );
//     }
// }
//
// export default Todoitem;



import React, {Component} from 'react';

class Todoitem extends Component{
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.delete(this.props.index);
    }

    render() {
        const {content} = this.props;
        return(
            <div onClick={this.handleDelete}>{content}</div>
        );
    }
}

export default Todoitem;


