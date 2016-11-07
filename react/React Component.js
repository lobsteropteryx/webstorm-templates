import React from 'react';
import './tourdetail.scss';
import 'bootstrap-grid-only/bootstrap.css';
import FontIcon from 'material-ui/FontIcon';

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