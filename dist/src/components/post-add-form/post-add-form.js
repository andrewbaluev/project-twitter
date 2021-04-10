import React from 'react';
import { Component } from 'react';
 
import './post-add-form.css'

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text)
        // Очищаем инпут при отправке формы
        this.setState({
            text: ''
        });
    }

    render () {
        return (
            <form 
            className="bottom-panel d-flex"
            onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="О чем Вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button type="submit"
                    className="btn btn-outline-secondary">
                    Добавить</button>
            </form>
        )
    }
}