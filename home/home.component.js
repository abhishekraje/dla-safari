import React from 'react';
import {PageHeader} from './home.styled';
class Home extends React.Component {
    render(){
        return (
            <PageHeader>
                <h1>Add to Safari!</h1>
                <p>Instructions to install DLA - Safari extension.</p>
                <a href="./../DLA.safariextz">Download</a>
                <p>Press -> to view installation instructions. </p>
            </PageHeader>
        );
    }
}
export default Home;