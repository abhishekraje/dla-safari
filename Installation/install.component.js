import React from 'react';

class Install extends React.Component {
    render() {
        return (
            <ol >
                <li>
                    <p>Double click DLA.safariextz file to run</p>
                    <img src='./../DLAExt.png' height="100" />
                </li>
                <li>
                    <p>Click Trust in the prompt</p>
                    <img src='./../trust.png' height="100" />
                </li>
            </ol>
        );
    }
}

export default Install;