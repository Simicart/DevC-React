import React from 'react';
import ReactDOM from 'react-dom';
import './BookingForm.scss';

class BookingForm extends React.Component{

	constructor(props){
		super(props);
		this.formData = {};
	}

	render(){
		return (
			<div className="booking-form">
				<div className="booking-content">
					<div className="title">
						<h2>Book a Demo</h2>
					</div>
					<div className="form">
						<form>
							
							<FormInputText form={this} name="name" placeholder="Name *" required={true}/>
							<FormInputText form={this} name="email" placeholder="Email *" required={true}/>
							<FormInputText form={this} name="job_title" placeholder="Job Title" required={true}/>

							<label>Please choose your preferred contact channel: *</label>
							<FormInputRadio form={this} name="contact_channel" options={[
								{
									label: 'Skype',
									value: 'skype'
								},
								{
									label: 'Whatsapp',
									value: 'whatsapp'
								},
								{
									label: 'Phone',
									value: 'phone'
								}
							]} required={true}/>

							<FormInputText form={this} name="skype_contact" placeholder="Enter your Skype name *" required={true} depend-field="contact_channel" depend-value="skype" />
							<FormInputText form={this} name="whatsapp_contact" placeholder="Enter your Whatsapp number *" required={true} depend-field="contact_channel" depend-value="whatsapp"/>
							<FormInputText form={this} name="phone_contact" type="phone" placeholder="Enter your Phone number *" required={true} depend-field="contact_channel" depend-value="phone"/>

							<FormInputText form={this} name="website_url" placeholder="Website URL" />

							<FormInputText form={this} name="note" placeholder="What problem you are trying to solve?" />

							<label>I'm interested in: *</label>
							<FormInputCheckbox form={this} name="program_languages" options={[
								{
									label: 'Native App',
									value: 'native_app'
								},
								{
									label: 'Progressive Web App',
									value: 'progressive_web_app'
								}
							]}/>
							
							<button>Submit</button>
						</form>
					</div>	
				</div>
			</div>
		);
	}

}

class FormInput extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {
			customAttrs: {}
		};
	}

	handleChange(e){
		let inputFields = ReactDOM.findDOMNode(this).querySelectorAll('input[depend-field="' + e.target.name + '"]');
		if( inputFields.length ){
			inputFields.forEach((input) => {
				if (input.getAttribute('depend-value') == e.target.value){
					input.style.display = 'block';
				}else{
					input.style.display = 'none';
				}
			})
		}
	}

	parseAttrs() {
		return Object.assign( {
			name       : this.props.name,
			placeholder: this.props.placeholder,
			required   : this.props.required ? 'required': null,
			onChange   : this.handleChange.bind(this.props.form)
		}, this.state.customAttrs );
	}

	parseOption(option, index) {
		return (
			<label key={index}>
				<input {...this.parseAttrs()} value={option.value} />
				{option.label}
			</label>
		);
	}
}

class FormInputText extends FormInput{
	constructor(props){
		super(props);
		this.state = {
			customAttrs: Object.assign({
				type: 'text'
			}, this.props)
		};
	}

	render(){
		return (
			<div className="form-row form-input-text">
				<input {...super.parseAttrs()}/>
			</div>
		);
	}
}

class FormInputRadio extends FormInput{

	constructor(props){
		super(props);
		this.state = {
			customAttrs: Object.assign({
				type: 'radio'
			}, this.props)
		};
	}

	render(){
		return (
			<div className="form-row form-input-radio">
				{this.props.options.map( (option, index) => super.parseOption(option, index) )}
			</div>
		);
	}
}

class FormInputCheckbox extends FormInput{
	constructor(props) {
		super(props);
		this.state = {
			customAttrs: Object.assign({
				type: 'checkbox'
			}, this.props)
		};
	}
	
	render() {
		return (
			<div className="form-row form-input-checkbox">
				{this.props.options.map((option, index) => super.parseOption(option, index))}
			</div>
		);
	}
}

export default BookingForm;