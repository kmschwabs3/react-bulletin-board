import React, {Component} from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';

class Note extends Component {
	constructor(props){
		super(props)
		this.state = {editing: false}
		this.edit = this.edit.bind(this)
		this.remove = this.remove.bind(this)
		this.renderForm = this.renderForm.bind(this)
		this.renderDisplay = this.renderDisplay.bind(this)
		this.save = this.save.bind(this)
	}

	edit() {
		this.setState({editing: true})
	}

	remove(){
		alert('Removing Note!')
	}

	save(){
		alert(this._newText.value)
	}

	renderForm(){
		return(
			<div className="note">
				<from>

					<textarea ref={input => this._newText = input}/> //this takes the typed text and makes it a value
					<button onClick={this.save}><FaSave /></button>
				</from>
			</div>
			)
	}

	renderDisplay(){
		return (
			<div className="note">
				<p>{this.props.children}</p>
				<span>
					<button onClick={this.edit} id="edit"><FaEdit /></button>
					<button onClick={this.remove} id="remove"><FaTrash /> </button>
				</span>
			</div>
			)
	}
	render (){
		return this.state.editing ? this.renderForm() : this.renderDisplay()
        /*the code above refactors this if else statement below
		if (this.state.editing){
			return this.renderForm()
		} else {
			return this.renderDisplay()
		}*/
	}
}

export default Note
