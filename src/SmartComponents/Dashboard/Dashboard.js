import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardHeader, CardBody, Grid, GridItem } from '@patternfly/react-core';
import { Section } from '@red-hat-insights/insights-frontend-components';

/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */
class Dashboard extends Component {

    render() {
        return (
            <Section type='content'>
                <Grid gutter='md' sm={6} lg={4}>
                    <GridItem>
                        <Card>
                            <CardHeader>Advisor</CardHeader>
                            <CardBody>Chart Stuff</CardBody>
                        </Card>
                    </GridItem>
                    <GridItem>
                        <Card>
                            <CardHeader>Security</CardHeader>
                            <CardBody>Chart Stuff</CardBody>
                        </Card>
                    </GridItem>
                    <GridItem>
                        <Card>
                            <CardHeader>Compliance</CardHeader>
                            <CardBody>Chart Stuff</CardBody>
                        </Card>
                    </GridItem>
                    <GridItem>
                        <Card>
                            <CardHeader>CMaaS</CardHeader>
                            <CardBody>Chart Stuff</CardBody>
                        </Card>
                    </GridItem>
                    <GridItem>
                        <Card>
                            <CardHeader>Inventory</CardHeader>
                            <CardBody>Chart Stuff</CardBody>
                        </Card>
                    </GridItem>
                    <GridItem>
                        <Card>
                            <CardHeader>Reports</CardHeader>
                            <CardBody>Chart Stuff</CardBody>
                        </Card>
                    </GridItem>
                </Grid>
            </Section>
        );
    }
}

export default withRouter(Dashboard);