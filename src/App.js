import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {TextField, Typography} from '@material-ui/core';
import {KeyboardDatePicker, KeyboardTimePicker} from '@material-ui/pickers';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            startDate: null,
            startTime: null,
            endDate: null,
            endTime: null
        }
    }
    onEvent = e =>{
        const { name , value } = e.target;

        console.log("입력된 값 : " , name ," [ ", value , " ]");

        this.setState({
            [name] : value
        });

        // console.log("state : ", this.state);
    };

    onDateChange = (value) => {

        console.log("입력된 값 : startDate [ ", value.format('YYYY-MM-DD') , " ]");

        this.setState({
            startDate: value.format('YYYY-MM-DD')
        });
        // console.log("state : ", this.state);
    }

    onTimeChange = (value) => {

        console.log("입력된 값 : startDate [ ", value.format('HH:mm') , " ]");

        this.setState({
            startTime: value.format('HH:mm')
        });
        // console.log("state : ", this.state);
    }



    render() {

        console.log("state : ", this.state);

        return (
            <div className="App">
                <div className="header">TODO LIST</div>
                <paper className="input_area" variant="outlined" style={{padding: '10px'}}>
                    <TextField
                        label="제목"
                        placeholder="제목을 입력해 주세요."
                        size="normal"
                        margin="normal"
                        name="title"
                        onChange={this.onEvent}
                        // value={this.state.title}
                        fullWidth required
                    />
                    <TextField
                        label="상세내용"
                        size="normal"
                        margin="normal"
                        name="content"
                        onChange={this.onEvent}
                        // value={this.state.content}
                        fullWidth multiline
                    />
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="yyyy/MM/DD"
                        margin="normal"
                        label="시작 예정일"
                        name="startDate"
                        onChange={this.onDateChange}
                        value={this.state.startDate}
                        style={{width: '50%'}}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="normal"
                        label="시작시간"
                        variant="inline"
                        name="startTime"
                        onChange={this.onTimeChange}
                        // value={this.state.startTime}
                        style={{width: '50%'}}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </paper>
                <div className="list_area">리스트 영역</div>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © 이세영 ' + new Date().getFullYear() + '.'}
                </Typography>
            </div>
        );
    }
}


export default App;
