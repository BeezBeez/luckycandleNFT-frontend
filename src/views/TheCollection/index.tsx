import React from 'react';
import { Page } from '../../components/Page';

const TheCollection = () => {
    return (
        <Page style={{ backdropFilter: 'blur(32px)', backgroundColor: 'rgba(0, 50, 20, 0.8)', borderRadius: '64px 64px 0px 0px', justifyContent: 'space-evenly' }}>
            <h1>Collection</h1>
            <img src={process.env.PUBLIC_URL + '/assets/images/NFTs/banner.jpg'} alt="" />
        </Page>
    );
}

export default TheCollection;