import React from 'react';

class ${NAME} extends React.Component {

    render() {
        return (
            <div className="${NAME}-component">
            </div>
        );
    }
}

${NAME}.displayName = '${NAME}';
${NAME}.propTypes = {
    tour: React.PropTypes.object
};

${NAME}.contextTypes = {
    store: React.PropTypes.object
};

${NAME}.defaultProps = {};

export default ${NAME};
