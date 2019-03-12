
import React, { useEffect } from 'react';
import { Button, Layout } from 'antd';

import { useQuery, useApolloClient } from 'react-apollo-hooks';
import Dashboard from 'pages/Dashboard/index';
import { Route } from 'react-router-dom'
import useReactRouter from 'use-react-router';

import { UserPageQuery } from 'graphql/test.graphql';

const { Content } = Layout;

const AppContent = () => {
  const { data } = useQuery(UserPageQuery);
  console.log('gql query', data.userPage);

  const client = useApolloClient();
  const { history, location, match } = useReactRouter();

  async function fetchUserPage() {
    // You can await here
    const { data } = await client.query({
      query: UserPageQuery,
      fetchPolicy: 'network-only'
    });
    // console.log(data);
  }

  useEffect(() => {

    fetchUserPage();
  }, [location.hash]);


  const change_url = () => {
    // console.log(match.params, location.hash);

    history.push('/#?aaa=111')
  }

  const change_url2 = () => {
    // console.log(match.params, location.hash);

    history.push('/#?aaa=222')
  }

  return (
    <Content id='app-content'>
      <Route
        path='/dash'
        component={Dashboard}
      />
      <h1> {location.hash}</h1>

      <Button onClick={change_url}>test</Button>
      <Button onClick={change_url2}>test2</Button>

    </Content>
  )
}
export default AppContent