import React, { Component } from "react";

import UserSession from './UserSession';

class AccessLimit extends Component {
    render() {
        const { minLevel, maxLevel } = this.props;
        
        if(minLevel != undefined && UserSession.strToAccessLevel(minLevel) < UserSession.getAccessLevel())
            return null;

        if(maxLevel != undefined && UserSession.strToAccessLevel(maxLevel) > UserSession.getAccessLevel())
            return null;

        // Permissions are correct
        return this.props.children;
    }
}

export default AccessLimit;