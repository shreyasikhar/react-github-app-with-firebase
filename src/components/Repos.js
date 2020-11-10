import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {
    ListGroup, ListGroupItem
} from 'reactstrap'

const Repos = ({repos_url}) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            const {data} = await Axios.get(repos_url);
            setRepos(data);
        }
        fetchRepos();
    }, [repos_url])

    

    return (
        <>
        <ListGroup className="mb-5">
            {repos.map(repo => (
                <ListGroupItem key={repo.id}>
                    <div className="text-primary">{repo.name}</div>
                    <div className="text-secondary">{repo.language}</div>
                    <div className="text-info">{repo.description}</div>
                </ListGroupItem>
            ))}
        </ListGroup>
        <div style={{marginBottom: "125px"}}></div>
        </>
    )
}

export default Repos;