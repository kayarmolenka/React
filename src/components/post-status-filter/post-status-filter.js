import { Component } from "react";

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'all'},
            {name: 'like', label: 'liked'},
        ]
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            return (
                <button key={name}>{label}</button>

            )
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}