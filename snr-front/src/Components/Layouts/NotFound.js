import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

export default () => (
    <Card>
        <Title title="Not Found" />
        <CardContent>
            <h1 className="titlehun">Page not found</h1>

            <p>
                The requested page couldn't be located. Checkout for any URL
                misspelling or <button className="btn btn-large bgblur"><a href="http://localhost:8080/">return to the
                homepage</a></button>
            </p>
        </CardContent>
    </Card>
);