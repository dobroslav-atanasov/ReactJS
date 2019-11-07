import React from 'react'
import styles from './Header.module.css'

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
            <div className={styles.headerContainer}>
                <span>React course</span>
                <input value={searchValue} onChange={this.handleChange} placeholder="Search..." />
            </div>
        )
    }
}

export default Header