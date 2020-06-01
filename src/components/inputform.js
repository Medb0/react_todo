import React from "react";
import {Paper, TextField, Button, Dialog, DialogContent, DialogTitle, DialogContentText} from "@material-ui/core";
import {KeyboardDatePicker, KeyboardTimePicker} from "@material-ui/pickers";
import SaveIcon from "@material-ui/icons/Save";
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';


class Inputform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            startDate: null,
            startTime: null,
            modalOpen: false,
        };
    }

    onEvent = e => {
        const {name, value} = e.target;

        // console.log("입력된 값 : ", name, " [ ", value, " ]");

        this.setState({
            [name]: value
        });

        // console.log("state : ", this.state);
    };

    onDateChange = (value) => {

        // console.log("입력된 값 : startDate [ ", value.format('YYYY-MM-DD'), " ]");

        this.setState({
            startDate: value.format('YYYY-MM-DD')
        });
        // console.log("state : ", this.state);
    }

    onTimeChange = (value) => {

        // console.log("입력된 값 : startDate [ ", value.format('HH:mm'), " ]");

        this.setState({
            startTime: value
        });
        // console.log("state : ", this.state);
    }

    checkValidate() {
        const {
            title, content, startDate, startTime
        } = this.state;
        if (!title || !content || !startDate || !startTime) {
            return false;
        } else {
            return true;
        }
    }

    addInputData() {
        if (this.checkValidate()) {
            const data = this.state;
            this.props.addTodoList(data);
            this.setState({
                title: "",
                content: "",
                startDate: null,
                startTime: null,
            });
        } else {
            this.setState({
                modalOpen: true
            })
        }
    }

    modalClose() {
        this.setState({
            modalOpen: false
        })
    }

    render() {

        return (
            <Paper className="input_area" variant="outlined" style={{padding: '10px'}}>
                <TextField
                    label="제목"
                    placeholder="제목을 입력해 주세요."
                    size="small"
                    margin="normal"
                    name="title"
                    onChange={this.onEvent}
                    fullWidth required
                />
                <TextField
                    label="상세내용"
                    size="small"
                    margin="normal"
                    name="content"
                    onChange={this.onEvent}
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
                    format="HH:mm"
                    variant="inline"
                    name="startTime"
                    onChange={this.onTimeChange}
                    value={this.state.startTime}
                    style={{width: '50%'}}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon/>}
                    onClick={this.addInputData.bind(this)}
                >
                    Save
                </Button>
                <Snackbar
                    open={this.state.modalOpen}
                    autoHideDuration={3000}
                    onClose={this.modalClose.bind(this)}
                    anchorOrigin={{
                        vertical:"bottom",
                        horizontal:"right"
                    }}
                >
                    <Alert severity="error">
                        Validate Check Error 발생
                    </Alert>
                </Snackbar>

                {/*<Button*/}
                {/*    variant="contained"*/}
                {/*    color="primary"*/}
                {/*    size="large"*/}
                {/*    startIcon={<DeleteIcon/>}*/}
                {/*>*/}
                {/*    Save*/}
                {/*</Button>*/}

            </Paper>
        );

    }
}

export default Inputform;