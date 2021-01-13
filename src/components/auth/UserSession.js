var UserSession = (function() {
    const access_level_lookup = ['not_logged', 'customer', 'worker', 'admin'];

    var access_level = 0;
    var email = '';

    var getEmail = function() {
        return email;
    };

    var getAccessLevelStr = function() {
        return access_level_lookup[access_level];
    };

    var getAccessLevel = function() {
        return access_level;
    };
    
    var strToAccessLevel = function(_str_acl) {
        return access_level_lookup.indexOf(_str_acl);
    }

    var setEmail = function(_email) {
        email = _email;
    };

    var setAccessLevel = function(_access_level) {
        access_level = strToAccessLevel(_access_level);
    };

    return {
        getEmail: getEmail,
        getAccessLevelStr: getAccessLevelStr,
        getAccessLevel: getAccessLevel,
        strToAccessLevel: strToAccessLevel,
        setEmail: setEmail,
        setAccessLevel: setAccessLevel
    };

})();

export default UserSession;
