(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){"use strict";o.r(e);var n=o(0),a=o(2),i=o.n(a),d=o(10),s=o.n(d),c=(o(17),o(3)),l=o(4),r=o(6),h=o(5),u=o(7),b=o(11),j=o(1),m=o(8),p=(o(18),function(t){Object(r.a)(o,t);var e=Object(h.a)(o);function o(t){var n;return Object(c.a)(this,o),(n=e.call(this,t)).state={isEditing:!1,todo:n.props.todoName},n.handleRemove=n.handleRemove.bind(Object(j.a)(n)),n.toggleForm=n.toggleForm.bind(Object(j.a)(n)),n.handleChange=n.handleChange.bind(Object(j.a)(n)),n.handleUpdate=n.handleUpdate.bind(Object(j.a)(n)),n.handleToggle=n.handleToggle.bind(Object(j.a)(n)),n}return Object(l.a)(o,[{key:"handleRemove",value:function(){this.props.removeTodo(this.props.id)}},{key:"toggleForm",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleUpdate",value:function(t){t.preventDefault(),this.props.updateTodo(this.props.id,this.state.todo),this.setState({isEditing:!1})}},{key:"handleChange",value:function(t){this.setState(Object(m.a)({},t.target.name,t.target.value))}},{key:"handleToggle",value:function(){this.props.toggleCompletion(this.props.id)}},{key:"render",value:function(){return this.state.isEditing?Object(n.jsx)("div",{className:"Todo",children:Object(n.jsxs)("form",{onSubmit:this.handleUpdate,className:"Todo-edit-form",children:[Object(n.jsx)("input",{type:"text",value:this.state.todo,name:"todo",onChange:this.handleChange}),Object(n.jsx)("button",{children:"Update"})]})}):Object(n.jsxs)("div",{className:"Todo",children:[Object(n.jsx)("li",{className:this.props.completed?"completed":"",onClick:this.handleToggle,children:this.props.todoName}),Object(n.jsxs)("div",{className:"Todo-buttons",children:[Object(n.jsx)("button",{onClick:this.toggleForm,children:Object(n.jsx)("i",{className:"fas fa-pen"})}),Object(n.jsx)("button",{onClick:this.handleRemove,children:Object(n.jsx)("i",{className:"fas fa-trash"})})]})]})}}]),o}(a.Component)),O=o(24),g=(o(19),function(t){Object(r.a)(o,t);var e=Object(h.a)(o);function o(t){var n;return Object(c.a)(this,o),(n=e.call(this,t)).state={todoName:""},n.handleChange=n.handleChange.bind(Object(j.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n}return Object(l.a)(o,[{key:"handleChange",value:function(t){this.setState(Object(m.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){t.preventDefault();var e=Object(u.a)(Object(u.a)({},this.state),{},{id:Object(O.a)(),completed:!1});this.props.addTodo(e),this.setState({todoName:""})}},{key:"render",value:function(){return Object(n.jsxs)("form",{onSubmit:this.handleSubmit,className:"NewTodoForm",children:[Object(n.jsx)("label",{htmlFor:"newTodo",children:"New Todo: "}),Object(n.jsx)("input",{type:"text",id:"newTodo",name:"todoName",value:this.state.todoName,onChange:this.handleChange}),Object(n.jsx)("button",{children:"Add Todo"})]})}}]),o}(a.Component)),v=(o(20),function(t){Object(r.a)(o,t);var e=Object(h.a)(o);function o(t){var n;return Object(c.a)(this,o),(n=e.call(this,t)).state={todos:[]},n.addTodo=n.addTodo.bind(Object(j.a)(n)),n.removeTodo=n.removeTodo.bind(Object(j.a)(n)),n.updateTodo=n.updateTodo.bind(Object(j.a)(n)),n.toggleCompletion=n.toggleCompletion.bind(Object(j.a)(n)),n}return Object(l.a)(o,[{key:"addTodo",value:function(t){this.setState({todos:[].concat(Object(b.a)(this.state.todos),[t])})}},{key:"removeTodo",value:function(t){this.setState({todos:this.state.todos.filter((function(e){return e.id!==t}))})}},{key:"updateTodo",value:function(t,e){var o=this.state.todos.map((function(o){return o.id===t?Object(u.a)(Object(u.a)({},o),{},{todoName:e}):o}));this.setState({todos:o})}},{key:"toggleCompletion",value:function(t){var e=this.state.todos.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e}));this.setState({todos:e})}},{key:"render",value:function(){var t=this,e=this.state.todos.map((function(e){return Object(n.jsx)(p,{todoName:e.todoName,id:e.id,completed:e.completed,removeTodo:t.removeTodo,updateTodo:t.updateTodo,toggleCompletion:t.toggleCompletion},e.id)}));return Object(n.jsxs)("div",{className:"TodoList",children:[Object(n.jsx)("h1",{children:"Todo List"}),Object(n.jsx)("ul",{children:e}),Object(n.jsx)(g,{addTodo:this.addTodo})]})}}]),o}(a.Component)),f=(o(21),function(t){Object(r.a)(o,t);var e=Object(h.a)(o);function o(){return Object(c.a)(this,o),e.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(v,{})})}}]),o}(a.Component)),T=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,25)).then((function(e){var o=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,d=e.getTTFB;o(t),n(t),a(t),i(t),d(t)}))};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),T()}],[[22,1,2]]]);
//# sourceMappingURL=main.df8a38af.chunk.js.map