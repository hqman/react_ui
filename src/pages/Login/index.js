import React from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import LoginForm from './LoginForm';
// import { ApolloConsumer } from 'react-apollo'
import { Redirect } from "react-router-dom";
import { Login as LoginMutation } from 'graphql/user.graphql'
import './style.scss'


const Login = () => {

  // const client = useApolloClient();

  // console.log('login page...');


  return (
    <ApolloConsumer>
      {client => (
        <Mutation
          mutation={LoginMutation}
          onCompleted={({ login }) => {
            localStorage.setItem('token', login.jwt);
            localStorage.setItem('current_company_id',
              login.current_company_id ? login.current_company_id : 0)
            client.writeData({ data: { isLoggedIn: true } });
          }}
        >
          {(login, { data, loading, error }) => {
            if (loading) return <h2>loading</h2>;
            if (error) return <p>An error occurred</p>;


            // console.log(data);
            if (data && data.login.ok) {
              // console.log('login ok1');
              return <Redirect to="/dashboard" />
            }


            return (
              <section className="form-card-page form-card row no-gutters  login-container">
                <div className="form-card__body  col-lg-4 offset-lg-4   p-5 px-lg-4 d-flex align-items-center">
                  <LoginForm login={login} />
                </div>
              </section>
            )
          }}
        </Mutation>
      )}
    </ApolloConsumer>
  );
}

export default Login;