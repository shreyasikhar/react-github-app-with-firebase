import React from 'react'
import {Card, CardBody} from 'reactstrap'

const UserCard = ({user}) => {
    return (
        <>
            <Card className="text-center mb-4">
                <img src={user.avatar_url} className="img-thumbnail" alt=""/>
                <CardBody>
                    <div className="text-primary p-1"><h4>{user.name}</h4></div>
                    <div className="text-primary p-1"><h5>{user.location}</h5></div>
                    <div className="text-primary p-1">{user.bio}</div>
                    <hr/>
                    <div className="text-primary p-1">Available for Hire: {user.hireable ? "YES" : "NO"}</div>
                    <div className="text-primary p-1">Website: {user.blog ? user.blog: "Not Available"}</div>
                    <div className="p-1">
                        <span className="text-primary mr-3">Followers: {user.followers}</span>
                        <span className="text-primary">Following: {user.following}</span>
                    </div>
                    <hr/>
                    <div className="mt-4">
                        <a href={user.html_url} target="_blank" rel="noreferrer" className="text-decoration-none text-primary"><h5>View in GitHub</h5></a>
                    </div>
                </CardBody>
            </Card>
            <div class="desktop"></div>
        </>
    )
}

export default UserCard