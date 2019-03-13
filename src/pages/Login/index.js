import React from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import LoginForm from './LoginForm'
import gql from 'graphql-tag';
import { useApolloClient, useMutation } from 'react-apollo-hooks';
import { Button } from "antd";

import { Login as LoginMutation } from 'graphql/user.graphql'
import './style.scss'

export const LOGIN_USER = gql`mutation Login($userName: String!, $password: String!) {
  login(password: $password, userName: $userName) {
    ok
    jwt
    error
    myCompanies {
      id
      name
    }
    currentCompanyId
  }
}`

const Login = () => {
  const apolloClient = useApolloClient();
  const
  // const login = useMutation(LOGIN_USER, {
  //   // console.log("xxx");
  //   update: (proxy, mutationResult) => {
  //     /* your custom update logic */
  //     console.log(mutationResult);
  //   },
  //   variables: {
  //     "password": "1",
  //     "userName": "admin"
  //   },
  // });


  return (
    <div>
      <Button onClick={() => { console.log("clicked"); login() }}>login</Button>
    </div>
    // <ApolloConsumer>
    //   {client => (
    //     <Mutation
    //       mutation={LoginMutation}
    //       onCompleted={({ login }) => {
    //         localStorage.setItem('token', login.jwt);
    //         localStorage.setItem('current_company_id',
    //           login.current_company_id)
    //         client.writeData({ data: { isLoggedIn: true } });
    //       }}
    //     >
    //       {(login, { loading, error }) => {
    //         if (loading) return <h2>loading</h2>;
    //         if (error) return <p>An error occurred</p>;

    //         return (
    //           <section className="form-card-page form-card row no-gutters  login-container">
    //             <div className="form-card__body  col-lg-4 offset-lg-4   p-5 px-lg-4 d-flex align-items-center">
    //               <LoginForm login={login} />;

    //         

    //             </div>
    //           </section>
    //         )
    //       }}
    //     </Mutation>
    //   )}
    // </ApolloConsumer>
  );
}

export default Login;