import React from 'react'
import './Header.css'

class Header extends React.Component {
    state = {
        searchValue: ""
    }

    handleChange = (e) => {
        this.state({ 
            searchValue: e.target.value 
        })
    }

    render() {
        const { searchValue } = this.state
        return (
            <div className="header-container">
                <span>React course</span>
                <input value={searchValue} onChange={this.handleChange} placeholder="Search..." />
            </div>
        )
    }
}

export default Header