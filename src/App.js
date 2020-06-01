import React from 'react';
import './App.css';
import {List, ListItem, ListItemText, Typography} from '@material-ui/core';
import Inputform from "./components/inputform";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        }
    }

    test(data){
        console.log("부모 호출", data, this)

        this.setState({
            data
        })
    }

    saveTodoList() {
        const nowList = this.state.todoList;
        const {title, content, startDate, startTime} = this.state;
        nowList.push({
            title, content, startDate, startTime
        })

        this.setState({
            todoList: nowList,
        })
    }

    addTodoList(data){
        const nowList = this.state.todoList;
        nowList.push(data);
        this.setState({
            todoList: nowList,
        })
    }

    render() {

        // console.log("state : ", this.state);

        return (
            <div className="App">
                <div className="header">TODO LIST</div>

                <Inputform addTodoList={this.addTodoList.bind(this)}/>

                <div className="list_area">
                    <List>
                        {this.state.todoList.map((todoItem, idx) =>{
                            const {
                                title, content, startDate, startTime
                            } = todoItem;
                            return (
                                <ListItem key={idx} role={undefined} dense button>
                                    <ListItemText
                                        primary={title}
                                        secondary={startDate + ' ' + startTime.format('HH:mm')}
                                        />
                                </ListItem>
                            )
                        })}
                    </List>

                </div>

                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © 이세영 ' + new Date().getFullYear() + '.'}
                </Typography>
            </div>
        );
    }
}


export default App;
