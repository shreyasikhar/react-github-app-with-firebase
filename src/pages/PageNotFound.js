import React from 'react'

const PageNotFound = () => {
    return (
        <div className="m-5 text-center">
            <h1 className=" text-danger">Error 404: Page Not found</h1>
            <h4 className="m-4"><a href="../" className="text-decoration-none">Go back to Home</a></h4>
        </div>
    )
}

export default PageNotFound;