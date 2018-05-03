import React from "react";
import ReactDOM from 'react-dom';
import './BusinessList';
import Business from '../Business/Business';

const BusinessList = {

}

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
</div>
        );
    }
}

export default BusinessList;