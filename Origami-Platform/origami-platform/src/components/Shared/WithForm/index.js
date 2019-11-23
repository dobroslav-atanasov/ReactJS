import React from 'react';

export default function withForm(Component, initialState) {
    return class extends React.Component {
        state = {
            form: initialState
        };

        changeHandlerFactory = name => {
            return e => {
                e.preventDefault();
                const value = e.target.value;
                this.setState(({ form }) => {
                    return { form: { ...form, [name]: value } };
                });
            }
        };

        getFromState = () => {
            return this.state.form;
        }

        render() {
            return (
                <Component {...this.props} changeHandlerFactory={this.changeHandlerFactory} getFromState={this.getFromState}/>
            )
        }
    };
};