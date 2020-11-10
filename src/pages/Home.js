import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

const Home = () => {
    const context = useContext(UserContext)
    const [query, setQuery] = useState('')
    const [user, setUser] = useState(null)

    const fetchDetails = async ()=> {
        try {
            const {data} = await Axios.get(`https://api.github.com/users/${query}`);
            setUser(data);
            // console.log({data})
        }
        catch(err) {
            toast("Not able to locate user", {type : "error"})
        }
    }

    // restricting to only logged in users
    // if(JSON.parse(localStorage.getItem('GithubSearchUserData'))) {
    //   const userDataFromLS = JSON.parse(localStorage.getItem('GithubSearchUserData'));
    //   context.setUser({email: userDataFromLS.email, uid: userDataFromLS.uid});
    // }
    if(!context.user?.uid) {
        return (
            <Redirect to ="/signin"/>
        )
    } 
    // if(!JSON.parse(localStorage.getItem('GithubSearchUserData'))) {
    //   return (
    //       <Redirect to ="/signin"/>
    //   )
    // } 
    return (
        <Container>
            <InputGroup className="my-5">
                <Input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Please provide the username"
                />
                <InputGroupAddon addonType="append">
                  <Button color="primary" type="submit" onClick={fetchDetails}>Fetch User</Button>
                </InputGroupAddon>
              </InputGroup>
            <Row className=" mt-3">
                <Col md="4">
                {user ? <UserCard user={user}/> : null}
                </Col>
                <Col md="8">{user ? <Repos repos_url={user.repos_url}/> : null}</Col>
            </Row>
        </Container>
      );
}

export default Home;

